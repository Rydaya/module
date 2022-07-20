//Делаем карусель для баннера
const banner = document.querySelector('.banner__image');
const bannerImg = banner.querySelector('img');
const bannerTitle = document.querySelector('.banner__title');
const bannerBtn = document.querySelector('.banner__btn');

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
    goodsImg.src = `./img/${item.imgUrl}`;
    cardGoods.appendChild(goodsImg);

    //Cоздаем заголовок товара
    const goodsTitle = document.createElement('p');
    goodsTitle.classList.add('goods__title');
    goodsTitle.innerText = item.name;
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
    goodsInStockValue.innerText = `${item.orderInfo.inStock} `;
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
    goodsPriceValue.innerText = `${item.price} $`;
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
    reviewsTextValue.classList.add('reviews__text_value');
    reviewsTextValue.classList.add('bold');
    const reviewsValue = item.orderInfo.reviews > 100 ? '99' : item.orderInfo.reviews;
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
}






