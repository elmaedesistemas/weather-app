export class Store {

    constructor(){
        this.city
        this.countryCode
        this.defaultCity = 'Moscow'
        this.defaultcountryCode = 'ru'
    }

    getLocationData(){
        if(localStorage.getItem('city' === null)){
            this.city = this.defaultCity
        } else {
            localStorage.getItem('city')
        }
        
        if(localStorage.getItem('countryCode' === null)){
            this.countryCode = this.defaultcountryCode
        } else {
            localStorage.getItem('countryCode')
        }
        
        return {
            city: this.city,
            countryCode: this.countryCode
        }
    }

    setLocationData(city, countryCode){
        localStorage.setItem('city', city)
        localStorage.setItem('countryCode', countryCode)
        
    }
}