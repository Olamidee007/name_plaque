// Adding a variable to store data
const buyIt = document.querySelector('.buy-submit')
const buYer = document.querySelector('#guessField')
const buyerInput=document.querySelector('.field-input')

// Arrow function
const buyNow = (some_more) =>{
  buyIt.textContent = some_more;
  buYer.textContent = add_more;
  buyerInput.textContent = get_more

  if (some_more === '') {
    buyIt.textContent = 'Please type in letters';
  }

  if (add_more === 'YOUR NAME') {
    buYer.textContent = 'Please Enter Custom letters';
  }
  else if (get_more === <=15) {
    buyerInput.textContent = 'Congratulations, You have a customized plaque';
  }
  if (get_more === >15) {
    buyerInput.textContent = 'Sorry, you have exceeded the number of available letters'
  }
}

buyIt.onclick = (o)=>{
  buyNow(o.target.value)
}
