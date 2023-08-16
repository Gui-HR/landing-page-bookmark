// FEATURES

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

// QUESTIONS

// const arrowsButton = document.querySelectorAll('.questions-arrow')

// arrowsButton.forEach((arrow) => {
//     arrow.addEventListener('click', event => {
//         const questionParagraph = event.target.parentElement.nextElementSibling

//         questionParagraph.classList.toggle('question-text-active')

//         event.target.classList.toggle('arrow-active')
//     })
// })

const questions = document.querySelectorAll('.question-text-container')

questions.forEach(question => {
    question.addEventListener('click', event => {
        const elementClicked = event.target
        let arrow

        if(elementClicked.nodeName === 'DIV') {
             arrow = elementClicked.children[1]
        } else if(elementClicked.nodeName === 'H3') {
            arrow = elementClicked.nextElementSibling
        } else {
            arrow = elementClicked
        }

        arrow.classList.toggle('arrow-active')

        const questionParagraph = arrow.parentElement.nextElementSibling

        questionParagraph.classList.toggle('question-text-active')
    })
})