
const countriesNode = document.getElementById("countries");

fetch("https://restcountries.com/v3.1/all")
  .then(res=>res.json())
    // fetch() returns a promise containing the response (a Response object).
    // This is just an HTTP response, not the actual JSON. 
    // To extract the JSON body content from the response, 
    // we use the json() method and pass it into the next .then()
  .then(countries=> {
    console.log(countries.length)
    console.log(countries[7].flags.png)
    console.log(countries[7].name.official)

    // Here is where you'll need to add into the DOM all the countries received from API 

    let pintar = "";
    for (let i = 0; i < countries.length; i++) {
      const cardTemplate = function () {
        return `<div class="card">
                    <img id="flag-image" src= ${countries[i].flags.png} alt="flag" />
                    <h1 class="center">${countries[i].name.official}</h1>
                  </div>`;
      };
      pintar += cardTemplate (countries[i])
    };
         
    console.log(pintar);
    countriesNode.innerHTML = pintar
  
    // 1 - We will need to iterate the countries variable with a loop
    // 2 - You can use the cardTemplate() function to create a div with a class card already styled
    // 💡 you can use countriesNode variable to add elements
  });
