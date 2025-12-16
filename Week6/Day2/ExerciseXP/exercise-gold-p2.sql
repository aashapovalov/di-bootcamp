select * from  students;

update students
	set	birth_date = '1998-11-02'
	where first_name = 'Benichou';

update students
	set	first_name = 'Guez'
	where first_name = 'Grez';

delete from students 
	where last_name = 'Lea';

select count(*) from  students;
select count(*) from students
	where birth_date > '2000-01-01';

alter table students
	add math_grade smallint;

update students
	set	math_grade = 80
	where id  = 1;

update students
	set	math_grade = 90
	where id  = 2 or id = 4;

update students
	set	math_grade = 40
	where id  = 6;

select count(*) 
	from students
	where math_grade>83;

insert into students 
	values  (7,'Omer','Simpson', '1980-10-03', 70);

select first_name, last_name, count(math_grade) from students group by first_name, last_name ;
select sum(math_grade) from students;