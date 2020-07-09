CREATE DATABASE checkout;

CREATE TABLE customers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  lastname VARCHAR(100),
  firstname VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100),
  address1 VARCHAR(100),
  address2 VARCHAR(100),
  city VARCHAR(50),
  state VARCHAR(50),
  zipcode VARCHAR(20),
  phonenumber VARCHAR(20),
  creditcard VARCHAR(30),
  expirydata VARCHAR(4),
  cvv VARCHAR(4),
  billingzip VARCHAR(20)
);

