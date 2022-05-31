DROP TABLE recipes, users, userRecipes;

CREATE TABLE users (
id serial primary key,
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
navID integer
);

CREATE TABLE userRecipes (
id serial primary key,
user_id integer references users,
recipe_id integer references recipes
);

INSERT INTO users (email, password) 
VALUES ('dillon.craw@gmail.com', '123456'),
('chicken@gmail.com', '1234567');

INSERT INTO recipes (title, image, description, servings, prepTime, cookTime, instructions, navID)
VALUES 
('Your First Recipe will display here', 'https://natashaskitchen.com/wp-content/uploads/2019/02/Meatloaf-Recipe-5.jpg', 'A description of your recipe will appear here', 12, 30, 60, ARRAY ['',''], 0 ),
('Bean and Cheese Burrito', 'https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2018/11/Yellow-Coconut-Curry.jpg', 'These are the frozen microwave burritos you grew up on! This is an authentic bean and cheese burrito recipe that will have your mouth watering and coming back for more. The bean to cheese ratio is perfect, the homeade tortillas are decadent, and it has all the right garnishings to make these burritos not only delicious but unique as well!', 8, 40, 30, ARRAY ['Curry', 'Pour 4 cups of sweetened coconut milk into a large pot and heat on medium heat. Mix in the secret blend of spices and begin to add your preferred chopped veggies'], 1),
('Fish Tacos', 'https://riceinfo.com/dev/wp-content/uploads/2016/08/Cedar-Planked-Salmon-Stuffed-with-Brown-Rice-1.jpg', 'This decadent salmon is not only one of the healthiest dishes avaialable, but will keep you coming back for more!', 4, 15, 40, ARRAY ['Salmon', 'Leave salmon at room temperature until tender. Season generously with MCcormicks Cedar Plank Salmon Seasoning. Place on a baking sheet with tinfoil underneath and bake at 400 for 14 minutes.', 'Rice', 'Add 3 cups of water to a pot and bring to a boil. Add rice and seasoning and stir for 30 seconds, then bring to a simmer and leave for 35 minutes.'], 2) ;

