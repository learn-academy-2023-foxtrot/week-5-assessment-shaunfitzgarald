# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: sfs

1. Why would super be used in a Ruby class?

Your answer: Super would be used in ruby to pass information from a superclass to the subclass.

Researched answer: 

2. What is a relational database? Are there other kinds of databases?

Your answer: A relational database, is a a database in which elements are related to each other. So there could be an overarching table that holds something, say Person, and a subcatergory, a Pet. The Person has_many pets, where as the Pet belongs_to the person.These  (has_many and belongs_to) are terms in Ruby that you use to denote the relationship between tables. Each instance has a key or id number, bbut the subtable instances have a foreign key, aka the key of the superior table. This allows the sub table instances to be correlated with the overarching table instances they belong to. 
There are non relational databases where this is not the case.

Researched answer: A relational database is a type of database that stores and organizes data in tables with predefined relationships between them. It uses SQL (Structured Query Language) to manage and manipulate data. Other types of databases include NoSQL databases, which do not use tables and are more flexible in their data structures, and object-oriented databases, which store data as objects rather than in tables. In Ruby on Rails, you can use ActiveRecord to interact with relational databases.

3. What are primary keys? Why purpose does a primary key serve?

Your answer: A primary key is the main key/id to identify an instance in a table. It is assigned when the instance is created and will not be changed. If an instance is deleted, the primary key it was assigned will not be rea-assigned to a new instance. It is locked to what it was originialy assigned to. This is opposed to a foreign key where the foreign key denotes the instance from a higher table that the instance "belongs_to".

Researched answer: A primary key is a unique identifier for each record in a database table. It serves the purpose of ensuring that each record can be uniquely identified and accessed. Primary keys are used to enforce data integrity by preventing duplicate records and ensuring that each record has a unique identifier. They are also used to establish relationships between tables in a relational database.

4. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: Get, post, put, patch, delete. Get corresponds to read. Post: create. Put: update. Patch: update. Delete: delete.

Researched answer: "" Put: Update (replaces). Patch: Update (modifies). These verbs are used to interact with web resources and perform CRUD operations on them. For example, a GET request can be used to retrieve data from a server, while a POST request can be used to create a new resource on the server.

5. STRETCH: What is a JOIN table in SQL? 

Your answer: A table in which the relationships are equal to each other. No higher or super-table to a sub-table; all tables are equal to each other.

Researched answer: A JOIN table in SQL is a table that is used to create a many-to-many relationship between two other tables. It typically contains foreign keys that reference the primary keys of the other two tables. The purpose of a JOIN table is to allow records from one table to be associated with multiple records from another table, and vice versa. For example, if you have a table of users and a table of groups, a JOIN table could be used to associate multiple users with multiple groups. In SQL, you can use JOIN statements to combine data from multiple tables, including JOIN tables.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: Model validations are a way to ensure that data entered into a model meets certain requirements or constraints. They are used to validate the correctness and consistency of data before it is saved to the database. Model validations can be used to enforce data integrity, prevent invalid data from being saved, and provide feedback to users when data is entered incorrectly. In JavaScript frameworks like Node.js and Express, you can use libraries like Joi or Validator.js to perform model validations on your data.

2. Params: Params s a term used to refer to the parameters or arguments passed in a URL or HTTP request. These parameters can be used to pass data to a server or to specify certain actions or behaviors.

3. API:API stands for Application Programming Interface. It is a set of protocols, routines, and tools for building software applications. APIs define how software components should interact with each other, allowing different applications to communicate and share data. APIs can be used to access data from external sources, such as social media platforms or weather services, or to integrate different software components within a single application.
