DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS topic;
DROP TABLE IF EXISTS comment;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  date_created TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE topic (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content text NOT NUll,
  user_id INT,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE comment (
  id SERIAL PRIMARY KEY,
  body TEXT NOT NULL,
  topic_id INT,
  user_id INT,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

