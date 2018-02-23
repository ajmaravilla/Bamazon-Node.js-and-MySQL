// This is the customer js file for bamazon
// bamazon is a storefront that allows users to take orders and deplete stock from store inventory


// Include required packages
const mysql = require("mysql");
const inquirer = require('inquirer');
const Table = require('easy-table');

// establish connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password - no password in this case
  password: "",
  database: "bamazon_Db"
});

connection.connect(function (err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId);
  query();
});

function query() {
  var query = connection.query("SELECT * FROM products", function (err, res) {
    if (err) {
      throw err;
    } else {

      var response = res;
      console.log('');
      console.log('**************************** WELCOME TO BAMAZON ****************************');
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
      console.log('**************************** WELCOME TO BAMAZON ****************************');
    }
    console.log('');
    prompt();
  })
};

function prompt() {
  inquirer.prompt([{
      type: "input",
      message: "Please enter ID of the product to purchase: ",
      name: "id"
    },
    {
      type: "input",
      message: "Please enter the quantity you wish to purchase: ",
      name: "quantity"
    }
  ]).then(function (input) {
    var buyerID = input.id;
    var buyerQty = input.quantity;

    var query = connection.query(`SELECT * FROM products WHERE item_ID = ${buyerID}`, function (err, res) {
      if (err) {
        throw err;
      } else if (buyerQty <= res[0].stock_quantity) {
        var totalCost = buyerQty * res[0].product_price;
        // console.log(res) // TESTING
        var query1 = connection.query(`UPDATE products SET stock_quantity = stock_quantity - ${buyerQty} WHERE item_ID = ${buyerID}`,
          function (err, res) {
            console.log(`Order completed, your total cost is $${totalCost}.00`)
            console.log('')
            prompt();
          }
        )
      } else if (buyerQty > res[0].stock_quantity) {
        console.log('Order incomplete, insufficient quanitity')
        console.log('')
        prompt();
      }
    })
  })
}