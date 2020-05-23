import os
import json
import logging

from flask import Flask, jsonify, request, render_template
from flask_graphql import GraphQLView

from utils.queries import read_ingredients, read_recipes
from utils.selection import select_random
from utils.base import db_session, engine

from schema.schema import Schema

app = Flask(__name__)

logging.warning("---------------------",engine.table_names())

app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view('graphql', schema=Schema, graphiql=True
))

# @app.route('/api/randomMeals/')
# def randomMeals():
#     data = read_recipes(db)
#     if 'number' in request.args:
#         try:
#             num_meals = int(request.args['number'])
#         except ValueError:
#             return("Invalid number",400)
#     else:
#         num_meals = 5
#     list_indexes = select_random(num_meals,data)
#     list_meals = [data[i]['recipename'] for i in list_indexes]
#     return(jsonify(list_meals))

@app.teardown_appcontext
def shutdown_session(exception=None):
    # db.close()
    db_session.remove()

if __name__ == "__main__":
    app.run()