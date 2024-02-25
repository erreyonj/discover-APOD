//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const h2 = document.querySelector('h2')
const img = document.querySelector('img')
const iframe = document.querySelector('iframe')
const h3 = document.querySelector('h3')
const input = document.querySelector('input')
const button = document.querySelector('button')



const nasaPhoto = () => {
    iframe.src = ''
    img.src = ''
    img.classList.add('hidden')
    iframe.classList.add('hidden')
    h2.classList.add('hidden')
    let userDate = input.value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=4DQETIjlVAoeVLhlmk5lwDP51cwcEVZIWoXMuT3z&date=${userDate}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.media_type === 'image'){
                img.src = data.hdurl
                h2.innerText = data.title
                h3.innerText = data.explanation
                img.classList.remove('hidden')
                h2.classList.remove('hidden')
                h3.classList.remove('hidden')
            } else {
                iframe.src = data.url
                h2.innerText = data.title
                h3.innerText = data.explanation
                iframe.classList.remove('hidden')
                h2.classList.remove('hidden')
                h3.classList.remove('hidden')
            }
        })
        .catch(err =>{
            console.log(`error${err}`)
        })
}

button.addEventListener('click',nasaPhoto)