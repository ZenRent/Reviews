/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/

DROP DATABASE IF EXISTS grocerylist;

CREATE DATABASE grocerylist;

USE grocerylist;

CREATE TABLE groceries (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  item VARCHAR(100),
  quantity INT
);

INSERT INTO groceries (item, quantity) VALUES ("banana", 1);
INSERT INTO groceries (item, quantity) VALUES ("cake", 2);