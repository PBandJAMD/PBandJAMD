INSERT INTO users (id, username, password)  VALUES
  (1, 'jaemin', 'jaemin' ),
  (2, 'mohamed', 'mohamed'),
  (3, 'damira', 'damira'),
  (4, 'alex', 'alex'),
  (5, 'jason', 'jason');

INSERT INTO topic (id, title, content, user_id) VALUES
  (1, 'Programming Bootcamps', 'Programming Bootcamps', 3),
  (2, 'Potatoes', 'Why is there an "e" in potatoes?', 4),
  (3, 'Manchester United', 'Why does this team suck?', 2),
  (4, 'Python', 'If the language were to get into a fight with the animal, who would win?', 4),
  (5, 'Donald Trump', 'Censored', 1);

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

ALTER SEQUENCE users_id_seq RESTART WITH 6;
ALTER SEQUENCE comment_id_seq RESTART WITH 11;
ALTER SEQUENCE topic_id_seq RESTART WITH 6;



