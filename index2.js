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


    for(let i = 0; i>10; i++){
        let li = document.createElement ('li')
        li.innerHTML = albumler[i].title
        li.setAttribute('onclick', `filitrele(${albumler[i].id})`)

        alan.appendChild(li)
    }
}