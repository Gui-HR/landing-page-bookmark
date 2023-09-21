// MENU-HAMBURGUER
const nav = document.querySelector('nav')
const main = document.querySelector('main')
const logoBookmark = document.querySelector('.logo-bookmark')
const links = document.querySelector('.links')
const menuHamburguer = document.querySelector('.menu-hamburguer')
const menuHamburguerLines = Array.from(menuHamburguer.children)
const classesMenuHamburguerLines = ['line1-menu-hamburguer-active',
    'line2-menu-hamburguer-active', 'line3-menu-hamburguer-active']

const addMenuHamburguerClasses = (line, index) => {
    line.classList.toggle(classesMenuHamburguerLines[index])
}

menuHamburguer.addEventListener('click', () => {
    const logo = 'bookmark-landing-page-master/images/logo-bookmark.svg'
    const logoActive = 'bookmark-landing-page-master/images/logo-bookmark-active.svg'
    const miliseconds = Array.from(nav.classList).includes('nav-active') ? 800 : 0

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

    setTimeout(() => {
        menuHamburguerLines.forEach(addMenuHamburguerClasses)

        nav.classList.toggle('nav-active')
    
        logoBookmark.getAttribute('src') === logo ? logoBookmark
            .setAttribute('src', logoActive) : logoBookmark
            .setAttribute('src', logo)
    
        links.classList.toggle('links-active')
    
        main.classList.toggle('menu-active-effect')
    }, miliseconds)
})


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