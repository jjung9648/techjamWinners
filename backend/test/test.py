import requests

url = "http://localhost:8000/items/"
params = {
    "query": "durable bag",
    "metadata": '{"category":{"$eq":"Bags"},"location":{"$eq":"NY"}}',
    "top_k": 10
}
response = requests.get(url, params=params)
print(response.json())
