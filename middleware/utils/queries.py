import requests
import json


def read_recipes(API_URL):
    r = requests.get(API_URL+'/recipes')
    json_data = json.loads(r.text)
    return(json_data)

def read_ingredients(API_URL):
    r = requests.get(API_URL+'/ingredients')
    json_data = json.loads(r.text)
    return(json_data)