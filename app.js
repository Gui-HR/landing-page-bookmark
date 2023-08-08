// Buttons
const buttonsFeature = document.querySelectorAll('.button-style-feature')

// Tabs
const featureTab1 = document.querySelector('.feature-tab-1')
const featureTab2 = document.querySelector('.feature-tab-2')
const featureTab3 = document.querySelector('.feature-tab-3')

buttonsFeature.forEach( button => {
    button.addEventListener('click', () => {
        buttonsFeature.forEach( button => {
            button.classList.remove('button-style-feature-active')
        })
        button.classList.add('button-style-feature-active')

        console.log(button.textContent)

        if(button.innerText === "Simple Bookmarking" ) {
            featureTab1.classList.remove('inactive')
            featureTab2.classList.add('inactive')
            featureTab3.classList.add('inactive')
        } else if (button.innerText === "Speedy Searching") {
            featureTab1.classList.add('inactive')
            featureTab2.classList.remove('inactive')
            featureTab3.classList.add('inactive')
        } else {
            featureTab1.classList.add('inactive')
            featureTab2.classList.add('inactive')
            featureTab3.classList.remove('inactive')
        }
    })
})