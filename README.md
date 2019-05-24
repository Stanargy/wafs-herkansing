# Food Nutrients Lookup.

## Summary
Users can input a search request and select food categories. The application then looks up foods that are associated with the request. The user can then select a specific product on which the application will display the nutrient content of that specific product.  

## Table of contents
1. [Live demo](#1-Live-demo)
2. [Install](#2-Install)
3. [Features](#3-Features)
4. [API](#4-API)
5. [Actor Diagram](#5-Actor-Diagram)
6. [Interaction Diagram](#6-Interaction)
7. [Design decisions](#7-Design-decisions)
8. [To-do](#8-To-do)

## 1. Live Demo
https://wafs-herkansing.netlify.com/

## 2. Install
- To install the project just fork it and clone it to your device.
- run node index.html
## 3. Features
This Application connects to an API and retrieves the following items in order:
1. List of Foodgroups.
2. List of products matching a food category and a specific search quer.
3. List of nutrients of a product selected by the user.

After a product has been looked up it's database ID will be saved in the session storage. When a user looks up the same product again the application will render the data from the session storage instead.

## 4. API
The data that is collected is served from an API from the United States Department Of Agriculture which is called "USDA Food Composition Database."

Connecting To the API and retrieving food categories:
```js
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

```
API endpoints:
```js
    urlCategories: `https://api.nal.usda.gov/ndb/list?format=json&lt=g&sort=n&api_key=${key.key}`,

    urlOneGroup: ` https://api.nal.usda.gov/ndb/search/?format=json&q=`,

    urlProduct: ` https://api.nal.usda.gov/ndb/reports/?format=json&api_key=${key.key}`,
```

Saving data in localstorage:

```js
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
```



## 5. Actor Diagram
![Actor Diagram Image](wafs-herkansing/public/img/actorDiagram.JPG)


## 6. Interaction Diagram
![Interaction Diagram Image](wafs-herkansing/public/img/interactionDiagram.JPG)

## 7. Design Decisions
For this website I've chosen to use a rectangular layout with the containers that are used for the core features centered at all times. This gives the user a good overview of what the site has to offer.  