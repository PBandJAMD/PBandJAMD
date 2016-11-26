INSERT INTO users (id, username, password)  VALUES
  (1, 'jae', 'min' ),
  (2, 'mo', 'hamed'),
  (3, 'da', 'mira'),
  (4, 'al', 'ex'),
  (5, 'Wlliam', 7484);

INSERT INTO topic (id, title, content, user_id) VALUES
  (1, 'Programming Bootcamps', 'Programming Bootcamps', 1),
  (2, 'What is more impressive, brvard?', 'Har from Harvard each year.', 2),
  (3, 'Why does Manchester United suck?', 'Stop rd spiral.', 3),
  (4, 'Is Python a dying language?', 'Oh, yes, and Programming in Python.', 4),
  (5, 'Keeping The Party Alive', 'The ape staying power.', 5);

INSERT INTO comment (id, body, topic_id, user_id) VALUES
  (1, 'This is cooldnflsdnfldsfndlskf fdsfmsflksdmflkdsfmsdlkmfsdlkmfds', 1, 1),
  (2, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias neque ea numquam molestias adipisci quia minus necessitatibus maiores, quis explicabo, ab commodi ducimus voluptatem velit, qui id aliquid magni consequatur.', 3, 1),
  (3, 'Wooooo dfjndsflsdnkfdsnfkldsnflkdsnfdlsf', 3, 1),
  (4, 'Python is absolutely', 3, 2),
  (5, 'Hour of Code', 2, 2),
  (6, 'The Party Alive', 1, 3),
  (7, 'After the social network failed', 3, 3),
  (8, 'Russia’s communications regulator', 4, 4),
  (9, 'show might soon have some competition', 4, 4),
  (10, 'But they were not big fans,', 5, 5);

ALTER SEQUENCE users_id_seq RESTART WITH 11;
ALTER SEQUENCE comment_id_seq RESTART WITH 11;
ALTER SEQUENCE topic_id_seq RESTART WITH 6;



