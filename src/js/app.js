import Country from './models/Country';
import {elements} from './views/domElements'
import * as countryView from './views/countryView'

let state = {
    click: false
};



let countryController = async () => {
    let query =  countryView.searchInput()
    state.country = new Country(query)
    console.log(state.country);
    countryView.printLoader(true)
    await state.country.getCountries()
    countryView.printLoader(false)
    countryView.renderCountries(state.country.result)
    elements.sortDiv.style.display = 'block'
    
}

let sortNameController = () => {
    if(!state.click){
        countryView.sortByName(state.country.result, state.click)
        state.click = true
        countryView.renderCountries(state.country.result)
        return
    } else if (state.click) {
        countryView.sortByName(state.country.result, state.click)
        state.click = false
        countryView.renderCountries(state.country.result)
        return
    }
}

let sortPopController = () => {
    if(!state.click){
        countryView.sortByPop(state.country.result, state.click)
        state.click = true
        countryView.renderCountries(state.country.result)
        return
    } else if (state.click) {
        countryView.sortByPop(state.country.result, state.click)
        state.click = false
        countryView.renderCountries(state.country.result)
        return
    }
}

let sortAreaController = () => {
    if(!state.click){
        countryView.sortByArea(state.country.result, state.click)
        state.click = true
        countryView.renderCountries(state.country.result)
        return
    } else if (state.click) {
        countryView.sortByArea(state.country.result, state.click)
        state.click = false
        countryView.renderCountries(state.country.result)
        return
    }
}




elements.btn.addEventListener('click', () => {
    countryController()
});

elements.sortName.addEventListener('click', () => {
    sortNameController()
})

elements.sortPopulation.addEventListener('click', () => {
    sortPopController()
})

elements.sortArea.addEventListener('click', () => {
    sortAreaController()
})