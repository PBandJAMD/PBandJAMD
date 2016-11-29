INSERT INTO users (id, username, password)  VALUES
  (1, 'jaemin', 'jaemin' ),
  (2, 'mohamed', 'mohamed'),
  (3, 'damira', 'damira'),
  (4, 'alex', 'alex');

INSERT INTO topic (id, title, content, user_id) VALUES
  (1, 'Martians Invade Earth', 'Could it happen?', 3),
  (2, 'Potatoes', 'Why is there an "e" in potatoes?', 4),
  (3, 'Manchester United', 'Why does this team suck?', 2),
  (4, 'Python', 'If the language were to get into a fight with the animal, who would win?', 1),
  (5, 'Donald Trump', 'Censored and raw.', 2),
  (6, 'Raw Denim', 'For denimheads.', 3),
  (7, 'Javascript', 'Top language?', 4),
  (8, 'Mongo DB', 'Thoughts, opinions, comments?', 2),
  (9, 'Be Like Arnold', 'Bodybuilding Everyday', 1),
  (10, 'Why am I always tired?', 'How to not be tired.', 2);

INSERT INTO comment (id, body, topic_id, user_id) VALUES
  (1, 'I definitely think it could happen. For all we know, our president could be an alien.', 1, 1),
  (2, 'Thats preposterous! You dont know what youre talking about!', 1, 1),
  (3, 'No, you dont know. #($* YOU! Lets get into a forum battle because thats what people do these days! Insult insult insult!', 1, 1),
  (4, 'Wait, Im talking to myself right now? What is going on?', 1, 1),
  (5, 'Bro, you are completely whacked. Get checked out man.', 1, 4),
  (6, 'Why is there an "e" in anything?', 2, 3),
  (7, 'Yeah +1 with this guy ^.', 1, 1),
  (8, 'kdklfslfksmdfkldmfdlkm', 3, 2),
  (9, 'show might soon have some competition', 4, 4),
  (10, 'But they were not big fans,', 5, 5);

ALTER SEQUENCE users_id_seq RESTART WITH 5;
ALTER SEQUENCE comment_id_seq RESTART WITH 11;
ALTER SEQUENCE topic_id_seq RESTART WITH 6;



