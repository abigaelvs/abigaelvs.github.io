const root = document.documentElement

// theme (initial class is set by the inline script in <head>)
const themeButton = document.getElementById('themeButton')
const syncThemeIcon = () => {
    const dark = root.classList.contains('dark-theme')
    themeButton.querySelector('i').className = dark ? 'bx bx-sun' : 'bx bx-moon'
}
syncThemeIcon()
themeButton.addEventListener('click', () => {
    root.classList.toggle('dark-theme')
    syncThemeIcon()
    try {
        localStorage.setItem('selected-theme', root.classList.contains('dark-theme') ? 'dark' : 'light')
    } catch (e) {}
})

// mobile menu
const navMenu = document.getElementById('navMenu')
const navToggle = document.getElementById('navToggle')
const setMenu = open => {
    navMenu.classList.toggle('open', open)
    navToggle.setAttribute('aria-expanded', open)
    navToggle.querySelector('i').className = open ? 'bx bx-x' : 'bx bx-menu'
}
navToggle.addEventListener('click', () => setMenu(!navMenu.classList.contains('open')))
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => setMenu(false)))

// header shadow + scroll-up button
const header = document.getElementById('header')
const scrollUp = document.getElementById('scrollUp')
const onScroll = () => {
    header.classList.toggle('scrolled', scrollY > 10)
    scrollUp.classList.toggle('show', scrollY > 560)
}
addEventListener('scroll', onScroll, { passive: true })
onScroll()

// active nav link for the section in view
const links = new Map([...document.querySelectorAll('.nav-link')].map(a => [a.hash.slice(1), a]))
const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return
        links.forEach(a => a.classList.remove('active'))
        links.get(entry.target.id)?.classList.add('active')
    })
}, { rootMargin: '-45% 0px -50% 0px' })
document.querySelectorAll('main section[id]').forEach(section => spy.observe(section))

// skills: category filter + search
const filters = document.querySelectorAll('.filter')
const skillGroups = document.querySelectorAll('.skill-group')
const skillSearch = document.getElementById('skillSearch')
const skillsEmpty = document.getElementById('skillsEmpty')
let category = 'all'

const applySkills = () => {
    const query = skillSearch.value.trim().toLowerCase()
    let shown = 0
    skillGroups.forEach(group => {
        let matches = 0
        group.querySelectorAll('.chip').forEach(chip => {
            const match = !query || chip.textContent.toLowerCase().includes(query)
            chip.hidden = !match
            if (match) matches++
        })
        group.hidden = (category !== 'all' && group.dataset.group !== category) || matches === 0
        if (!group.hidden) shown++
    })
    skillsEmpty.hidden = shown > 0
}

filters.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.filter
    filters.forEach(b => {
        b.classList.toggle('active', b === button)
        b.setAttribute('aria-pressed', b === button)
    })
    applySkills()
}))
skillSearch.addEventListener('input', applySkills)

// show more for long experience text
document.querySelectorAll('.job-body').forEach(body => {
    if (body.scrollHeight <= body.clientHeight) return

    body.classList.add('clamped')
    const button = document.createElement('button')
    button.className = 'more'
    button.setAttribute('aria-expanded', 'false')
    const render = open => {
        button.innerHTML = open ? 'Show less <i class="bx bx-chevron-up"></i>' : 'Show more <i class="bx bx-chevron-down"></i>'
    }
    render(false)
    button.addEventListener('click', () => {
        const open = body.classList.toggle('expanded')
        button.setAttribute('aria-expanded', open)
        render(open)
    })
    body.after(button)
})

document.getElementById('year').textContent = new Date().getFullYear()
