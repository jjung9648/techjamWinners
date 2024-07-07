import pinecone
import requests
from pinecone.grpc import PineconeGRPC as Pinecone
from dotenv import load_dotenv
import os
from LoadData import read_csv
load_dotenv()

# Step 1: Initialize Pinecone and connect to the index
pc = Pinecone(api_key=os.getenv("PC_API_KEY"))
index_name = "quickstart-index"
index = pc.Index(index_name)


# Step 3: Function to get Unsplash image URLs
def get_pixabay_images(query, num_images=3):
    url = "https://pixabay.com/api/"
    params = {
        "key": os.getenv("PIXABAY_API_KEY"),
        "q": query,
        "per_page": num_images,
        "image_type": "photo"
    }
    response = requests.get(url, params=params)
    data = response.json()
    if data['hits']:
        return [hit['webformatURL'] for hit in data['hits']]
    return []

# Step 5: Update vectors in Pinecone with image URLs for vector_id in index.list()::
total_vectors = 1
for file in ["data/bags_products.csv","data/shoes_products.csv"]:
    data_list = read_csv(file)
    for row in data_list:        
        image_urls = get_pixabay_images(row['product_name'])
        print(image_urls)
        if len(image_urls) > 0:
            index.update(id=f"vec{total_vectors}", set_metadata={"image_urls": image_urls})
            total_vectors += 1