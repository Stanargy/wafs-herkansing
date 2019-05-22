const storage = {
    check: function (url) {
        // check if the url exists as a key in the localstorage
        // If it does exist get the data from the localstorage

        if (localStorage.getItem(url)) {
            return true;
        } else {
            return false;
        }
    },
    get: function (url) {
            console.log('Retrieved Data Locally')
            return JSON.parse(localStorage.getItem(url))
    },
    save: function (url, data) {
        localStorage.setItem(url, data)
    },
}
export default storage