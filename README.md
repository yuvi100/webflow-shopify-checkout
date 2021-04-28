# webflow-shopify-checkout

## The problem
I've read on some forums that some people are having issues with tracking their users with Google Analytics whilst integrating the Shopify Buy Button with Webflow. The add to cart buttons and the cart itself are all rendered in iframes, which is why you can't track them.

## The solution
A script that allows you to use Webflow's native cart functionality and replaces the default checkout action with a function that generates a Shopify Checkout link based on the items that you have in your Webflow cart.


## Setup
Assign the Shopify Variant ID to the Webflow product inside Webflow's navigator as 'Hidden Variant ID' and give it the class 'hidden-variant-id'. See screenshot below:<br>
![Webflow Screenshot](https://github.com/yuvi100/webflow-shopify-checkout/blob/main/webflow-screenshot.jpeg?raw=true)
<br><br>

Edit the **script.js** file:<br>
Change the following if needed (I used a demo Webflow store and the classes might not be exactly the same classes you have on your store)<br>
<br>
Webflow checkout button class: '**a.w-commerce-commercecartcheckoutbutton.button**'<br>
Webflow cart item class: '**.w-commerce-commercecartitem**'<br>
Webflow cart item quantity input selector class: '**input.w-commerce-commercecartquantity.text-field**'
Webflow custom attribute class that you set up for your Webflow products which will contain a value equal to the Shopify Variant ID for that product: '**.hidden-variant-id**'<br>
Shopify Domain: https://**ENTER-YOUR-SHOPIFY-DOMAIN-HERE**/cart/${arrayShopify}?channel=buy_button
