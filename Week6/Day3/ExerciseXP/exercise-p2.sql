update film
set language_id = 5
where film_id between 1 and 100;

-- foreign keys in customer table are: store_id and address_id. So when we create a new customer we need to ensure
-- that foreign key values exist in parent tables, or the insert operation will fail.

select count(*) from rental where return_date is null;

select film.title, film.rental_rate from film
left join inventory on film.film_id = inventory.film_id 
where inventory_id in (select rental.inventory_id  from rental where return_date is null)
order by film.rental_rate desc
limit 30;

select title from film
join film_actor on film.film_id = film_actor.film_id 
where description ilike '%sumo%' and description ilike '%wrestler%' 
and actor_id in (select actor_id from actor where actor.first_name = 'Penelope' and actor.last_name = 'Monroe');

select title from film
join film_category on film.film_id  = film_category.film_id 
where film.length < 60
and category_id in (select category_id from category where name = 'Documentary');

select title from film
join inventory on film.film_id = inventory.film_id 
where rental_rate > 4
and inventory_id in (select inventory_id from rental 
	where return_date between '2005-07-28' and '2005-08-01'
	and customer_id in (select customer_id from customer
		where customer.first_name = 'Matthew' and customer.last_name = 'Mahan' ));

select title from film
join inventory on film.film_id = inventory.film_id 
where (description ilike '%boat%' or description ilike '%boat%') 
and inventory_id in (select inventory_id from rental 
	where customer_id in (select customer_id from customer
		where customer.first_name = 'Matthew' and customer.last_name = 'Mahan' ))
order by film.replacement_cost
limit 1;


