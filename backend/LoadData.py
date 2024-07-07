from pinecone.grpc import PineconeGRPC as Pinecone
from dotenv import load_dotenv
from langchain_openai import OpenAIEmbeddings
import os

load_dotenv()

pc = Pinecone(api_key=os.getenv("PC_API_KEY"))

index_name = "quickstart-index"
total_vectors = None

# Initialize the embeddings model
embeddings_model = OpenAIEmbeddings(api_key=os.getenv("OPENAI_API_KEY"))

#Read csv files
files = ['data/bags_products.csv','data/shoes_products.csv']
def mapRows(row):
    global total_vectors
    res = {
        "id": "vec{0}".format(getVectorCount()),
        "metadata":{
        "name": row["product_name"],
        "description": row["description"],
        "category": row["category"],
        "location": row["location"],
        "price": row["price"]
        },
        "values": embeddings_model.embed_query(row["description"])
    }
    total_vectors += 1
    return res

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
    
def read_csv(file_path):
    with open(file_path, 'r') as file:
        lines = file.readlines()

    headers = lines[0].strip().split(',')
    rows = []
    for line in lines[1:]:
        values = line.strip().split(',')
        row_dict = {headers[i]: values[i] for i in range(len(headers))}
        rows.append(row_dict)

    return rows
if __name__ == "__main__":
    index = pc.Index(index_name)
    for file in files:
        data_list = read_csv(file)
        data_list = list(map(mapRows,data_list))
        index.upsert(vectors=data_list)
        print("File {0} loaded".format(file))
