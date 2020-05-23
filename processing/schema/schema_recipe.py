from datetime import datetime
from graphene_sqlalchemy import SQLAlchemyObjectType
from utils.base import db_session
from utils.model_recipe import ModelRecipe
import graphene
import utils

from sqlalchemy.orm import relationship


class Recipe(SQLAlchemyObjectType):
    """Recipe node."""

    class Meta:
        model = ModelRecipe
        interfaces = (graphene.relay.Node,)
