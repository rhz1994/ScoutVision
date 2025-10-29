DROP TABLE IF EXISTS user_reports CASCADE;
DROP TABLE IF EXISTS reportedlinks CASCADE;
DROP TABLE IF EXISTS reportedphonenumbers CASCADE;
DROP TABLE IF EXISTS tests CASCADE;
DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE users {
  id serial PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT now()
}

CREATE TABLE reportedPhoneNumbers {
  id serial PRIMARY KEY,
  phone_number TEXT UNIQUE NOT NULL,
  report_count INTEGER DEFAULT 1,
  freetext TEXT,
  reporter_id INTEGER,
  FOREIGN KEY (reporter_id) REFERENCES users(id)
}

CREATE TABLE reportedLinks {
  id serial PRIMARY KEY,
  link TEXT UNIQUE NOT NULL,
  report_count INTEGER DEFAULT 1,
  last_reported TIMESTAMP DEFAULT now(),
    freetext TEXT,

  reporter_id INTEGER,
  FOREIGN KEY (reporter_id) REFERENCES users(id)
}

CREATE TABLE tests {
  id serial PRIMARY KEY,
  type TEXT NOT NULL,
  suspect_details TEXT NOT NULL,
  result INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT now()
}
