//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#getDrink').addEventListener("click", getDrink)
document.querySelector('#nextDrink').addEventListener("click", nextDrink)

let counter = 0

function getDrink(){
    let drink = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector("h2").innerText = data.drinks[0].strDrink
            document.querySelector("img").src = data.drinks[0].strDrinkThumb
            document.querySelector("h3").innerText = data.drinks[0].strInstructions
            document.querySelector("#nextDrink").classList.remove("hidden")
            counter = 1
            }
        )

        .catch(err => {
            console.log(`error ${err}`)
        })
    }


function nextDrink(){
    let drink = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector("h2").innerText = data.drinks[counter].strDrink
            document.querySelector("img").src = data.drinks[counter].strDrinkThumb
            document.querySelector("h3").innerText = data.drinks[counter].strInstructions
            counter++
        }
        )
        .catch(err => {
            console.log(`error ${err}`)
        })
    }

