'use strict'
const searchGifoFlex = document.querySelector('.search_gifos_flex');
const no_favorites = document.querySelector('.no_favorites');
const myGif = JSON.parse(localStorage.getItem('misGifosCreados')) || [];

const createDomMyGif = () =>{
    myGif.map(elementos => {
        const divContainerMyGifos = document.createElement('div');
        divContainerMyGifos.classList.add('gifos_trending');
        //divContainerMyGifos.style.backgroundImage = `url("${elementos.images.original.url}")`;

        const divInfoMyGif = document.createElement('div');
        divInfoMyGif.classList.add('info_gif');

        const actionsUserMyGif = document.createElement('div');
        actionsUserMyGif.classList.add('actions_users');


        const trashMyGif = document.createElement('div');
        trashMyGif.classList.add('icon_trash', 'tamaño_actions_users');
        actionsUserMyGif.appendChild(trashMyGif);

        const downloadMyGif = document.createElement('div');
        downloadMyGif.classList.add('icon_download', 'tamaño_actions_users');
        actionsUserMyGif.appendChild(downloadMyGif);

        const maxMyGif = document.createElement('div');
        maxMyGif.classList.add('icon_max', 'tamaño_actions_users');
        actionsUserMyGif.appendChild(maxMyGif);
        
        divInfoMyGif.appendChild(actionsUserMyGif);


        const containerTitleGifosMy = document.createElement('div');
        containerTitleGifosMy.classList.add('container_title_gifos_card');

        const pGifosCardMy = document.createElement('div');
        pGifosCardMy.classList.add('p_gifos_card');
        pGifosCardMy.textContent = elementos.username;
        containerTitleGifosMy.appendChild(pGifosCardMy);
        
        const titleMyGifos = document.createElement('div');
        titleMyGifos.classList.add('title_gifos_card');
        titleMyGifos.textContent = elementos.title;
        containerTitleGifosMy.appendChild(titleMyGifos);

        divContainerMyGifos.appendChild(divInfoMyGif);
        divContainerMyGifos.appendChild(containerTitleGifosMy);
        searchGifoFlex.appendChild(divContainerMyGifos);
        console.log(elementos);

    });
}
createDomMyGif();