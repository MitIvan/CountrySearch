import axios from 'axios'

export default class Country {
    constructor(query){
        this.query = query
    }

    async getCountries() {
        let res = await axios(`https://restcountries.eu/rest/v2/name/${this.query}`)
        this.result = res.data
    }
}


