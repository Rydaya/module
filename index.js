//Делаем карусель для баннера
const banner = document.querySelector('.banner__image');
const bannerImg = banner.querySelector('img');
const bannerTitle = document.querySelector('.banner__title');
const bannerBtn = document.querySelector('.banner__btn');
const hystmodalShadow = document.querySelector('.hystmodal__shadow');
const popup = document.querySelector('.popup');

const sliderConfig = [
    {
        title: 'IPad Air',
        img: 'ipad_air_banner.jpg',
    },
    {
        title: 'AirPods Pro',
        img: 'airpods_pro_banner.png',
    },
    {
        title: 'Apple Watch 4',
        img: 'watch_banner.jpg',
        positionClass: 'banner__title_left',
        btnPositionClass: 'banner__btn_left',
    },
    {
        title: '',
        img: 'iphone_12_banner.jpg',
        colorClass: 'banner__title_black',
    },
    {
        title: 'MacBook Pro 16',
        img: 'mac_book_banner.jpg'
    },
    {
        title: 'Apple TV',
        img: 'apple_tv_banner.png',
        colorClass: 'banner__title_black',
        positionClass: 'banner__title_left',
        btnPositionClass: 'banner__btn_left',
    },
    {
        title: 'AirPods Max',
        img: 'air_pods_max_banner.jpg',
        colorClass: 'banner__title_black',
    },
];

function makeSwap() {
    sliderConfig.forEach((bannerInfo, currentIndex) => {
        setTimeout(() => {
            bannerImg.src = './img/banners/' + bannerInfo.img;
            bannerTitle.innerHTML = bannerInfo.title;
            bannerInfo.hasOwnProperty('colorClass') ? bannerTitle.classList.add(bannerInfo.colorClass) : bannerTitle.classList.remove('banner__title_black');
            bannerInfo.hasOwnProperty('positionClass') ? bannerTitle.classList.add(bannerInfo.positionClass) : bannerTitle.classList.remove('banner__title_left');
            bannerInfo.hasOwnProperty('btnPositionClass') ? bannerBtn.classList.add(bannerInfo.btnPositionClass) : bannerBtn.classList.remove('banner__btn_left');
        }, 3000 * currentIndex);
    });
}

makeSwap();
setInterval(makeSwap, 21000);


//Делаем карточки товара
import { items } from './items.js';
console.log(items);

const productsCards = document.querySelector('.products__cards');

