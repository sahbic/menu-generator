# import sqlite3

# DATABASE_PATH = '../backend/.tmp/data.db'

# db = sqlite3.connect(DATABASE_PATH, check_same_thread=False)
# db.row_factory = sqlite3.Row


from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker
import os

# Create database engine
db_path = '../backend/.tmp/data.db'
db_uri = 'sqlite:///{}'.format(db_path)
engine = create_engine(db_uri, convert_unicode=True)

# Declarative base model to create database tables and classes
Base = declarative_base()
Base.metadata.bind = engine  # Bind engine to metadata of the base class

# Create database session object
db_session = scoped_session(sessionmaker(bind=engine, expire_on_commit=False))
Base.query = db_session.query_property()  # Used by graphql to execute queries