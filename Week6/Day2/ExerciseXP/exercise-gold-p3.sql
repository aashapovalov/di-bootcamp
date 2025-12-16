alter table items
	add items_id serial primary key;

alter table customers
	add customer_id serial primary key;

create table  purchases(
id serial,
customer_id int,
item_id int,
quantity_purchased int,
primary key (id),
foreign key (customer_id) references customers(customer_id),
foreign key (item_id) references items(items_id)
);

insert into purchases (customer_id, item_id, quantity_purchased)
	values 
		(3, 3, 1),
		(5, 2, 10),
		(1, 1, 2);

select * from purchases;
select * from purchases join customers on purchases.customer_id = customers.customer_id;
select * from purchases where customer_id = 5;
select * from purchases where item_id in (select items_id from items where item_name in ('Large Desk','Small Desk'));
select customers.first_name, customers.first_name, items.item_name 
	from purchases
	join customers on purchases.customer_id = customers.customer_id 
	join items on purchases.item_id = items.items_id 
	
insert into purchases (customer_id, item_id, quantity_purchased)
	values 
		(3, 10, 10);
