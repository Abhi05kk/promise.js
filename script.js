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

