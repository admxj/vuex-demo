import * as types from './mutation-type'

const mutations = {
    [types.PUSH_PRODUCT_TO_CARD](state, product) {
        state.cartList.push({
            id: product.id,
            title: product.title,
            price: product.price,
            img: product.img,
            quantity: 1,
        })
    },
    [types.INCREMENT_PRODUCT_TO_CARD](state, product) {
        const cartItem = state.cartList.find(item => item.id === product.id)
        cartItem.quantity++;
    },
    [types.DELETE_PRODUCT_TO_CARD](state, product) {
        state.cartList = state.cartList.filter(item => item.id !== product.id);
    },
    [types.DECREMENT_PRODUCT_TO_CARD](state, product) {
        const cartItem = state.cartList.find(item => item.id === product.id);
        cartItem.quantity--;
    }
}


export default mutations;
