# vue-demo

## Install Dependency

```
yarn add vuex
```

### Register vuex

```
import Vuex from 'vuex'
Vue.use(Vuex)
```

### Add Code Block To main.js

```
import store from './store'
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
```

### Create Vuex.Store

```
import state from './state'
import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

```

### Create `state` `getters` `mutations` `actions`

* state

```
let state = {
    cartList: []
}
export default state
```

* getters

```
export const cartList = function (state) {
    return state.cartList
};
```

* mutations

```
import * as types from './mutation-type'

const mutations = {
    [types.DECREMENT_PRODUCT_TO_CARD](state, product) {
        const cartItem = state.cartList.find(item => item.id === product.id);
        cartItem.quantity--;
    }
}
export default mutations;
```

* actions

```
import * as types from './mutation-type'

export const deleteProductToCard = ({commit}, product) => {
    commit(types.DELETE_PRODUCT_TO_CARD, product);
};
```

### Customize configuration

See [Configuration Reference](https://vuex.vuejs.org/zh/).
