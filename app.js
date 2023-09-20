// FEATURES
const buttonsFeature = document.querySelectorAll('.button-style-feature')
const featureTabs = document.querySelectorAll('.feature-tab')

buttonsFeature.forEach( button => {
    button.addEventListener('click', () => {
        buttonsFeature.forEach( button => {
            button.classList.remove('button-style-feature-active')
        })
        button.classList.add('button-style-feature-active')

        featureTabs.forEach((featureTab) => {
            featureTab.classList.add('inactive')
        })

        if(button.innerText === "Simple Bookmarking" ) {
            featureTabs[0].classList.remove('inactive')
        } else if (button.innerText === "Speedy Searching") {
            featureTabs[1].classList.remove('inactive')
        } else {
            featureTabs[2].classList.remove('inactive')
        }
    })
})

// QUESTIONS
const questions = document.querySelectorAll('.question-text-container') // pega as question

questions.forEach(question => {
    question.addEventListener('click', event => { //adiciona um evento para cada question
        const elementClicked = event.target //pega a referencia do elemento clicado
        let arrow //cria uma let para ser atribuida depois

        if(elementClicked.nodeName === 'DIV') { //atribui a let apartir do elemento clicado
             arrow = elementClicked.children[1]
        } else if(elementClicked.nodeName === 'H3') {
            arrow = elementClicked.nextElementSibling
        } else {
            arrow = elementClicked
        }

        arrow.classList.toggle('arrow-active')

        // const questionParagraph = arrow.parentElement.nextElementSibling
        const questionParagraph = arrow.parentElement.parentElement

        questionParagraph.classList.toggle('question-text-active')
    })
})

// CONTACT

const containerInputError = document.querySelector('.contact-input-error')
const textInputError = document.querySelector('.input-error-text')
const iconInputError = document.querySelector('.input-error-icon')
const footerForm = document.querySelector('.contact-form')
const contactInput = document.querySelector('.contact-input')

const testUserEmail = () => {
    const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    const userEmail = contactInput.value
    return regex.test(userEmail)
}

footerForm.addEventListener('submit', event => {
    event.preventDefault()

    const testedUserEmail = testUserEmail()

    if(testedUserEmail) {
        containerInputError.classList.add('error-inactive')
        textInputError.classList.add('inactive')
        iconInputError.classList.add('inactive')

        return
    }

    containerInputError.classList.remove('error-inactive')
    textInputError.classList.remove('inactive')
    iconInputError.classList.remove('inactive')
})