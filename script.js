document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const anchor = document.getElementById('anchor')
    const rekt = anchor.getBoundingClientRect()

    const anchorX = rekt.left + rekt.width / 2
    const anchorY = rekt.top + rekt.height / 2

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)

    const eyes = document.querySelectorAll('#eyes img') // Selects both eyes
    eyes.forEach((eye) => {
        eye.style.transform = `rotate(${angleDeg}deg)`
    })
})

function angle(x1, y1, x2, y2) {
    const dy = y2 - y1
    const dx = x2 - x1
    const rad = Math.atan2(dy, dx)
    const deg = rad * 180 / Math.PI
    return deg
}
