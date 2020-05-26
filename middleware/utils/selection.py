import random

"""generate a random list of meal indexes"""
def select_random(num_meals,data):
	all_meals = len(data)
	list_random_indexes = random.sample(range(all_meals),num_meals)
	return list_random_indexes