for (let item of items) {
    const img = `./img/${item.imgUrl}`;
    const title = item.name;
    const reviewsValue = item.orderInfo.reviews > 100 ? '99' : item.orderInfo.reviews;
    const price = item.price;
    const inStock = item.orderInfo.inStock;

    //Создаем карточку товара
    const productsCard = document.createElement('div');
    productsCard.classList.add('products__card');
    productsCards.appendChild(productsCard);

    //Создаем верхнюю часть карточки
    const cardGoods = document.createElement('div');
    cardGoods.classList.add('card__goods');
    productsCard.appendChild(cardGoods);

    //Cоздаем картинку, указываем ссылку
    const goodsImg = document.createElement('img');
    goodsImg.classList.add('goods__img');
    goodsImg.src = img;
    cardGoods.appendChild(goodsImg);

    //Cоздаем заголовок товара
    const goodsTitle = document.createElement('p');
    goodsTitle.classList.add('goods__title');
    goodsTitle.classList.add('title');
    goodsTitle.innerText = title;
    cardGoods.appendChild(goodsTitle);

    //Cоздаем инфу наличия
    const goodsAvailability = document.createElement('div');
    goodsAvailability.classList.add('goods__availability');

    const goodsIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    goodsIcon.classList.add('goods__icon');
    goodsIcon.style.fill = 'none';
    goodsIcon.style.width = '20px';
    goodsIcon.style.height = '20px';
    goodsIcon.setAttribute('viewBox', '0 0 20 20');
    if (item.orderInfo.inStock <= 0) {
        goodsIcon.innerHTML = '<path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="#F05454"/>';
    } else {
        goodsIcon.innerHTML = '<circle cx="10" cy="10" r="9.5" stroke="#1BC943"/><path d="M8.62498 12.1063L6.01873 9.50002L5.13123 10.3813L8.62498 13.875L16.125 6.37502L15.2437 5.49377L8.62498 12.1063Z" fill="#1BC943"/>';
    }
    goodsAvailability.appendChild(goodsIcon);

    const goodsInStock = document.createElement('p');
    goodsInStock.classList.add('goods__InStock');
    goodsInStock.innerText = 'left in stock';

    const goodsInStockValue = document.createElement('span');
    goodsInStockValue.classList.add('bold');
    goodsInStockValue.innerText = `${inStock} `;
    goodsInStock.prepend(goodsInStockValue);

    goodsAvailability.appendChild(goodsInStock);
    cardGoods.appendChild(goodsAvailability);

    //Cоздаем инфу цены
    const goodsPrice = document.createElement('p');
    goodsPrice.classList.add('goods__price');
    goodsPrice.innerText = 'Price: ';

    const goodsPriceValue = document.createElement('span');
    goodsPriceValue.classList.add('goods__price_value');
    goodsPriceValue.classList.add('bold');
    goodsPriceValue.innerText = `${price} $`;
    goodsPrice.appendChild(goodsPriceValue);

    cardGoods.appendChild(goodsPrice);

    //Cоздаем кнопку
    const goodsBtn = document.createElement('button');
    goodsBtn.classList.add('btn');
    if (item.orderInfo.inStock <= 0) {
        goodsBtn.classList.add('btn_noactive');
    }
    goodsBtn.innerText = 'Add to card';

    cardGoods.appendChild(goodsBtn);

    //Создаем нижнюю часть карточки
    const cardReviews = document.createElement('div');
    cardReviews.classList.add('card__reviews');
    cardReviews.classList.add('reviews');
    productsCard.appendChild(cardReviews);

    //Добавляем иконку сердечка
    const reviewsLike = document.createElement('div');
    reviewsLike.classList.add('reviews__like');

    const reviewsLikeImg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    reviewsLikeImg.style.width = '20px';
    reviewsLikeImg.style.height = '20px';
    reviewsLikeImg.style.fill = 'none';
    reviewsLikeImg.setAttribute('viewBox', '0 0 20 20');
    reviewsLikeImg.innerHTML = '<path d="M9.99996 17.7917L8.79163 16.6917C4.49996 12.8 1.66663 10.2333 1.66663 7.08333C1.66663 4.51667 3.68329 2.5 6.24996 2.5C7.69996 2.5 9.09163 3.175 9.99996 4.24167C10.9083 3.175 12.3 2.5 13.75 2.5C16.3166 2.5 18.3333 4.51667 18.3333 7.08333C18.3333 10.2333 15.5 12.8 11.2083 16.7L9.99996 17.7917Z" fill="#F05454"/>';
    reviewsLike.appendChild(reviewsLikeImg);

    cardReviews.appendChild(reviewsLike);

    //Cоздаем инфу отзывы
    const reviewsText = document.createElement('p');
    reviewsText.classList.add('reviews__text');
    reviewsText.innerText = 'Positive reviews Above avarage';

    const reviewsTextValue = document.createElement('span');
    reviewsTextValue.classList.add('bold');
    reviewsTextValue.innerText = `${reviewsValue}% `;
    reviewsText.prepend(reviewsTextValue);

    cardReviews.appendChild(reviewsText);

    //Cоздаем инфу заказы
    const reviewsOrders = document.createElement('p');
    reviewsOrders.classList.add('reviews__orders');
    reviewsOrders.innerText = 'orders';

    const reviewsOrdersValue = document.createElement('span');
    reviewsOrdersValue.classList.add('reviews__orders_value');
    reviewsOrdersValue.classList.add('bold');
    reviewsOrdersValue.innerText = `---`;
    reviewsOrders.prepend(reviewsOrdersValue);

    cardReviews.appendChild(reviewsOrders);

    //Создаем и наполняем модальное окно

    let popupIsOpen = false;

    document.addEventListener('click', (e) => {
        if (e.composedPath().includes(productsCard) && !popupIsOpen) {
            popup.classList.add('popup__open');
            hystmodalShadow.classList.add('hystmodal__shadow_show');
            popupIsOpen = !popupIsOpen;

            //Добавляем фото модалки
            const popupImg = document.querySelector('.popup__img');
            popupImg.src = img;

            //Добавляем заголовок модалки
            const popupTitle = document.querySelector('.popup__title');
            popupTitle.innerHTML = title;

            //Добавляем процент заказов
            const popupTextValue = document.querySelector('.popup__text_value');
            popupTextValue.classList.add('bold');
            popupTextValue.innerText = `${reviewsValue}% `;

            //Добавляем количество заказов
            const popupOrdersValue = document.querySelector('.popup__orders_value');
            popupOrdersValue.classList.add('bold');
            popupOrdersValue.innerText = '---';

            //Добавляем свойства товаров
            const propСolor = document.querySelector('.prop__color');
            propСolor.innerText = item.color.join(' │ ');

            const propOs = document.querySelector('.prop__os');
            propOs.innerText = item.os;

            const propChip = document.querySelector('.prop__chip');
            propChip.innerText = item.chip.name;

            const propHeight = document.querySelector('.prop__height');
            propHeight.innerText = `${item.size.height} cm`;

            const propWidth = document.querySelector('.prop__width');
            propWidth.innerText = `${item.size.width} cm`;

            const propDepth = document.querySelector('.prop__depth');
            propDepth.innerText = `${item.size.depth} cm`;

            const propWeight = document.querySelector('.prop__weight');
            propWeight.innerText = `${item.size.weight * 1000} g`;

            //Добавляем цену
            const popupPrice = document.querySelector('.popup__price');
            popupPrice.innerText = '$ ' + price;

            //Добавляем oстаток
            const popupStockValue = document.querySelector('.popup__stock_value');
            popupStockValue.innerText = inStock;

        } else if (!e.composedPath().includes(popup) && popupIsOpen) {
            popup.classList.remove('popup__open');
            hystmodalShadow.classList.remove('hystmodal__shadow_show');
            popupIsOpen = !popupIsOpen;
        }
    })
}

