// import * as types from './../constants/ActionTypes';
var initialState = [
    {
        id: 1,
        name: 'Iphone 7',
        image: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1364485939.png',
        description: 'Sản phẩm do apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Sam sung',
        image: 'https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-a51_3.jpg',
        description: 'Sản phẩm do samsung sản xuất',
        price: 300,
        inventory: 55,
        rating: 5
    },
    {
        id: 3,
        name: 'Xaomi',
        image: 'https://cdn.tgdd.vn/Products/Images/42/220851/xiaomi-mi-note-10-lite-trang-600x600-600x600.jpg',
        description: 'Sản phẩm do xaomi sản xuất',
        price: 100,
        inventory: 200,
        rating: 3
    }
];

const products = (state= initialState, action) => {
    switch (action.type) {
    
        default:
            return [...state];
    }
}

export default products;