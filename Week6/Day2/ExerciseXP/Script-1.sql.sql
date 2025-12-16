select * from customer; 
select (first_name, last_name) as full_name from customer;
select distinct(create_date) from customer; 
select * from customer order by first_name desc;
select film_id, title, description, release_year, rental_rate from film order by rental_rate asc;
select address, phone from address where district = 'Texas';
select * from film where film_id = 15 or film_id = 150;
select film_id, title, description, length, rental_rate from film where title = 'Terminator';
select film_id, title, description, length, rental_rate from film where title like '%ay%';
select * from film order by film.rental_rate asc limit 10;
select * from film order by film.rental_rate asc limit 10 offset 10;
select first_name, last_name, amount, payment_date from customer inner join payment on customer.customer_id = payment.customer_id order by customer.customer_id asc;
select * from film left join inventory on film.film_id = inventory.film_id  where inventory.film_id is null;
select distinct city.city, country.country from city join country on city.country_id   = country.country_id; 
select customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date, payment.staff_id
	from customer
	join payment
	on customer.customer_id = payment.customer_id 
	order by payment.staff_id;
