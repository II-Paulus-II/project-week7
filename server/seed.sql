CREATE TABLE IF NOT EXISTS test (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL
);

INSERT INTO test (content) VALUES ('my test');
INSERT INTO test (content) VALUES ('my other test');

CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  likes INTEGER DEFAULT 0,
  category_id INTEGER REFERENCES categories(id)
);

INSERT INTO categories (name) VALUES ('Facts');
INSERT INTO categories (name) VALUES ('Flowers');
INSERT INTO categories (name) VALUES ('Food');
INSERT INTO categories (name) VALUES ('France');
INSERT INTO categories (name) VALUES ('Friends');

INSERT INTO posts (title, content, likes, category_id) VALUES ('Facts are Awesome', 'Do not lose your facts, because of the dogs.', 0, 1);
INSERT INTO posts (title, content, likes, category_id) VALUES ('Flowers Smell Nice', 'Most of the time they do anyway.', 0, 2);
INSERT INTO posts (title, content, likes, category_id) VALUES ('Food is Necessary', 'Eat your food before you fall over!',0, 3);
INSERT INTO posts (title, content, likes, category_id) VALUES ('France', 'French people live in France.', 0, 4);
INSERT INTO posts (title, content, likes, category_id) VALUES ('Friends', 'Everyone needs friends to drink whiskey with', 0, 5);
INSERT INTO posts (title, content, likes, category_id) VALUES ('The Importance of Facts', 'As we all know facts are very important.', 0, 1);
