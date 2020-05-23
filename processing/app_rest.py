import os
import json
import logging
from flask import Flask, jsonify, request

from utils import *

app = Flask(__name__)

APP_ROOT = os.path.dirname(os.path.abspath(__file__))
DATA_FOLDER = os.path.join(APP_ROOT, 'data/')

@app.route('/api/items/')
def items():
    json_data = read_items(DATA_FOLDER)
    return(jsonify(json_data))

@app.route('/api/recipes/')
def recipes():
    json_data = read_recipes(DATA_FOLDER)
    return(jsonify(json_data))

@app.route('/api/randomMeals/')
def randomMeals():
    data = read_recipes(DATA_FOLDER)
    if 'number' in request.args:
        try:
            num_meals = int(request.args['number'])
        except ValueError:
            return("Invalid number",400)
    else:
        num_meals = 5
    list_indexes = select_random(num_meals,data)
    list_meals = [data[i] for i in list_indexes]
    return(jsonify(list_meals))

if __name__ == "__main__":
    app.run()