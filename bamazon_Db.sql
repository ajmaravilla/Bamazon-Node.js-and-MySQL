DROP DATABASE IF EXISTS bamazon_Db;
CREATE DATABASE bamazon_Db;

USE bamazon_Db;

CREATE TABLE products (
    item_ID INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(150) NULL,
    department_name VARCHAR(100) NULL,
    product_price DECIMAL(10,2) NULL,
    stock_quantity INTEGER (11) NULL,
    PRIMARY KEY(item_ID)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, product_price, stock_quantity)
    VALUES
   ('Bang & Olufsen BeoPlay H8i Black Wireless Headphones', 'electronics', 399, 10),
   ('Apple Watch Hermès Stainless Steel Case with Ébène Barenia Leather Single Tour Deployment Buckle', 'electronics', 1399, 5),
   ('Ralph Lauren Custom Slim Fit Mesh Polo', 'clothing', 85, 10),
   ('POLO RALPH LAUREN Merino-Silk-Cashmere Sweater', 'clothing', 185, 10),
   ('Ralph Lauren Broughton DOF Glass', 'houseware', 95, 8),
   ('Ralph Lauren Broughton Highball Glass', 'houseware', 95, 8),
   ('Ralph Lauren Broughton Vodka Glass Set', 'houseware', 395, 10),
   ('Apple MacBook Pro 15 inch Touch Bar and Touch ID 2.9GHz Processor 512GB Storage', 'electronics', 2799, 10),
   ('Apple MacBook Pro 13 inch 2.3GHz Processor 128GB Storage', 'electronics', 1299, 10),
   ('British Classics: A Tale of Two Cities', 'books', 10, 10);