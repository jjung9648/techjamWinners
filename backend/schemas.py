from pydantic import BaseModel
from typing import Dict, Any, List

class ItemCreate(BaseModel):
    price: float
    category: str
    location: str
    description: str

class SparseValues(BaseModel):
    indices: List[int]
    values: List[float]

class ItemSearchResult(BaseModel):
    id: str
    metadata: Dict[str, Any]
    score: float