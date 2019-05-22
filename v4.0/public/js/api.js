import key from './key.js'
import storage from './cache.js'

const API = {
    urlCategories: `https://api.nal.usda.gov/ndb/list?format=json&lt=g&sort=n&api_key=${key.key}`,

    urlOneGroup: ` https://api.nal.usda.gov/ndb/search/?format=json&q=`,

    urlProduct: ` https://api.nal.usda.gov/ndb/reports/?format=json&api_key=${key.key}`,

    category: "g",
    getData: function (url) {
        console.log(url)
        // check if the url exists as a key in the localstorage
        // If it does exist get the data from the localstorage
        if(storage.check(url) === true){
           return storage.get(url)
        } else{
            // if it doesn't exist retrieve data by fetch
            console.log('Retrieved Data By Fetch')
            return  fetch(url).then((data) => {
                return data.json()
            }).then((data) => {
                storage.save(url, JSON.stringify(data))
                return data
            })
        }
    }
}
export default API