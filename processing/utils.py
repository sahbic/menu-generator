import json
import random
import smtplib
import getpass
import csv
import os

import numpy as np

from email.mime.text import MIMEText
from scipy.cluster.vq import vq, kmeans, whiten, kmeans2

"""read the JSON file"""
def read_recipes(DATA_FOLDER):
	with open(DATA_FOLDER + 'bouffe.json') as file:
		data = json.load(file);
	return(data['menu'])
	data.close()

def read_items(DATA_FOLDER):
	with open(DATA_FOLDER + 'items.json') as file:
		data = json.load(file);
		return(data['items'])
	data.close()

"""generate graph csv file"""
def generate_graph(data):
	with open('graph.csv', 'w') as fp:
	    a = csv.writer(fp, delimiter=',')
	    matrix = adjacency_matrix(data)
	    a.writerows(matrix)

"""generate a random list of meal indexes"""
def select_random(num_meals,data):
	all_meals = len(data)
	list_random_indexes = random.sample(range(all_meals),num_meals)
	return list_random_indexes

"""dissimilarity function : Hamming distance"""
def hamming_distance(list1,list2):
	return sum([(i not in list1) for i in list2])

"""dissimilarity function : modified Hamming distance"""
def custom_distance(list1,list2):
	l1 = len(list1)
	l2 = len(list2)
	d1 = sum([(i not in list1) for i in list2])
	d2 = sum([(i not in list2) for i in list1])
	return (d1+d2)/(float)(l1+l2)

"""Compute weighted adjacency matrix A"""
def adjacency_matrix(data):
	n = len(data)
	A = np.zeros(shape=(n,n))
	for i in range(n):
		list1 = data[i][u'groceries']
		for j in range(n):
			list2 = data[j][u'groceries']
			A[i,j]= custom_distance(list1,list2)
	return A

"""Compute the diagonal degree matrix"""
def degree_matrix(data,adjacency_matrix):
	n = len(data)
	A = adjacency_matrix
	v = [sum(A[i,:]) for i in range(n)]
	D = np.diag(v)
	return D

"""Compute the graph Laplacian martix"""
def graph_laplacian(A,D):
	return D - A

"""compute the clusters for meals by spectral clustering"""
def compute_clusters(data,k):
	A = adjacency_matrix(data)
	D = degree_matrix(data,A)
	L = graph_laplacian(A,D)
	eigenValues,eigenVectors = np.linalg.eig(A)
	idx = eigenValues.argsort()
	idx_ksmall = idx[:k]
	X = eigenVectors[idx_ksmall]
	while True:
		[centers,clusters] = kmeans2(np.transpose(X),k,iter=100,minit='points')
		check = [i in clusters for i in range(k)]
		if 0 not in check:
			break
	return clusters

"""generate a list of meal indexes by maximizing dissimilarity"""
def select_dissimilar(num_meals,data):
	clusters = compute_clusters(data,num_meals)
	all_meals = len(data)
	list_random_indexes = []
	for i in range(num_meals):
		while True:
			j = random.randint(0,all_meals-1)
			if clusters[j] not in clusters[list_random_indexes]:
				list_random_indexes.append(j)
				break
	return list_random_indexes

"""select the meals from given indexes"""
def select_meals(list_indexes,data):
	list_meals = [data[i][u'meal'] for i in list_indexes]
	return list_meals

"""list of groceries"""
def get_groceries(list_indexes,data):
	list_groceries = []
	for i in list_indexes:
		for j in data[i][u'groceries']:
			list_groceries.append(j)
			
	for j in list_groceries:
		nt = list_groceries.count(j)
		if nt>1:
			k = list_groceries.index(j)
			list_groceries[k] += ' x'+ str(nt)
			while nt-1>0:
				list_groceries.remove(j)
				nt = list_groceries.count(j)

	return list_groceries

"""list of groceries: ordered"""
def get_groceries_ordered(list_indexes,data,items):
	list_groceries = []
	lists_detailed = []
	list_types = []
	for i in list_indexes:
		for j in data[i][u'groceries']:
			list_groceries.append(j)

	for j in items:
		if j[u'name'] in list_groceries:
			list_types.append(j[u'type'])
	list_types = np.unique(list_types)

	for k in list_types:
		# details: list of the items of the same type
		details = []
		for j in items:
			if j[u'type'] == k and j[u'name'] in list_groceries:
				details.append(j[u'name'])
		#details_tuples: list of (item,count) for each type
		details_tuples = [(i,str(list_groceries.count(i))) for i in details]
		lists_detailed.append(details_tuples)
	
	return [lists_detailed,list_types]

"""Main"""
def generate_menu():
	data =read_data()
	items = read_items()
	n = input('Enter the number of meals :\n')

	# list_indexes = select_random(n,data)
	list_indexes = select_dissimilar(n,data)
	list_meals = select_meals(list_indexes,data)
	# list_groceries = get_groceries(list_indexes,data)
	[list_groceries,list_types] = get_groceries_ordered(list_indexes,data,items)

	# create string
	str = 'Menu :\n'
	for meal in list_meals:
		str += '- '+meal+'\n'
	str += 'List :'+'\n'
	for i in range(len(list_types)):
		str += ' '+list_types[i]+':'+'\n'
		for item_tuple in list_groceries[i]:
			str += '-  '+item_tuple[1]+' '+item_tuple[0]+'\n'

	#print string
	#print str.encode('utf8')

	generate_graph(data)