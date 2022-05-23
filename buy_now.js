// Adding a variable to store data
const buyIt = document.querySelector(.'buy-submit')

// Arrow function
const buyNow = (some_more) =>{
  buyIt.textContent = some_more;
  if (some_more === '') {
    buyIt.textContent = 'Please type in letters';
    return;
  }
}
