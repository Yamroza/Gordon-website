// document.addEventListener('click', e => {
//     const isDropButton = e.target.matches("[data-dropdown-button]")
//     if (!isDropButton && e.target.closest('[data-dropdown]') != null) return
    
//     let currentDropdown
//     if (isDropButton) {
//         currentDropdown = e.target.closest('[data-dropdown]')
//         currentDropdown.classList.toggle('active')
//     }
//     document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
//         if (dropdown === currentDropdown) return
//         dropdown.classList.remove('active')
//     })
// })