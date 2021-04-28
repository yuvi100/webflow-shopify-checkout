# webflow-shopify-checkout

## The problem
I've read on some forums that some people are having issues with tracking their users with Google Analytics whilst integrating the Shopify Buy Button with Webflow. The buttons and the cart itself are all rendered in iframes, which is why you can't track them.

## The solution
A script that allows you to use Webflow's native cart functionality and replaces the default checkout action with a function that generates a Shopify Checkout link based on the items that you have in your Webflow cart.
