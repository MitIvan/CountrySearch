import {elements} from './domElements'

export let searchInput = () => elements.search.value

let getLangAndCur= data => {
    let str= ''
    data.map(data => data.name).forEach(data => str += `${data} `)
    return str
}

export let renderCountries = countries => {
    elements.table.innerHTML = '';
    elements.table.innerHTML +=`
        <table class="w3-table-all w3-hoverable "> 
            <thead>
                <tr class="w3-light-grey">
                    <th>Flag</th>
                    <th>Name</th>
                    <th>Population</th>
                    <th>Capital</th>
                    <th>Area</th>
                    <th>Langues</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody id ="tbody">`
        let tBody = document.querySelector('#tbody')
        for (const country of countries) {
        
            tBody.innerHTML += `
            <tr>
                <td><img src="${country.flag}"  width="100px"></td>
                <td>${country.name}</td>
                <td>${country.population}</td>
                <td>${country.capital}</td>
                <td>${country.area}</td>
                <td>${getLangAndCur(country.languages)}</td>
                <td>${getLangAndCur(country.currencies)}</td>
            </tr>`
        }
                
}

export let printLoader = toggle => {
    !toggle ? elements.loader.style.display = 'none' : elements.loader.style.display = 'block'
}



export let sortByName = (countries, click) => {
    if(!click){
        countries.sort((a, b) => {
            if(a.name < b.name) {return -1;}
            if(a.name > b.name) {return 1;}
            return 0;
        })
    }
    if(click) {
        countries.sort((a, b) =>{
            if(a.name < b.name) {return 1;}
            if(a.name > b.name) {return -1;}
            return 0;
        })

    }
}

export let sortByPop = (countries, click) => {
    if(!click) {
        countries.sort((a, b) =>{
            return a.population - b.population   
        })
    }
    if(click){
        countries.sort((a, b) =>{
            return b.population - a.population   
        })
    }  
}

export let sortByArea = (countries, click) => {
    if(!click) {
        countries.sort((a, b) =>{
            return a.area - b.area  
        })
    }
    if(click){
        countries.sort((a, b) =>{
            return b.area - a.area   
        })
    }  
}