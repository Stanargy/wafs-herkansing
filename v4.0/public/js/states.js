const states = {
    loading: function(container){
        const newElement = `<img src="./public/img/loader.gif">`
        console.log("loading")
        container.insertAdjacentHTML('beforeend', newElement)
    },
    loaded: function(container){
        console.log("loaded")
        
    }
}

export default states