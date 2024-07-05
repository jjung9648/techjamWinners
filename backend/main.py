from fastapi import FastAPI, HTTPException, Query
from schemas import ItemCreate, ItemSearchResult
import asyncio
from DataUtils import *
import json


app = FastAPI()

@app.on_event("startup")
def on_startup():
    initialize()

@app.post("/items/")
async def add_item(item: ItemCreate):
    try:
        success = await asyncio.get_event_loop().run_in_executor(
            None,
            insert_data,
            item.name,
            item.price,
            item.category,
            item.location,
            item.description
        )

        if not success:
            return HTTPException(status_code=400, detail="Item could not be inserted")
        return {"status": "success"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/items/", response_model=list[ItemSearchResult])
async def get_items(query: str = Query(...),
    metadata: str = Query("{}"),
    top_k: int = Query(10)
    ):
    try:
        metadata_dict = json.loads(metadata)
        results = await asyncio.get_event_loop().run_in_executor(
            None,
            search_vector,
            query,
            metadata_dict,
            top_k
        )
        print(results)

        transformed_results = [
            ItemSearchResult(
                id=result['id'],                
                metadata=result['metadata'],
                score=result['score'],
            ) for result in results
        ]
        
        return transformed_results
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

