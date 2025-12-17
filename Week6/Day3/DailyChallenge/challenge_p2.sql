create table book (
book_id serial primary key,
title text not null,
author text not null)

insert into book (title, author)
values 
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

create table student (
student_id serial primary key,
name text not null unique,
age smallint);

insert into student (name, age)
values 
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

create table library (
book_fk_id int,
student_id int,
borrowed_date timestamp,
foreign key (book_fk_id) references book(book_id) on delete cascade on update cascade,
foreign key (student_id) references student(student_id) on delete cascade on update cascade
);

insert into library (book_fk_id, student_id, borrowed_date)
values 
(1, 1, '2022-02-15'),
(3, 4, '2021-03-03'),
(1, 2, '2021-05-23'),
(2, 4, '2021-12-08');

select * from library;

select distinct(student.name), book.title 
from student
join library on student.student_id = library.student_id
join book on book.book_id = library.book_fk_id;

select AVG(age) 
from student
join library on student.student_id = library.student_id
join book on book.book_id = library.book_fk_id
where book.book_id = 1;

delete from student
where student_id = 1;

select * from library;

