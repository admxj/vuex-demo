import * as types from './mutation-type'

export const addProductToCard = ({commit, state}, product) => {
    const cartItem = state.cartList.find(item => item.id === product.id);
    if (cartItem) {
        commit(types.INCREMENT_PRODUCT_TO_CARD, product);
    } else {
        commit(types.PUSH_PRODUCT_TO_CARD, product);
    }
};

export const removeProductToCard = ({commit, state}, product) => {
    const cartItem = state.cartList.find(item => item.id === product.id);
    if (cartItem) {
        if (cartItem.quantity === 1) {
            commit(types.DELETE_PRODUCT_TO_CARD, product);
        } else {
            commit(types.DECREMENT_PRODUCT_TO_CARD, product);
        }

    }
};

export const deleteProductToCard = ({commit}, product) => {
    commit(types.DELETE_PRODUCT_TO_CARD, product);
};
