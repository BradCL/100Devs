document.querySelector('#getFoe').addEventListener('click', getFetch)
document.querySelector('#randomFoe').addEventListener('click', getFetchRandom)
document.querySelector('#getDrops').addEventListener('click', getMonsterDrops)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://botw-compendium.herokuapp.com/api/v2/entry/'
  fetch(`${url}${choice}`)
      .then(res => res.json()) 
      .then(data => {
        console.log(data)
        let drops = ""
        if(data.data.drops && data.data.drops.length > 0){
          drops = data.data.drops
        }else {
          drops = "No Drops"
        }
        document.querySelector("#getDrops").classList.remove("hidden");
        document.querySelector("img").src = data.data.image
        document.querySelector("h2").innerHTML = data.data.name
        document.querySelector("h3").innerHTML = data.data.description
        document.querySelector("h4").innerHTML = drops
        document.querySelector("h4").classList.add("hidden")      })
      .catch(err => {
          console.log(`error ${err}`)
      })
    }
  
  function getFetchRandom(){
    let randMonst = Math.ceil(Math.random() * (165));
    const url = 'https://botw-compendium.herokuapp.com/api/v2/entry/'
    
    fetch(`${url}${randMonst}`)
        .then(res => res.json()) 
        .then(data => {
          console.log(data)
          let drops = ""
          if(data.data.drops && data.data.drops.length > 0){
            drops = data.data.drops.join(", ")
          }else {
            drops = "No Drops"
          }
          document.querySelector("#getDrops").classList.remove("hidden");
          document.querySelector("img").src = data.data.image
          document.querySelector("h2").innerHTML = data.data.name
          document.querySelector("h3").innerHTML = data.data.description
          document.querySelector("h4").innerHTML = drops
          document.querySelector("h4").classList.add("hidden")

        })
        .catch(err => {
            console.log(`error ${err}`)
        })
      }

  function getMonsterDrops(){
    document.querySelector("h4").classList.remove("hidden")
}