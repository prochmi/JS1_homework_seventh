const justFood = (pocetLidi) => {
    return `catering od Just Food pro ${pocetLidi} lidi za ${Math.round(pocetLidi * 120)} Kč`

}

const yourMama = (pocetLidi) => {
    return `catering od Your Mama pro ${pocetLidi} lidi za ${Math.round(pocetLidi * 250)} Kč`

}

const flavourHaven = (pocetLidi) => {
    return `catering od Flavour Haven pro ${pocetLidi} lidi za ${Math.round(pocetLidi * 3000)} Kč`

}


const createEvent = (nazevUdalosti, pocetLidi, nazevCatering) => {

    return `Událost ${nazevUdalosti}s  ${nazevCatering(pocetLidi)}`
}


console.log('funguju!');
/*

const kostka = document.querySelector('.dice')
let strana = 1

const zmenaStrany = () => {
    strana = strana + 1
    if (strana === 7) {
        strana = 1
    } 
    kostka.src = `img/side${strana}.svg` 
}

document.addEventListener('keydown', zmenaStrany)

*/



const zvuk = document.querySelector('.audio')
const cas = Number(prompt('Kolik vteřin má uplynout, než minutka začne zvonit?'))*1000
const tlacitko = document.querySelector('.tlacitko')
const budik = document.querySelector('.alarm')


const zvonit = () => {
    budik.classList.add('alarm--ring')
    zvuk.play()
}

const zacatek = setTimeout(zvonit, cas)

const zrusit = () => {
    budik.classList.remove('alarm--ring')
    zvuk.pause()
    clearTimeout(zacatek)
}

tlacitko.addEventListener('click', zrusit)

