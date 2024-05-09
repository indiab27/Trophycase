"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: 
   Date:   
   
   Filename: tc_cart.js
	
*/

// In your script, you will calculate a running total of the cost of the order.
// Declare a variable named orderTotal and set its initial value to 0.
var orderTotal = 0;

// Declare a variable named cartHTML containing the HTML code for the shopping cart.
// Set its initial value to the text string:
var cartHTML = "<table>";
cartHTML += "<tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

// Create a for loop that loops through the entries in the item array.
for (var i = 0; i < item.length; i++) {
    // Execute commands described in Steps a through e.

    // a. Add the following HTML code to the value of the cartHTML variable
    cartHTML += "<tr>";
    cartHTML += "<td><img src='tc_" + item[i] + ".png' alt='" + item[i] + " ' /></td>";

    // b. Add the following HTML code to display the description, price, and quantity ordered of the item
    cartHTML += "<td>" + itemDescription[i] + "</td>";
    cartHTML += "<td>" + itemPrice[i] + "</td>";
    cartHTML += "<td>" + itemQty[i] + "</td>";

    // c. Declare a variable named itemCost equal to the price value multiplied by the quantity value for the current item
    var itemCost = itemPrice[i] * itemQty[i];

    // d. Add the following HTML code to the cartHTML variable to display the cost for the item(s) ordered
    cartHTML += "<td>$" + itemCost + "</td>"
    cartHTML += "</tr>";

    // e. Add the value of the itemCost variable to the orderTotal variable to keep a running total of the total cost of the customer order
    orderTotal += itemCost;
}

// After the for loop has completed, add the following HTML code to the value of the cartHTML variable
cartHTML += "<tr><td colspan='4'>Subtotal</td>"
cartHTML += "<td>$" + orderTotal + "</td></tr>"
cartHTML += "</table>";

// Apply the cartHTML value to the innerHTML of the div element with the ID “cart”
document.getElementById("cart").innerHTML = cartHTML;