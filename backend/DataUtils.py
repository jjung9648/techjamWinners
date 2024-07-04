from pinecone.grpc import PineconeGRPC as Pinecone
from pinecone import ServerlessSpec
from dotenv import load_dotenv
from langchain_openai import OpenAIEmbeddings
import os

load_dotenv()

pc = Pinecone(api_key=os.getenv("PC_API_KEY"))

index_name = "quickstart-index"
embeddings_model = None
total_vectors = None
def initialize():
    global embeddings_model
    embeddings_model = OpenAIEmbeddings(api_key=os.getenv("OPENAI_API_KEY"))
    if index_name not in pc.list_indexes().names():
        pc.create_index(
            name=index_name,
            dimension=1536, # Open Ai Embedding size
            metric="cosine",
            spec=ServerlessSpec(
                cloud='aws', 
                region='us-east-1'
            ) 
        ) 
    
def insert_data(price:float,category:str,location:str,description:str)->bool:
    """
    A function that inserts data with the given parameters and returns a boolean.
    
    Parameters:
    - price (float): The price of the item to be inserted.
    - category (str): The category of the item.
    - location (str): The location where the item is located.
    - description (str): The description of the item.
    
    Returns:
    - bool: True if the data was successfully inserted, False otherwise.
    """
    global total_vectors
    metadata = {
        "price": price,
        "category": category,
        "location": location,
        "description": description        
    }
    embedding = embeddings_model.embed_documents([description])[0]
    try:
        index = pc.Index(index_name)
        index.upsert(vectors=[
        {
            "id": "vec{0}".format(getVectorCount()),
            "values": embedding,            
            "metadata": metadata
        }])
        total_vectors +=1
        return True
    except Exception as e:
        print(e)
        return False
    
def getVectorCount()->int:
    """
    A function that returns the number of vectors in the index.
    
    Returns:
    - int: The number of vectors in the index.
    """
    global total_vectors
    if total_vectors is not None:
        return total_vectors    
    else:
        index = pc.Index(index_name)
        total_vectors = index.describe_index_stats()['total_vector_count']
        return total_vectors

if __name__ == "__main__":
    initialize()
    print(getVectorCount())
    insert_data(15,"test","test","test")
    print(getVectorCount())