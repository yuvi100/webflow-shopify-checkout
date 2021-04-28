<script>

// JavaScript alternative to document.ready
document.addEventListener('DOMContentLoaded', (event) => {
      
      // Webflow checkout button class (change 'a.w-commerce-commercecartcheckoutbutton.button' if needed below)
      var webflowCheckout = document.querySelector('a.w-commerce-commercecartcheckoutbutton.button');
      
      // Making sure the checkout button has rendered before adding an event listener
      if(webflowCheckout) {
        webflowCheckout.addEventListener("click", function(e){
  			e.preventDefault(); // this prevents the button from its default action, which is to checkout with Webflow
               	shopifyCheckout(); // this calls in a function that will direct the user to Shopify's checkout instead
            })
        }
});
  
// This function loops through the user's cart and grabs the Shopify Variant ID's and quantities to then pass on to the checkout link
function shopifyCheckout() {

            // Webflow checkout cart line item class (change '.w-commerce-commercecartitem' if needed below)
        	  var cartItems = document.querySelectorAll('.w-commerce-commercecartitem'), i;

            var arrayShopify = [];

            for (i = 0; i < cartItems.length; ++i) {
                var productid = cartItems[i].querySelector('.hidden-variant-id').innerHTML; // Change '.hidden-variant-id' to the class name you've given for your Shopify Variant ID's inside of Webflow's Navigator
                var productqty = cartItems[i].querySelector('input.w-commerce-commercecartquantity.text-field').value; // Change (if needed) 'input.w-commerce-commercecartquantity.text-field' to the input class of the quantity selector
                var shopifyproduct = `${productid}:${productqty}`;
                arrayShopify.push(shopifyproduct);
            }
            
            // Shopify Checkout URL (change 'ENTER-YOUR-SHOPIFY-DOMAIN-HERE' to your Shopify Domain)
            window.location.href = `https://ENTER-YOUR-SHOPIFY-DOMAIN-HERE/cart/${arrayShopify}?channel=buy_button`; // Shopify Checkout URL

  };
  
</script>
