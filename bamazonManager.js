// This is the manager js file for bamazon. This will allow you to view and add products as well as add to inventory

// Include required packages
var mysql = require("mysql");
var inquirer = require('inquirer');
const Table = require('easy-table');

// establish connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password - no password needed
  password: "",
  database: "bamazon_Db"
});

connection.connect(function (err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId);
  prompt();
  // connection.end();
});

function prompt() {
  inquirer.prompt([{
    type: "list",
    message: "Please select a menu option: ",
    name: "task",
    choices: ["View Sale Product", "View Low Inventory", "Add to Inventory", "Add New Product"]
  }]).then(function (task) {
    if (task.task === "View Sale Product") {
      // display every available item in store
      displayProducts();
    } else if (task.task === "View Low Inventory") {
      // display items with inventory less than 5
      displayLowInv();
    } else if (task.task === "Add to Inventory") {
      // prompt manager to add more items into store
      addInventory();
    } else if (task.task === "Add New Product") {
      // promp manager to add new product to the store
      addProduct();
    }
  })
}

function displayProducts() {
  var query = connection.query("SELECT * FROM products", function (err, res) {
    if (err) {
      throw err;
    } else {

      var response = res;
      console.log('');
      console.log('*************************** BAMAZON MANAGER PANEL ***************************');
      // npm package to log database into table in console
      var t = new Table
      response.forEach(function (product) {
        t.cell('Product ID', product.item_ID)
        t.cell('Product Name', product.product_name)
        t.cell('Department', product.department_name)
        t.cell('Price', product.product_price, Table.number(2))
        t.cell('Quantity', product.stock_quantity)
        t.newRow()
      })
      console.log(t.toString());
      console.log('*************************** BAMAZON MANAGER PANEL ***************************');
    }
    console.log('');
    prompt();
  })
};

function displayLowInv() {
  var query = connection.query("SELECT * FROM products WHERE stock_quantity < 5", function (err, res) {
    if (err) {
      throw err;
    } else {

      var response = res;
      console.log('');
      console.log('*************************** INVENTORY LOWER THAN 5 **************************');
      // npm package to log database into table in console
      var t = new Table
      response.forEach(function (product) {
        t.cell('Product ID', product.item_ID)
        t.cell('Product Name', product.product_name)
        t.cell('Department', product.department_name)
        t.cell('Price', product.product_price, Table.number(2))
        t.cell('Quantity', product.stock_quantity)
        t.newRow()
      })
      console.log(t.toString());
      console.log('*****************************************************************************');
    }
    console.log('');
    prompt();
  })
};

function addInventory() {

  inquirer.prompt([{
      type: "input",
      message: "Please type ID of product to add: ",
      name: "id"
    },
    {
      type: "input",
      message: "Please type quantity of the product to add: ",
      name: "quantity"
    }
  ]).then(function (input) {
    var productID = input.id;
    var productQty = input.quantity;

    var query = connection.query(`UPDATE products SET stock_quantity = stock_quantity + ${productQty} 
        WHERE item_ID = ${productID}`, function (err, res) {
      if (err) {
        throw err;
      } else {
        //var productTotal = res[0].stock_quantity; <-- this does not return the table so cannot select
        console.log(`Successfully added qty. ${productQty}`);
        console.log('');
        prompt();
      }
    })
  })
};

function addProduct() {

  inquirer.prompt([{
      type: "input",
      message: "Please type name of new product: ",
      name: "name"
    },
    {
      type: "input",
      message: "Please type department for new product: ",
      name: "depart"
    },
    {
      type: "input",
      message: "Please type price of new product: ",
      name: "price"
    },
    {
      type: "input",
      message: "Please type quantity of new product: ",
      name: "quantity"
    }
  ]).then(function (input) {
    var productName = input.name;
    var productDept = input.depart;
    var productPrice = input.price;
    var productQty = input.quantity;

    var query = connection.query(`INSERT INTO products (product_name, department_name, product_price, stock_quantity) 
    VALUES (?, ?, ?, ?)`, [productName, productDept, productPrice, productQty], function (err, res) {
      if (err) {
        throw err;
      } else {
        console.log('New product added');
        console.log('');
        prompt();
      }
    })
  })
}