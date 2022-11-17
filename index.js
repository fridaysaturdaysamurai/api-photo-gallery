const inputSearch = document.querySelector('input');
const searchBtn = document.querySelector('.search__btn');
const photoWrapper = document.querySelector('.photo__wrapper');

const getPhoto = async () => {
    photoWrapper.innerHTML = '';
    let inputValue = inputSearch.value;

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=8&per_page=20&query=${inputValue}&client_id=cOukKs9bsw25rvFdXZwz4z8Zx7xMFubifjB3QFFNF0s`);
        const data = await response.json();

        data.results.map((results) => {
        let imageData = `${results.urls.thumb}`,
        img = document.createElement('img');
        img.src = imageData;
        photoWrapper.appendChild(img);
        })
    } catch(error) {
        console.log('Error >>>', error);
    }
}

searchBtn.addEventListener('click', getPhoto);