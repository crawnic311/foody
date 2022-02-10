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
VALUES ('Butter Curry', 'https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2018/11/Yellow-Coconut-Curry.jpg', 'This authentic curry recipes comes straight from the heart of Chang Mai, Thailand. With the secret blend of native spices and seasonings, you will wonder how you ever lived without it!', 8, 40, 30, ARRAY ['Curry', 'Pour 4 cups of sweetened coconut milk into a large pot and heat on medium heat. Mix in the secret blend of spices and begin to add your preferred chopped veggies'], 1),
('Cedar Plank Salmon and Cilantro Lime Rice', 'https://riceinfo.com/dev/wp-content/uploads/2016/08/Cedar-Planked-Salmon-Stuffed-with-Brown-Rice-1.jpg', 'This decadent salmon is not only one of the healthiest dishes avaialable, but will keep you coming back for more!', 4, 15, 40, ARRAY ['Salmon', 'Leave salmon at room temperature until tender. Season generously with MCcormicks Cedar Plank Salmon Seasoning. Place on a baking sheet with tinfoil underneath and bake at 400 for 14 minutes.', 'Rice', 'Add 3 cups of water to a pot and bring to a boil. Add rice and seasoning and stir for 30 seconds, then bring to a simmer and leave for 35 minutes.'], 2) ;


DELETE FROM recipes WHERE id = 3;