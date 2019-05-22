import router from './router.js'
import render from './render.js'

const events = {
    addEvents: function () {
        // add new events on startup   
        window.addEventListener('hashchange', router.locations)

        // fade out the title on scroll
        window.addEventListener('scroll', (event)=>{
        document.querySelector('header').style.opacity = 50/window.scrollY/70
        document.querySelector('footer').style.opacity = 50/window.scrollY/70
        } )

     //  console.log(window.onresize)
    
    },
    productButton: function () {
        document.querySelectorAll('.products button').forEach(button => {
            button.addEventListener('click', function () {
                render.oneProduct(this.id)
            })
        })
    }
}

export default events