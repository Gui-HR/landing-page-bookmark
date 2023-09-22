// MENU-HAMBURGUER
const nav = document.querySelector('nav')
const main = document.querySelector('main')
const logoBookmark = document.querySelector('.logo-bookmark')
const divLinksContainer = document.querySelector('.links')
const ul = document.querySelector('ul')
const navLinks = Array.from(document.querySelectorAll('[data-link]'))
const menuHamburguer = document.querySelector('.menu-hamburguer')
const menuHamburguerLines = Array.from(menuHamburguer.children)
const classesMenuHamburguerLines = ['line1-menu-hamburguer-active',
    'line2-menu-hamburguer-active', 'line3-menu-hamburguer-active']

const addMenuHamburguerClasses = (line, index) => {
    line.classList.toggle(classesMenuHamburguerLines[index])
}

const menuAnimation = () => {
    const logo = 'bookmark-landing-page-master/images/logo-bookmark.svg'
    const logoActive = 'bookmark-landing-page-master/images/logo-bookmark-active.svg'

    menuHamburguerLines.forEach(addMenuHamburguerClasses)

    nav.classList.toggle('nav-active')
    divLinksContainer.classList.toggle('links-active')
    main.classList.toggle('menu-active-effect')

    if(window.innerWidth < 480) {
        logoBookmark.getAttribute('src') === logo ? logoBookmark
            .setAttribute('src', logoActive) : logoBookmark
            .setAttribute('src', logo)
    }
}

const opeAndCloseMenu = event => {
    const eixoY = event.pageY
    const  timeToScroll = eixoY < 1000 ? eixoY / 1.7 : eixoY < 2000 ? eixoY / 2.5 : eixoY < 3000 ? eixoY / 3.7 : eixoY < 4000 ? eixoY / 4.7 : eixoY / 6
    const miliseconds = Array.from(nav.classList).includes('nav-active') ? Math.trunc(timeToScroll) : 0

    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

    setTimeout(menuAnimation, miliseconds)
}

const removeHrefOfLinks = () => {
    navLinks.filter( link => link.nodeName === 'A').forEach(item => {
        item.setAttribute('href','#')
    })
}

const scroll = (dataLink, x, coordY) => {
    if(dataLink === x) {
        setTimeout(() => {
            scrollTo({
                top: coordY,
                left: 0,
                behavior: 'smooth'
            })
        }, 400)
    }
}

const closeMenuAndScrollPage = event => {
    const elementClicked = event.target
    const dataLink = elementClicked.dataset.link

    removeHrefOfLinks()

    if(navLinks.includes(elementClicked)) {
        menuAnimation()
        
        if(window.innerWidth < 480) {
            scroll(dataLink, 'features', 1100)
            scroll(dataLink, 'pricing', 3650)
            scroll(dataLink, 'contact', 4500)

            return
        }

        scroll(dataLink, 'features', 700)
        scroll(dataLink, 'pricing', 2250)
        scroll(dataLink, 'contact', 4500)
    }
}

menuHamburguer.addEventListener('click', opeAndCloseMenu)
ul.addEventListener('click', closeMenuAndScrollPage)


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