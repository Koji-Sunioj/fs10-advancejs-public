

class Country {
    constructor(name,countries)
    {
        this.name = name
        this.countries = countries
    }
    
    getCountries(){
        
        const countryPromise = fetch('https://restcountries.com/v3.1/all').then((response)=>
        response.json()).then(data=>data)
        return countryPromise
    }


    getCountry(name){  
        const country = fetch(`https://restcountries.com/v2/name/${name}`).then((response)=>
        response.json()).then(data=>data)
        return country
    }

}

async function init(){
    const Finland = new Country('Finland')
    console.log(Finland.name)
    const countries =  await Finland.getCountries()
    console.log(countries)
    const country = await Finland.getCountry('Finland')
    console.log(country)
}


document.addEventListener('DOMContentLoaded',init)
