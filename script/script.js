// show the menu

const showMenu = (menu_toggleId, navId) => {
    const toggle = document.getElementById(menu_toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        });
    }
}

showMenu('menu_toggle', 'navb_menu')

// TO ACTIVATE OR REMOVE THE selection

const navlink = document.querySelectorAll('.nav_link')
navlink.forEach(n => n.classList.remove('active'))

function linkAction() {
    navlink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('navb_menu')
    navMenu.classList.remove('show')

}

navlink.forEach(n => n.addEventListener('click', linkAction))