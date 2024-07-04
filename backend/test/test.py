import requests

url = "http://localhost:8000/items/"
params = {
    "query": "test",
    "metadata": '{"category":"test","location":"test"}',
    "top_k": 10
}
response = requests.get(url, params=params)
print(response.json())
