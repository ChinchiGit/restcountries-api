
const countriesNode = document.getElementById("countries");

let allCountries;

fetch("https://restcountries.com/v3.1/all")
  .then(res=>res.json())
    // fetch() returns a promise containing the response (a Response object).
    // This is just an HTTP response, not the actual JSON. 
    // To extract the JSON body content from the response, 
    // we use the json() method and pass it into the next .then()
  .then(countries=> {

    allCountries = countries;
    allCountries.sort(function (a, b) {
      if (a.name.common > b.name.common) {
        return 1;
      }
      if (a.name.common < b.name.common) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    // Here is where you'll need to add into the DOM all the countries received from API 

    let pintar = "";
    for (let i = 0; i < allCountries.length; i++) {
      const cardTemplate = function () {
        return `<div class="card">
                    <img id="flag-image" src= ${allCountries[i].flags.png} alt="flag" />
                    <h1 class="center">${allCountries[i].name.common}</h1>
                  </div>`;
      };
      pintar += cardTemplate (allCountries[i])
    };
         
    console.log(pintar);
    countriesNode.innerHTML=pintar;
  
    // 1 - We will need to iterate the countries variable with a loop
    // 2 - You can use the cardTemplate() function to create a div with a class card already styled
    // 💡 you can use countriesNode variable to add elements
  });



  // PREMIUM 

const formulario = document.getElementById("continente")
formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // parar envío formulario
    console.log(event);

    let continente = event.target.continente.value; 

    pintar = "";
    if (continente == "All") {
      for (let i = 0; i < allCountries.length; i++) {
          const cardTemplateB = function () {
            return `<div class="card">
                        <img id="flag-image" src= ${allCountries[i].flags.png} alt="flag" />
                        <h1 class="center">${allCountries[i].name.common}</h1>
                      </div>`;
          };
          pintar += cardTemplateB (allCountries[i])
          countriesNode.innerHTML=pintar
          };
        }  else {
            for (let i = 0; i < allCountries.length; i++) {
              if (continente == allCountries[i].region){
                const cardTemplateC = function () {
                  return `<div class="card">
                              <img id="flag-image" src= ${allCountries[i].flags.png} alt="flag" />
                              <h1 class="center">${allCountries[i].name.common}</h1>
                            </div>`;
                };
                pintar += cardTemplateC (allCountries[i])
                countriesNode.innerHTML=pintar
              };
            }
          }  
});