// Логика открытия блоков фильтра
const ifPressed = {
    filterBtnPressed: false,
    priceOpen: false,
    colorOpen: false,
    memoryOpen: false,
    osOpen: false,
    displayOpen: false,
}

const searchBtnFilter = document.querySelector('.search__btn_filter');
const container = document.querySelector('.container');
const accordionFilter = document.querySelector('.accordion__filter');
const products = document.querySelector('.products');

searchBtnFilter.addEventListener('click', () => {
    if (!ifPressed.filterBtnPressed) {
        container.classList.add('containerFlex');
        products.classList.add('productsFilterOpened');
        accordionFilter.classList.remove('invisible');
        ifPressed.filterBtnPressed = true;
    } else {
        container.classList.remove('containerFlex');
        products.classList.remove('productsFilterOpened');
        accordionFilter.classList.add('invisible');
        ifPressed.filterBtnPressed = false;
    }
});

//Логика открытия чекбоксов
const filterHeader = Array.from(accordionFilter.querySelectorAll('.filter__header'));

function openFilter(header) {
    return header.addEventListener('click', () => {
        const parentElem = header.parentNode;
        const nextElem = header.nextElementSibling;
        if (nextElem.classList.contains('invisible')) {
            nextElem.classList.remove('invisible');
            header.classList.add('filter__header_open');
            parentElem.style.backgroundColor = '#fff';
        } else {
            nextElem.classList.add('invisible');
            header.classList.remove('filter__header_open');
            parentElem.style.backgroundColor = '#EDF3FF';
        }
    });
}

filterHeader.forEach(elem => {
    openFilter(elem);
});






