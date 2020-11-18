/* Funcionalidad de Menú hamburguesa */
const menuBurguer = document.getElementById('menu_burger');
const menuBurguerClose = document.getElementById('menu_burger_close');
const navBar = document.getElementById('navBar');
const funcionalidadMenuOpen = () => {
    menuBurguer.classList.add('none');
    menuBurguerClose.classList.remove('none');
    navBar.classList.remove('nav_none');
};
const funcionalidadMenuClose = () =>{
    menuBurguer.classList.remove('none');
    menuBurguerClose.classList.add('none');
    navBar.classList.add('nav_none');
}
menuBurguer.addEventListener('click', funcionalidadMenuOpen);
menuBurguerClose.addEventListener('click', funcionalidadMenuClose);
/* Funcionalidad de Menú hamburguesa */

/* Dark mode */
let darkMode = document.getElementById('darkMode');
darkMode.addEventListener('click', (e) =>{
    e.preventDefault();
    document.body.classList.toggle('dark');
    //localStorage for Dark Mode
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    }else{
        localStorage.setItem('dark-mode', 'false');
    }
});
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
}else{
    document.body.classList.remove('dark');
}
/* Dark mode */

/* Carrusel trending */
const fila = document.querySelector('.container_trending_gifos_flex');
const arrowLef = document.getElementById('arrow-lef');
const arrowRight = document.getElementById('arrow-right');
arrowRight.addEventListener('click', ()=>{
    fila.scrollLeft += fila.offsetWidth;
});
arrowLef.addEventListener('click', ()=>{
    fila.scrollLeft -= fila.offsetWidth;
});
/* Carrusel trending */
/* Add to favorite */
let favoriteSection = [];
let gifosContainerFlex = document.getElementById('gifosContainerFlex');
let favoriteClean = document.getElementById('favoriteClean');

const addToFavorite = (gifos_trending) =>{
    favoriteSection.push(gifos_trending);
    favoriteClean.classList.add('none');
    createDomFavorite(gifos_trending);
}
const createDomFavorite = (items) =>{
    let favoriteContainer = document.createElement('div');
    favoriteContainer.classList.add('gifos_trending');
    favoriteContainer.style.backgroundImage = `url("${items.images.downsized_medium.url}")`;

    let infoGif = document.createElement('div');
    infoGif.classList.add('info_gif');

    let actionsUser = document.createElement('div');
    actionsUser.classList.add('actions_users');

    let iconFav = document.createElement('div');
    iconFav.classList.add('icon_fav', 'tamaño_actions_users');

    actionsUser.appendChild(iconFav);

    let iconDownload = document.createElement('div');
    iconDownload.classList.add('icon_download', 'tamaño_actions_users');
    actionsUser.appendChild(iconDownload);

    let iconMax = document.createElement('div');
    iconMax.classList.add('icon_max', 'tamaño_actions_users');
    actionsUser.appendChild(iconMax);

    infoGif.appendChild(actionsUser);
    favoriteContainer.appendChild(infoGif);
    gifosContainerFlex.appendChild(favoriteContainer);

    
}
/* Add to favorite */


/* API Trending */
const getTrending = async (url) => {
    try {
        let response = await fetch(url);
        response = await response.json();
        return response;

    } catch (e) {
        console.log(e);
    }
}
const trendingDom = () =>{
    let url = `${baseApi}trending?api_key=${apiTrending}&limit=25&rating=g`;
    let result = getTrending(url);
    result.then((resp)=>{
        resp.data.map(item=>{
            createDom(item);
        })
    }).catch((e) => {
        console.log("a ocurrido un error" + e);
    });
} 
const createDom = (data) =>{
    let containerTrending = document.getElementById('containerTrending');
    let gifosTrending = document.createElement('div');
    gifosTrending.classList.add('gifos_trending');
    gifosTrending.style.backgroundImage = `url("${data.images.downsized_medium.url}")`;

    let infoGif = document.createElement('div');
    infoGif.classList.add('info_gif');

    let actionsUser = document.createElement('div');
    actionsUser.classList.add('actions_users');

    let iconFav = document.createElement('div');
    iconFav.classList.add('icon_fav', 'tamaño_actions_users');
    iconFav.addEventListener('click', () =>{
        addToFavorite(data);
    });
    actionsUser.appendChild(iconFav);

    let iconDownload = document.createElement('div');
    iconDownload.classList.add('icon_download', 'tamaño_actions_users');
    actionsUser.appendChild(iconDownload);

    let iconMax = document.createElement('div');
    iconMax.classList.add('icon_max', 'tamaño_actions_users');

    actionsUser.appendChild(iconMax);
    infoGif.appendChild(actionsUser);
    gifosTrending.appendChild(infoGif);
    containerTrending.appendChild(gifosTrending);
}
trendingDom();
/* API Trending */

/* API Search */
let searchValue = document.getElementById('search_value');
let searchBtn = document.getElementById('btn_search');
let sectionSearch = document.getElementById('sectionSearch');
let searchResult = document.getElementById('search_result');
const getSearch = async (urlS) => {
    try {
        let response = await fetch(urlS);
        response = await response.json();
        return response;
    } catch (e) {
        console.log(e);
    }
}
const search = (title) =>{
    let urlSearch = `${baseApi}search?api_key=${apiSearch}&q=${title}`;
    let result = getSearch(urlSearch);
    result.then((resp)=>{
        /* sectionSearch.innerHTML = ''; */
        resp.data.map(items=>{
            domSearch(items);
            console.log(items);
        })
    }).catch((e) => {
        console.log("a ocurrido un error " + e);
    });
}
const domSearch = (gifSearch) =>{
    let h1Title = document.getElementById('title');
    h1Title.textContent = searchValue.value;
    
    let gifosTrending = document.createElement('div');
    gifosTrending.classList.add('gifos_trending');
    gifosTrending.style.backgroundImage = `url("${gifSearch.images.downsized_medium.url}")`;

    let infoGif = document.createElement('div');
    infoGif.classList.add('info_gif');

    let actionsUser = document.createElement('div');
    actionsUser.classList.add('actions_users');

    let iconFav = document.createElement('div');
    iconFav.classList.add('icon_fav', 'tamaño_actions_users');
    iconFav.addEventListener('click', () =>{
        addToFavorite(data);
    });
    actionsUser.appendChild(iconFav);

    let iconDownload = document.createElement('div');
    iconDownload.classList.add('icon_download', 'tamaño_actions_users');
    actionsUser.appendChild(iconDownload);

    let iconMax = document.createElement('div');
    iconMax.classList.add('icon_max', 'tamaño_actions_users');
    actionsUser.appendChild(iconMax);

    infoGif.appendChild(actionsUser);
    gifosTrending.appendChild(infoGif);
    searchResult.appendChild(gifosTrending);

}

searchBtn.addEventListener('click', ()=>{
    search(searchValue.value);
});
/* API Search */

