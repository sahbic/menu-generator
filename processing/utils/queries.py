import sqlite3


def read_ingredients(db):
    c = db.cursor()
    c.execute("SELECT * FROM ingredients")
    resultat  = c.fetchall()
    c.close()
    return(resultat)

def read_recipes(db):
    c = db.cursor()
    c.execute("SELECT * FROM recipes")
    resultat  = c.fetchall()
    c.close()
    return(resultat)