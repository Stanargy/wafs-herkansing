import render from './render.js'

const router = {
    home: function () {
     
    },
    locations: function(){
         if(window.location.hash === "#products"){
                render.products()
                document.querySelector('#tableContainer').classList.remove('invisible')
                document.querySelector('form').classList.add('invisible')
            }
            
            else if(window.location.hash=== ""){
                render.removeElements(document.querySelector('#products'))
                document.querySelector('#tableContainer').classList.add('invisible')
                document.querySelector('form').classList.remove('invisible')
            }
    }

}

export default router