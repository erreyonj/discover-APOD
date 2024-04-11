//The user will enter a date. Use that date to get the NASA picture or video of the day from that date! https://api.nasa.gov/

const h2 = document.querySelector('h2')
const img = document.querySelector('img')
const iframe = document.querySelector('iframe')
const h3 = document.querySelector('h3')
const input = document.querySelector('input')
const button = document.querySelector('button')



// const nasaPhoto = () => {
//     // sets photo and vid elements to empty
//     iframe.src = ''
//     img.src = ''

//     // adds hidden class to img and vid elements so that later, only appropriate element will show
//     img.classList.add('hidden')
//     iframe.classList.add('hidden')
//     h2.classList.add('hidden')

//     let userDate = input.value


//     // fetch is the async action, its what we are WAITING on
//     fetch(`https://api.nasa.gov/planetary/apod?api_key=4DQETIjlVAoeVLhlmk5lwDP51cwcEVZIWoXMuT3z&date=${userDate}`)
//         // result of fetch is my response and is converted to json
//         .then(res => res.json())
//         // using json data we TRY some things with the data
//         .then(data => {
//             console.log(data)
//             if(data.media_type === 'image'){
//                 img.src = data.hdurl
//                 h2.innerText = data.title
//                 h3.innerText = data.explanation
//                 img.classList.remove('hidden')
//                 h2.classList.remove('hidden')
//                 h3.classList.remove('hidden')
//             } else {
//                 iframe.src = data.url
//                 h2.innerText = data.title
//                 h3.innerText = data.explanation
//                 iframe.classList.remove('hidden')
//                 h2.classList.remove('hidden')
//                 h3.classList.remove('hidden')
//             }
//         })
//         // catch appears to be in the right place, just needs syntax adjustment
//         .catch(err =>{
//             console.log(`error${err}`)
//         })
// }


const getNasaPhoto = async () => {
    // sets photo and vid elements to empty
    iframe.src = ''
    img.src = ''

    // adds hidden class to img and vid elements so that later, only appropriate element will show
    img.classList.add('hidden')
    iframe.classList.add('hidden')
    h2.classList.add('hidden')

    let userDate = input.value

    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=4DQETIjlVAoeVLhlmk5lwDP51cwcEVZIWoXMuT3z&date=${userDate}`)
    const data = await res.json()
    console.log(data)

    // now with data, TRY some things
    try {
        
        if(data.code === 400){
            img.classList.remove('hidden')
            img.src = 'img/apod-error-img.png'
            h3.innerText = data.msg
        }else if(data.media_type === 'image'){
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
    } catch(err) {
        // console.log(`error${err}`)
        // img.src = 'img/apod-error-img.png'
        console.log('an error still logged')
    }
}


button.addEventListener('click',getNasaPhoto)

// next task is to re-write this function with async/await syntax with try/catch for error. Will make a simple canva "uh-oh" img