document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://pokeapi.co/api/v2/pokemon/'
  const preChoice = document.querySelector('#pokemon')
  const choice = preChoice.value
  fetch(`${url}${choice}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        document.querySelector("img").src = data.sprites.other["official-artwork"].front_default
        document.querySelector("#move1").innerHTML = data.moves[Math.floor(Math.random()*data.moves.length)].move.name
        document.querySelector("#move2").innerHTML = data.moves[Math.floor(Math.random()*data.moves.length)].move.name
        document.querySelector("#move3").innerHTML = data.moves[Math.floor(Math.random()*data.moves.length)].move.name
        document.querySelector("#move4").innerHTML = data.moves[Math.floor(Math.random()*data.moves.length)].move.name
        if (data.forms[0].name === 'bulbasaur'){
          document.querySelector("h2").innerHTML = "Correct! see below for 4 random moves he can use!"
        } else {
          document.querySelector("h2").innerHTML = `you chose ${data.forms[0].name}... but the real answer was BULBASAUR. I guess I'll still show you some of ${data.forms[0].name}'s moves`

        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

