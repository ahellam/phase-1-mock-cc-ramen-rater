
const apiRamenURL = `http://localhost:3000/ramens`
const apiIdURL = `http://localhost:3000/:id`
const ramenMenuContainer = document.getElementById('ramen-menu')
const ramenDetailContainer = document.getElementById('ramen-detail')

fetch(apiRamenURL)
.then(resp => resp.json())
.then(renderRamenPhotos)
.catch(console.error)

function renderRamenPhotos(json){
    const ramenPhotos = json
    // console.log(ramenPhotos)
    ramenPhotos.forEach(renderRamenPhoto)
}

function renderRamenPhoto(photoUrl){
    const photo = document.createElement('img')
    photo.src = photoUrl.image
    // console.log(photo)
    ramenMenuContainer.append(photo)
    photo.addEventListener('click', renderDetailsPhoto)
}


function renderDetailsPhoto(photoUrl){
    const detailPhoto = document.createElement('img')
    detailPhoto.src = photoUrl.image
    ramenDetailContainer.append(detailPhoto)
}



