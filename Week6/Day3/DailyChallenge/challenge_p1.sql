create table customer (
id serial,
first_name text,
last_name text not null, 
primary key(id)
)

create table customer_profile (
profile_id serial,
is_logged_in bool default false,
customer_id int, 
primary key(profile_id),
foreign key (customer_id) references customer(id)
)

insert into customer (first_name, last_name)
values 
('Jonn', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive')

insert into customer_profile (is_logged_in, customer_id)
values
('true', 1),
('false', 2)

select customer.first_name from customer
join customer_profile on customer.id = customer_profile.customer_id
where customer_profile.customer_id in (select customer_id from customer_profile where is_logged_in = 'true')

select customer.first_name, customer_profile.is_logged_in from customer
left join customer_profile on customer.id = customer_profile.customer_id

select count(*) from customer
join customer_profile on customer.id = customer_profile.customer_id
where customer_profile.customer_id in (select customer_id from customer_profile where is_logged_in != 'true')