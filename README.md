# Bamazon-Node.js-and-MySQL
In this activity, I'll be creating an Amazon-like storefront with the MySQL skills learned this week. The app will take in orders from customers and deplete stock from the store's inventory.

# Welcome to Bamazon!

### Customer Instructions
1. Run the bamazonCustomer.js node in terminal: `node bamazonCustomer.js`
    ![Step1](/assets/Images/Step1.png)
2. Enter the ID and quantity of the product you wish to purchase
    * The total will be displayed after entering the quantity
    * But please be aware that if you order more than what's in stock, your order will be incomplete
        ![step2a](/assets/Images/step2.png)

### Manager Instructions
1. Run the bamazonManager.js node in terminal: `node bamazonManager.js`
    ![mgrstep1](/assets/images/mgrstep1.png)
2. System will display the following options:
    * View Product
    * View Low Inventory
    * Add to Inventory
    * Add New Product
3. Selecting 'View Product' will show all the products with information in the store
    ![mgrstep2](/assets/images/mgrstep2.png)
4. Selecting 'View Low Inventory' will show all inventory with stock quantity under 5; in this example Product ID 2 is below 5
    ![mgrstep3](/assets/images/mgrstep3.png)
5. Selecting 'Add to Inventory' will prompt you to add to product stock using ID key and quantity
    ![mgrstep4](/assets/images/mgrstep4.png)
6. Selecting 'Add New Product' will prompt you to add new product (name, department, price and quantity)
it will return 'New Product Added' upon successfully addition
    ![mgrstep5](/assets/images/mgrstep5.png)
7. Below is the full Manager Panel
    ![mgrstep6](/assets/images/mgrstep6.png)

