const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', showBoxes)
showBoxes()

function showBoxes() {
    const triggerBottom = window.innerHeight

    boxes.forEach(box => {
        const boxBottom = box.getBoundingClientRect().bottom

        if(boxBottom < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}