// 1. Create a function fetchData that returns a Promise. The Promise should resolve with the string "Data fetched successfully" 
// after a delay of 2 seconds. Use setTimeout to simulate the delay. Test your function by calling it and using .then() to log 
// the resolved value to the console.  
// 2.  Modify the fetchData function from Question 1 to sometimes reject the Promise with an error message "Failed to fetch data". 
// Modify your test to handle this rejection using .catch().  
// 3. Convert the fetchData function from Question  1 to use async and await instead of .then(). Ensure to handle errors using try 
// and catch.


  new Promise((resolve ,reject) => {
    let err = false;
    setTimeout(() => {
      if (err) {
        reject('failed')
      } else {
        resolve('Data fetched successfully!');
      }
    }, 2000);
  }).then(data => {
  console.log( {data} );
})
.catch((err) =>{
  console.log(err);
})

// 4. Write a function "getCountryData" that fetches data from the public API " https://restcountries.com/v3.1/all ". 
// Parse the JSON response and log the data to the console. Additionally, use DOM manipulation to display the data on 
// the web page. Make sure to handle any errors that might occur during the fetch operation and display an appropriate 
// error message in the div if the fetch fails.

function getCountryData() {
  fetch( " https://restcountries.com/v3.1/all ")
  .then((result) =>{
    return result.json()
  })
  .then((result) =>{
    console.log(result);
    for (let i = 0; i < result.length; i++) {
    const ImageContainer=document.createElement('div')

    const heading=document.createElement('h2')
    heading.innerText =(i+1) +'. ' +result[i].name.common ;

    ImageContainer.appendChild(heading)

    const image= document.createElement('img')
    image.src= result[i].flags.png
    image.className= 'flags'

    ImageContainer.appendChild(image)
    document.getElementById('container').appendChild(ImageContainer)
    }
  })
}

try {
  // this endpoint will return 404
  const response = fetch('https://restcountries.com/v3.1/all');
  console.log('Success');
} catch {
  console.error('Failed');
}

