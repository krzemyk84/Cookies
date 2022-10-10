const flour = 1.5;
const butter = 1.25;
const eggs = 2.75;
const sugar = 0.99;
const flavour = 0.5;
const fuel = 4.75;
const paper = 2.5;

const start_cookies_program = () => {
  var selling_price_per_cookie = prompt ("Please enter price of one cookie: ");
  //alert (selling_price_per_cookie);
  
  var cost_per_batch = flour + butter + eggs + sugar + flavour + fuel + paper;
  alert ("Cost per batch is: " + cost_per_batch.toFixed(2));
  var cost_per_cookie = cost_per_batch / 50;
  alert ("Cost per cookie is: " + cost_per_cookie.toFixed(2));
  var profit_per_cookie = selling_price_per_cookie - cost_per_cookie;
  alert ("Profit per cookie is: " + profit_per_cookie.toFixed(2));
  var profit_per_batch = profit_per_cookie * 50;
  alert ("Profit per batch is: " + profit_per_batch.toFixed(2));

  //var want_restart = prompt ("Want to calculate it again? (y/n) ");
  
  //want_restart ();
  //const restart = () => {
  //      if (want_restart = "y") {
  //          restart_cookies_program();
  //      }
  //      else { }
  //  }
  
  
  
  //var want_restart () {
  //  if
  //}
}
//const restart_cookies_program = () => {
start_cookies_program ();  
//}
