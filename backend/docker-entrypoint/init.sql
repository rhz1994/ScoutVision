DROP TABLE IF EXISTS reportedlinks CASCADE;
DROP TABLE IF EXISTS reportedphonenumbers CASCADE;
DROP TABLE IF EXISTS testResults CASCADE;
DROP TABLE IF EXISTS testQuestion CASCADE;
DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE users (
  id serial PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE reportedPhoneNumbers (
  id serial PRIMARY KEY,
  phone_number TEXT UNIQUE NOT NULL,
  report_count INTEGER DEFAULT 1,
  freetext TEXT,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE reportedLinks (
  id serial PRIMARY KEY,
  link TEXT UNIQUE NOT NULL,
  report_count INTEGER DEFAULT 1,
  last_reported TIMESTAMP DEFAULT now(),
  freetext TEXT,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE testQuestion (
  id serial PRIMARY KEY,
  question TEXT NOT NULL
);

CREATE TABLE testResults (
  id serial PRIMARY KEY,
  user_id INTEGER,
  suspect_details TEXT,
  result INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT now(),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX users_username ON users (username);


INSERT INTO testQuestion(question)
VALUES
('Innehöll meddelandet en länk som du uppmanades att klicka på?'),
('Bad meddelandet dig att logga in, lämna personuppgifter eller uppge kortinformation?'),
('Kom meddelandet oväntat eller från någon du inte känner?'),
('Stod det att något brådskande skulle hända om du inte agerade direkt (t.ex. att ditt konto skulle spärras eller ett paket skulle gå förlorat)?'),
('Verkade avsändarens nummer eller e-postadress konstig (t.ex. felstavad, ovanlig domän eller ett vanligt mobilnummer istället för en officiell kontakt)?');


INSERT INTO users (username, password) VALUES ('Jane Doe', 'password'), ('Adam Pålsson', '1234'), ('Hugo Larsson', 'secret');

INSERT INTO reportedPhoneNumbers (phone_number, freetext) VALUES ('077-8137813', 'Använde kivra');

INSERT INTO reportedLinks (link, freetext) VALUES ('www.scam.com', 'internetbedrägeri');

INSERT INTO testResults (user_id, suspect_details, result) VALUES ( 1, '077-8137813', 13);

EXPLAIN ANALYZE SELECT * FROM users;
SELECT * FROM reportedPhoneNumbers;
SELECT * FROM reportedLinks;
SELECT * FROM testResults;
SELECT * FROM testQuestion;
