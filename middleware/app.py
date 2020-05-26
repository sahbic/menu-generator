import os
import json
import logging

from flask import Flask, jsonify, request, render_template

from utils.queries import read_ingredients, read_recipes
from utils.selection import select_random

app = Flask(__name__)

API_URL = 'http://localhost:1337'


@app.route('/api/randomMeals/')
def randomMeals():
    data = read_recipes(API_URL)
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