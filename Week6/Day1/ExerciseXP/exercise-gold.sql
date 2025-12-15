drop table students 

 create table students (
 id int,
 last_name text,
 first_name text,
 birth_date date)
  
 insert into students values 
  (1, 'Marc', 'Benichou', '1998-11-02'),
 (2,'Yoan','Cohen', '2010-12-03'),
 (3,'Lea','Benichou', '1987-07-27'),
 (4,'Amelia','Dux', '1996-04-07'),
 (5,'David','Grez', '2003-06-14'),
 (6,'Omer','Simpson', '1980-10-03');
 
select * from students;
select first_name, last_name from students;
select first_name, last_name from students where id = 2;
select first_name, last_name from students where first_name = 'Benichou' and last_name = 'Marc';
select first_name, last_name from students where first_name = 'Benichou' or last_name = 'Marc';
select first_name, last_name from students where last_name like '%a%';
select first_name, last_name from students where last_name like 'A%';
select first_name, last_name from students where last_name like '%a';
select first_name, last_name from students where last_name like '%a_';
select first_name, last_name from students where id = 1 and id = 3;
select * from students where birth_date>='2000-01-01';


 

 



 
