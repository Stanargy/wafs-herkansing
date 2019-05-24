import API from './API.js'
import states from './states.js'
import key from './key.js'
import events from './events.js'

const render = {
    overView: async function () {
        const data = await API.getData(API.urlCategories)
        const container = document.querySelector('#overview')
        data.list.item.forEach(item => {
            const newElement = `<option value="${item.id}">${item.name}</option>`
            container.insertAdjacentHTML('beforeend', newElement)
        })
    },
    products: async function () {
        const container = document.querySelector('#products')
        // show loader
        states.loading(container)
container.style.opacity = "1";
container.style.zIndex = "10";
        // call API
        const query = document.querySelector('#searchQueryInput').value
        const selectedValue = document.querySelector('#overview').value
        const data = await API.getData(`${API.urlOneGroup}${query}&sort=n&max=25&offset=0&fg=${selectedValue}&api_key=${key.key}&lt=nr`)
        render.removeElements(container);

        states.loaded()

        // log url
        console.log(`${API.urlOneGroup}${query}&sort=n&max=25&offset=0&fg=${selectedValue}&api_key=${key.key}&lt=nr`)

console.log(data)
        // for each item in the data object, add a line to the new Element width a button to see more
        data.list.item.forEach(item => {
            const newElement = `<div class="products"><h5>${item.name}</h5><button  id="${item.ndbno}">See more</button></div>`
            container.insertAdjacentHTML('beforeend', newElement)
        })
        events.productButton()
    },
    oneProduct: async function (id) {
        const data = await API.getData(`${API.urlProduct}&ndbno=${id}`)
        console.log(data.report.food)

        const container = document.querySelector('#productTable')
        const tableRows = document.querySelectorAll('table tr')


        // for each row in the nutrient declaration: put in the nutrient that has a corresponding index.
        tableRows.forEach((row, index) => {
            const cell = Array.from(row.querySelectorAll('td'))
            data.report.food.nutrients.forEach((nutrient, index2) => {
                if (cell.length !== 0 && index === index2) {
                    cell[0].textContent = nutrient.name
                    cell[1].textContent = nutrient.unit;
                    cell[2].textContent = nutrient.value
                }
            })
        })
        // insert the title of the product
        document.querySelector('#productName').textContent = data.report.food.name;
    },

    // remove Elements Function
    removeElements: function (container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild)
        }
    },
    filterProducts: async function(){
        const container = document.querySelector('#products')
        // show loader
        states.loading(container)

        // call API
        const query = document.querySelector('#searchQueryInput').value
        const selectedValue = document.querySelector('#overview').value
        const data = await API.getData(`${API.urlOneGroup}${query}&sort=n&max=25&offset=0&fg=${selectedValue}&api_key=${key.key}&lt=nr`)
        // render.removeElements(container);
        states.loaded()
console.log(data.list.item)

// check if an object matches the filter query --> if it does keep it, if it doesn't delete it from the array


        // for each item in the data object, add a line to the new Element width a button to see more
        // data.list.item.forEach(item => {
        //     const newElement = `<div class="products"><h5>${item.name}</h5><button  id="${item.ndbno}">See more</button></div>`
        //     container.insertAdjacentHTML('beforeend', newElement)
        // })
        // events.productButton()
    },
    }

export default render