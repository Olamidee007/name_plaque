// Adding variables to store our data
const usrInput = document.querySelector('.field-input')
const usrLetterPreview = document.querySelector('.plaque-prev')
const usrPricerPreview = document.querySelector('#plaquePrice')

// count letter Function
// function countLetters(some_data) {
  // console.log(some_data.length * 5);
// const optName = some_data.replaceAll(' ','')
// const price = optName.length *5;
//
// usrLetterPreview.textContent = some_data;
// usrPricerPreview.textContent = '$'+ price;
//
// }
//
// usrInput.addEventListener('input', function(e){
//   countLetters(e.target.value)
// } )

// Arrow Function
const countLetters = (some_data) =>{
  const optName = some_data.replaceAll(' ','')
  const price = optName.length *5;
  usrLetterPreview.textContent = some_data;
  usrPricerPreview.textContent = '$'+ price;
}

usrInput.oninput = (e)=>{
  countLetters(e.target.value)
}
