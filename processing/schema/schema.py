import graphene
import os
from schema.sum_definition import ComputeSum
from schema.schema_recipe import Recipe

class Query(graphene.ObjectType):
    healthcheck = graphene.Boolean(required=True)
    node = graphene.relay.Node.Field()
    recipe = graphene.relay.Node.Field(Recipe)

    def resolve_healthcheck(self, info):
        return True


class Mutation(graphene.ObjectType):
    my_sum = ComputeSum.Field()

Schema = graphene.Schema(query=Query, mutation=Mutation)