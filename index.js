
window.onload = () => {
    albumList()
    fotografList()
}

const albumList = async () => {
    let alan = document.getElementById('albumAlan')
    alan.innerHTML = ''
    
    let albumler

    await fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(data => albumler = data)

    

    for(let i = 0; i < 10; i++){
        let li = document.createElement ('li')
        li.innerHTML = albumler[i].title
        li.setAttribute('onclick', `filitrele(${albumler[i].id})`)

        alan.appendChild(li)
    }
       
}

const filitrele = async (id) => {
    let fotolar 

    await fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + id)
    .then(response => response.json())
    .then(data => fotolar = data)

    let fotografAlan = document.getElementById('fotografAlan')
    fotografAlan.innerHTML = ''

    fotolar.forEach(element => {
        let div = document.createElement('div')
        div.classList = 'col-sm-3 m-2 card'
        div.innerHTML = `
            <p>${element.title}</p>
        `
        fotografAlan.appendChild(div)

    });

}


const fotografList = async () => {
    let fotograflar 


    await fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => fotograflar = data)


    let fotografAlan = document.getElementById('fotografAlan')
    fotografAlan.innerHTML = ''

    fotograflar.forEach(element => {
        let div = document.createElement('div')
        div.classList = 'col-sm-3 m-2 card'
        div.innerHTML = `
            <p>${element.title}</p>
        `
        fotografAlan.appendChild(div)

    });
}

