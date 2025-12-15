create table items (
item_name text,
price int)

create table customers (
first_name text,
last_name text
)

insert into items (item_name, price) values  
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80)

insert into customers (first_name, last_name) values 
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson')

select * from items;
select * from items where price>80;
select * from items where price<=300;
select * from customers where last_name = 'Smith';
select * from customers where last_name = 'Jones';
select * from customers where first_name != 'Scott';