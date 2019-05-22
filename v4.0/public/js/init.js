"use strict";

import render from './render.js'
import router from './router.js'
import events from './events.js'
(function () {
    const init = {
        startUp: function () {
            router.locations()
            render.overView()
            events.addEvents()
            document.querySelector('#tableContainer').classList.add('invisible')
        }    
    }
    

    window.addEventListener('load', init.startUp())
}())


// 1 food groups
// 2 alles binnen deze groep
// 3 nutrienten specifiek voor 1 product







///////////////////////////////////////////////////////// API 
// All foods:
// Browser: http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269
// CURL: curl -H "Content-Type:application/json" -d '{"nutrients":["204","205","208","269"],"max":25,"offset":0}' DEMO_KEY@api.nal.usda.gov/ndb/nutrients

// For food groups Dairy and Egg Products (id = 0100) and Poultry Products (id=0500):
// Browser: https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269&fg=0100&fg=0500
// CURL: curl -H "Content-Type:application/json" -d '{"nutrients":["204","205","208","269"],"fg":["0100","0500"],"max":25,"offset":0}' DEMO_KEY@api.nal.usda.gov/ndb/nutrients

// For chedder cheese (ndbno 01009) only:
// Browser: https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=01009
// CURL: curl -H "Content-Type:application/json" -d '{"nutrients":["204","205","208","269"],"ndbno":"01009","max":25,"offset":0}' DEMO_KEY@api.nal.usda.gov/ndb/nutrients
