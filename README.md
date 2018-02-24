# Bamazon-Node.js-and-MySQL
In this activity, I'll be creating an Amazon-like storefront with the MySQL skills learned this week. The app will take in orders from customers and deplete stock from the store's inventory.

# Welcome to Bamazon!

### Customer Instructions
1. Run the bamazonCustomer.js node in terminal: `node bamazonCustomer.js`
    ![Step1](/assets/Images/Step1.png)
2. Enter the ID and quantity of the product you wish to purchase
    * The total cost will be displayed after entering the quantity
    * If the quantity entered is more than what is available, then the order will be incomplete
        ![step2a](/assets/Images/step2.png)

### Manager Instructions
1. Run the bamazonManager.js node in terminal: `node bamazonManager.js`
    ![mgrstep1](/assets/Images/mgrstep1.png)
2. System will display the following options:
    * View Product
    * View Low Inventory
    * Add to Inventory
    * Add New Product
3. Selecting 'View Product' will display all products in inventory
    ![mgrstep2](/assets/Images/mgrstep2.png)
4. Selecting 'View Low Inventory' will display products with inventory number less than 5
    ![mgrstep3](/assets/Images/mgrstep3.png)
5. Selecting 'Add to Inventory' will allow you to increase the inventory number of a product; enter the product ID, then enter the additional number of products you are adding; If successful, the system will dislay the following message: Successully added qty. #
    ![mgrstep4](/assets/Images/mgrstep4.png)
6. Selecting 'Add New Product' will allow you to add a new product to the inventory; system will prompt you to add new product (name, department, price and quantity); If successful, the system will display the following message: New product added
    ![mgrstep5](/assets/Images/mgrstep5.png)
7. Below is the full Manager Panel
    ![mgrstep6](/assets/Images/mgrstep6.png)

