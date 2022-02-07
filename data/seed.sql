DROP TABLE recipes, users;

CREATE TABLE users (
id serial primary key,
name text,
email text,
password text
);


CREATE TABLE recipes (
id serial primary key,
title text,
image text,
description text,
servings integer,
prepTime integer,
cookTime integer,
instructions text [],
nav_id integer,
user_id integer,
constraint fk_user foreign key(user_id) references users(id)
);

INSERT INTO users (name, email, password) 
VALUES ('Dillon', 'dillon.craw@gmail.com', 'password123*'),
('Alex', 'Doss', 'PW123');

INSERT INTO recipes (title, image, description, servings, prepTime, cookTime, instructions, user_id)
VALUES ('Candy', 'https://hips.hearstapps.com/hmg-prod/images/190509-coconut-chicken-curry-157-1558039780.jpgU', 'Mix everything', 12, 20, 25, ARRAY ['Broth', 'Castles'], 1);
