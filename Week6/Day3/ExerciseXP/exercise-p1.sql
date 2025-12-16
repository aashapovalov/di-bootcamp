select name from language;

select film.title, film.description, language.name 
from film
left join language on film.language_id = language.language_id;

select film.title, film.description, language.name
from language
left join film on language.language_id = film.language_id;

create table new_film (
id serial,
name text,
primary key (id)
)

insert into new_film (name)
values
('Die Hard'),
('Die Hard 2'),
('Terminator'),
('Cobra');

create table customer_review (
review_id serial not null, 
film_id int,
language_id int,
title text,
score int check (score between 1 and 10),
review_text text,
last_update TIMESTAMP,
primary key (review_id),
foreign key(film_id) references new_film(id) on delete cascade,
foreign key(language_id ) references language(language_id)
)

INSERT INTO customer_review
    (film_id, language_id, title, score, review_text)
VALUES
    (
        1,
        1,
        'Classic action movie',
        9,
        'Die Hard is a timeless action film with great pacing, memorable characters, and iconic scenes.'
    ),
    (
        2,
        1,
        'Good sequel, but not the original',
        7,
        'Die Hard 2 delivers solid action, but it lacks the originality and tension of the first movie.'
    );

select * from customer_review

delete from new_film 
where id=1;

select * from customer_review
