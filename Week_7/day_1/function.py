#function
from optparse import Values
from os import stat


def name_of_the_function():
    """"Docstrings -provide some information about the function"""
    print("Hello World")
    print("Happy to see you guys back!")
# clling a function
name_of_the_function()

#passing information to a function

def say_hello(name):   # parameter => variable
    print("Hello {}".format(name))

say_hello('Luarent')  #Arugment =>value i.e 'laurent'

students=[
    'joeri',
    'ally',
    'shivastav',
    'laurent',
    'angkush',
    'bruno',
    'kadeer'
]
for student in students:
      say_hello(student)

#two or more parameter
def find_sum(a, b):
    print('{}'.format(a+b))

find_sum (1, 2)
find_sum(2, 3)

#default value
#find_sum(1)

def find_sum_default(a=None, b=None):
    if a is None:
        print("Second arugment missing")
    elif b is None:
        print("Second arugment missing")
    else:
         print('{}'.format(a+b))

find_sum_default()
find_sum_default(1)
find_sum_default(1, 2)

#example
def say_hello_lang(username, language):
    if language == "EN":
        print("Hello "+username)
    elif language == "FR":
        print("Bonjour "+username)
    else:
        print("This language is not supported: " + language)

say_hello_lang("Rick", "FR")
say_hello_lang("BRUNO", "EN")
say_hello_lang("FRANCESCO", "IT")

#keywords Arugment (name-value pair)
say_hello_lang("FR", "Rick")
say_hello_lang(language="FR", username="Rick")

#Alway specify keyword  arugment AFTER positional arugment
say_hello_lang("Rick", language="FR")

#Global score
day = 'Monday'#GLOBAL VARIABLE
def get_today_temp(temp):
    print("Today is {} and it is {}c".format(day, temp))

get_today_temp(18)
#print(temp) #temp is defined only witnin the function

#return a value
def find_sum_return(a, b):
    print('{}'.format(a+b))
    return

#sum = find_sum_return(1, 3)
#print("sum is {}".format(sum))

#Returning more than  1 value
#def format_name(first_name, last_name):
#    return(first_name,last_name)

##def calculation(a, b):
  #  return(a+b)(a-b)

#res = calculation(40, 10)
#print(res)

#list as arugment#
#def greet_persons(persons):
#    for person in persons
#    print("HELLO {}".format(persons.title()))
#greet_persons(students)

#Lambda Function
#Mapping witn lambda
myList = [10, 25, 17, 9, 30, -5]
# Double the value of each element
myList2 = map(lambda n : n*2, myList)
print (myList2)
print(list(myList2))

#filtering using lambda
myList = [10, 25, 17, 9, 30, -5]
# Filters the elements which are not multiples of 5
myList3 = filter(lambda n : n%5 == 0, myList)
print (myList3)
print(list(myList3))

#EXERCISE
#find the standard deviatation of a list of values
values = [1, 2, 3, 4 ,5 , 6, 7 , 8, 9, 10]


def find_mean(nums):
    return sum(nums)/len(nums)

u = find_mean(values)
diff= list(map(lambda n : (n-u)*(n-u), values))
print(diff)

var = find_mean(diff)
print(var)

import math
stdev = math.sqrt(var)
print('{:.3f}'.format(stdev))

import statistics
print('{:.3f}'. format(statistics.pstdev(values)))
