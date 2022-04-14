//Example fetch using pokemonapi.co
document.querySelector("#countryCodeBtn").addEventListener('click', getCountryCode)
document.querySelector("#nextHolidayBtn").addEventListener('click', getHoliday)




function getCountryCode(){
  const choice = document.querySelector("#countryCode").value
  const url = 'https://date.nager.at/api/v3/AvailableCountries'

  fetch(`${url}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let countryCode = data.find(country => country.name === choice).countryCode
        document.querySelector("h3").innerText = countryCode
        return countryCode.countryCode
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}




function getHoliday(){
  const code = document.querySelector("#nextHoliday").value
  const url = 'https://date.nager.at/api/v3/NextPublicHolidays/'

  fetch(`${url}${code}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("h5").innerText = `${data[0].localName} which occurs on ${data[0].date}`

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}