select rating, count(film_id) from film group by rating;
select * 
	from film 
	where (rating = 'G' or rating = 'PG-13') and rental_rate < 3  and length < 120
	order by  title asc;

select * from customer 
	where customer_id = 28;

update customer 
	set first_name = 'Alex', last_name = 'Sh'
	where customer_id = 28;

select * from address 
	where address_id in (select address_id from customer 
	where customer_id = 28);

update address 
	set address = '1234 nowhere manor', district = 'nowhere', postal_code = 12345
	where address_id in (select address_id from customer 
	where customer_id = 28);

select * from address 
	where address_id in (select address_id from customer 
	where customer_id = 28)