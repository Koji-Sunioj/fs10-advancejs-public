
handleError = (response)=>{
  if (response.ok){
    return response.json()
  }
  else{
    throw new Error('no resource found')
  }
}

class Country {
  constructor(country,iso){
    this.country = country
    this.iso = iso
  }
    
  getCountries(population=false){
    const countries = fetch('https://restcountries.com/v3.1/all').then((response)=>
      handleError(response)
      ).then(data=>{
      if (population)
      {
        data = data.filter(country => country.population> population)
      }
      return data
      }).catch(()=>'nothing found')
      return countries
  }

  getCountryInfo(borders=false){  
    const country = fetch(`https://restcountries.com/v2/name/${this.country}`).then((response)=>
      handleError(response)
      ).then(data=>{
      if (data.length == 1 && borders == true)
      {
          data = data[0].borders
      }
      return data
      }).catch(()=>'nothing found')
      return country
  }
    
  getLangCountries(){  
    const countries = fetch(`https://restcountries.com/v2/lang/${this.iso}`).then((response)=>
        handleError(response)
    ).then(data=>{return data}).catch(()=>'nothing found')
    return countries
  }

}

async function init(){

  //1. method to get all countries
  const countries = await Country.prototype.getCountries()
  console.log(countries)

  const Finland = new Country('Suomi','fi')
  //2. A method that accept a country name as input and search for that country 
  console.log(await Finland.getCountryInfo())
  //3. get border names
  console.log(await Finland.getCountryInfo(borders=true))
  //4. get language of countries
  console.log(await Finland.getLangCountries())

  //5. accepts a population number (in millions),  what countries have more people than that
  const pops = await Country.prototype.getCountries(population=5000000)
  console.log(pops)
}

init()

