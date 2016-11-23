INSERT INTO users (id, username, password)  VALUES
  (1, 'Jake', 1234 ),
  (2, 'Saran', 2345),
  (3, 'Jeson', 8430),
  (4, 'Mike', 4444),
  (5, 'Wlliam', 7484),
  (6, 'Kevin', 7748),
  (7, 'Joe', 8474),
  (8 ,'Natty', 7483),
  (9, 'Travor', 7484),
  (10, 'Bobby', 3924);


  INSERT INTO topic (id, title, content, user_id) VALUES
    (1, 'Programming Bootcamps', 'Programming Bootcamps are intense, time-limited programs that train people to be software engineers or work in a core technology field focusing on giving students hands-on knowledge and simulating real world programming environments. Nearly all focus on web application development.', 1),
    (2, 'What is more impressive, being a Navy SEAL or getting into Harvard?', '
         Harvard receives tens of thousands of applications per year (just under 40K at this point), and has an acceptance rate of about 6%. This represents over 2000 individuals per year. And the graduation rate is about 86%. Thousands of students graduate from Harvard each year.', 2),
    (3, 'Why does Manchester United suck?', 'Stop this delusional act of defending the club by being sentimental and fantasizing over past glories. It is through this perception of “everything’s okay, it’s just a minor hiccup” which sends the club in a downward spiral.', 3),
    (4, 'Is Python a dying language?', 'Oh, yes, Python is absolutely in its death throes. Which explains why your grandmother’s friend’s alma mater is teaching it in 6.0001, Introduction to Computer Science and Programming in Python.', 4),
    (5, 'Keeping The Party Alive', 'The app is certainly novel leading to a huge spike to #3 on the overall iOS app charts in May. But it is proving to have staying power.', 5),
    (6, 'Apple to offer free ‘Hour of Code’ ', 'Apple has opened up registration for its Hour of Code workshops in partnership with Code.org.', 6),
    (7, 'LinkedIn is now officially blocked in Russia', 'Amid a tense stand-off and attempt at negotiations, Russia’s communications regulator Roskomnadzor has started to enforce a proposed block of LinkedIn in the country, after the social network failed to transfer Russian user data to servers located in the country, violating a law instituted in Russia requiring all online sites to store personal data on national servers.', 7),
    (8, 'Facebook authorizes a $6B stock buyback', 'Facebook in its last earnings call also said that its growth would likely slow as a result of the company reaching its maximum advertising load. While Facebook has historically grown at a very fast clip, the company is now in a position that it needs to find additional ways to create value for investors beyond just trying to expand its user base and gather more eyeballs to put ads', 8),
    (9, 'Intel and Disney paint the sky', 'Disney World’s nightly fireworks show might soon have some competition in the form of hundreds of swirling, whirling LED-lit drones. They flash, fall and flock in unison and are all controlled by one person. I saw them and they were, for lack of a better phrase, absolutely amazing.', 9),
    (10, 'Microsoft joins the Linux Foundation', 'This may come as a surprise to you, but they were not big fans, Linux Foundation executive director Jim Zemlin told me in regards to his foundation’s history with Microsoft. The new Microsoft under CEO Satya Nadella, however, is singing a very different tune.', 10);

  INSERT INTO comment (id, body, topic_id, user_id) VALUES

                      (1, 'This is cool', 1, 1),
                      (2, 'Omg', 2, 2),
                      (3, 'Wooooo ', 3, 3),
                      (4, 'Python is absolutely', 4, 4),
                      (5, 'Hour of Code', 5, 5),
                      (6, 'The Party Alive', 5, 5),
                      (7, 'After the social network failed', 6, 6),
                      (8, 'Russia’s communications regulator', 7, 7),
                      (9, 'show might soon have some competition', 9, 9),
                      (10, 'But they were not big fans,', 10, 10);



