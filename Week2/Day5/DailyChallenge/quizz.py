# ---------------------------
# What is a class?
# ---------------------------
# A class is a blueprint/template for creating objects.
# It defines attributes (data) and methods (functions) that the objects will have.


# ---------------------------
# What is an instance?
# ---------------------------
# An instance is an individual object created from a class.
# Each instance has its own data based on the class definition.


# ---------------------------
# What is encapsulation?
# ---------------------------
# Encapsulation means hiding internal data and methods inside a class,
# exposing only what is necessary.
# It protects the internal state of an object.
# In Python this is done by naming convention (_protected, __private).


# ---------------------------
# What is abstraction?
# ---------------------------
# Abstraction means showing only the important parts of an object
# while hiding complex implementation details.
# Example: you call .sort() without knowing the algorithm inside.


# ---------------------------
# What is inheritance?
# ---------------------------
# Inheritance allows one class (child) to reuse and extend the behavior
# of another class (parent).
# The child class inherits attributes and methods from the parent class.


# ---------------------------
# What is multiple inheritance?
# ---------------------------
# Multiple inheritance means a class can inherit from more than one parent class.
# Example: class Child(Parent1, Parent2)
# Python supports this directly.


# ---------------------------
# What is polymorphism?
# ---------------------------
# Polymorphism means that different classes can provide a method
# with the same name, and Python decides at runtime which one to call.
# Example: different objects have .speak() but behave differently.


# ---------------------------
# What is MRO (Method Resolution Order)?
# ---------------------------
# MRO is the order in which Python looks for methods and attributes
# when they are called on an object.
# It is especially important in multiple inheritance.
# You can see it using: ClassName.__mro__ or ClassName.mro()
