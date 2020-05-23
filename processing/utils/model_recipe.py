from .base import Base
from sqlalchemy import Column, ForeignKey, Integer, String


class ModelRecipe(Base):
    """Recipe model."""

    __tablename__ = 'recipes'

    id = Column('id', Integer, primary_key=True)
    recipename = Column('recipename', String)
    slug = Column('slug', String)
    description = Column('description', String)
    exerpt = Column('exerpt', String)
    created_at = Column('created_at', String)
    updated_at = Column('updated_at', String)

    # peopleList = relationship(ModelPeople, backref='recipes')
