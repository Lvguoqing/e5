// I'm Leo  
  
// Function to show a specific page based on its ID  
function showPage(pageId) {  
    // Select all elements with class 'page'  
    var pages = document.querySelectorAll('.page');  
    // Iterate through all pages and hide them  
    for (var i = 0; i < pages.length; i++) {  
        pages[i].style.display = 'none';  
    }  
    // Show the page with the specified ID  
    document.getElementById(pageId).style.display = 'block';  
}  
  
// Function to create a user  
function createUser() {  
    // Get the username and password from input fields  
    var username = document.getElementById("username").value;  
    var password = document.getElementById("password").value;  
    // Display an alert message indicating user creation  
    alert("User created successfully!");  
    // Show the login page after user creation  
    showPage('loginPage');  
}  
  
// Function to handle user login  
function login() {  
    // Get the login username and password from input fields  
    var loginUsername = document.getElementById("loginUsername").value;  
    var loginPassword = document.getElementById("loginPassword").value;  
    // Check if the login credentials are correct  
    if (loginUsername === "user" && loginPassword === "password") {  
        // If correct, show the shopping page  
        showPage('shoppingPage');  
    } else {  
        // If incorrect, display an error alert  
        alert("Invalid username or password. Please try again.");  
    }  
}  
  
// Function to calculate and display the total order  
function checkout() {  
    // Get the quantity and product price from input fields  
    var quantity = parseInt(document.getElementById("quantity").value);  
    var productPrice = parseInt(document.getElementById("productSelect").value); // Note: Renamed 'product' to 'productPrice' for clarity  
    // Calculate the total order amount  
    var total = quantity * productPrice;  
    // Display the total order amount in the element with ID 'totalOrder'  
    document.getElementById("totalOrder").innerText = "Total Order: $" + total;  
}