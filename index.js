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
  const want_restart = prompt ("Do you want to try it again? (y/n) ");
  if (check_yes_or_no(want_restart)) {
    restart_app();
  }
  else {
    prompt ("Bye!");
  }
}
const check_yes_or_no = (want_restart) => {
  if (want_restart == "y") {
    return true;
  }
  else return false;
}


const restart_app = () => {
  start_cookies_program ();
  }

start_cookies_program (); 


