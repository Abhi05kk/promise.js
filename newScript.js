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
  
