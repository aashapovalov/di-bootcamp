select title from film f 
join inventory i on f.film_id = i.film_id
join rental r on i.inventory_id = r.inventory_id
where r.return_date is null;

select first_name, last_name from customer c 
join rental r on c.customer_id = r.customer_id 
where r.return_date is null
group by c.first_name, c.last_name 

select title from film f 
join film_category fc on f.film_id = fc.film_id
join category c on fc.category_id = c.category_id 
join film_actor fa on f.film_id = fa.film_id 
join actor a on fa.actor_id = a.actor_id 
where c.name = 'Action' 
and a.first_name = 'Joe'
and a.last_name = 'Swank';

select count(*), c.city, c2.country from store s
join address a on s.address_id = a.address_id 
join city c on a.city_id = c.city_id
join country c2 on c.country_id = c2.country_id 
group by country, city;

select sum(f.length), s.store_id from film f 
join inventory i on f.film_id = i.film_id
join rental r on i.inventory_id = r.inventory_id 
join staff s on r.staff_id = s.staff_id 
join store s2 on s.store_id = s2.store_id
where r.return_date is not null
group by s.store_id;

select distinct c.first_name, c.last_name
from customer c
join address a on c.address_id = a.address_id
where a.city_id in (
  select a2.city_id
  from store s
  join address a2 on s.address_id = a2.address_id
);


select distinct c.first_name, c.last_name
from customer c
join address a on c.address_id = a.address_id
where a.city_id in (
  select a2.city_id
  from store s
  join address a2 on s.address_id = a2.address_id
);


select distinct c.first_name, c.last_name, country
from customer c
join address a2 on c.address_id = a2.address_id
join city c2 on a2.city_id = c2.city_id
join country c3 on c2.country_id = c3.country_id 
where c3.country in (select country from store s 
join address a on s.address_id = a.address_id
join city c on a.city_id = c.city_id
join country c2 on c.country_id  = c2.country_id );


create table safe_list (
film_id int,
title text,
description text,
length int,
category text,
foreign key (film_id) references film(film_id))

select distinct count(c.category_id ) from film_category c
group by c.film_id ;


select f.film_id, f.title, f.description, f.length, c.name into safe_list2 from film f
join film_category fc on f.film_id = fc.film_id
join category c on fc.category_id = c.category_id
where c.name != 'Horror' 
and f.description not ilike '%zombie%'
and f.description not ilike '%beast%'
and f.description not ilike '%ghost%'
and f.description not ilike '%dead%'
and f.description not ilike '%monster%'
and f.description not ilike '%undead%'
and f.title  not ilike '%zombie%'
and f.title not ilike '%beast%'
and f.title not ilike '%ghost%'
and f.title not ilike '%dead%'
and f.title not ilike '%monster%'
and f.title not ilike '%undead%'
;

select sum(length)/60 as hours, sum(length)%60 as minutes from safe_list2;
select sum(length)/60 as hours, sum(length)%60 as minutes from film;

	