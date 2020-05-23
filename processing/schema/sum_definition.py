import graphene

from utils.calculations import calculate_sum

class SumInput(graphene.InputObjectType):
    s1 = graphene.String(required=True)
    s2 = graphene.String(required=True)

class SumPayload(graphene.ObjectType):
    my_sum = graphene.Float()

class ComputeSum(graphene.Mutation):
    class Arguments:
        input = SumInput(required=True)

    Output = SumPayload

    def mutate(self, info, input):
        return {
          "my_sum": calculate_sum(input)
        }