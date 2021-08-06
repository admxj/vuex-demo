<template>
  <div class="content">
    <div class="productList">
      <div class="product" v-for="product in products" :key="product.id">
        <div class=product-img>
          <img :src="product.img" alt="">
        </div>
        <div class="price">
          <span>￥{{ product.price }}</span>
        </div>
        <div class="title">
          <span>{{ product.title }}</span>
        </div>
        <div class="evaluate">
          <span class="evaluate-count">{{ product.evaluate }}</span>条评价
        </div>
        <div class="store">
          <span>{{ product.store }}</span>
          <b></b>
        </div>
        <div class="action">
          <button class="btn compare">对比</button>
          <button class="btn watch">关注</button>
          <button class="btn add-cart" @click="addProductToCard(product)">加入购物车</button>
        </div>
      </div>
    </div>
    <div class="cart-list">
      <div v-for="cart in cartList" class="cart" :key="cart.id">
        <div class="cart-img">
          <img :src="cart.img" alt=""/>
        </div>
        <div class="cart-title">
          <span>希捷(SEAGATE)监控级硬盘 酷鹰系列1T/2T/3T/4T/6T/8T/10T/12T/14T</span></div>
        <div class="cart-action">
          <div class="cart-price-info">
            <div class="cart-price">￥{{ cart.price }}</div>
            <span> x </span>
            <div class="cart-count">
              <button class="cart-count-increment" @click="removeProductToCard(cart)">-</button>
              <input type="text" :value="cart.quantity">
              <button class="cart-count-decrement" @click="addProductToCard(cart)">+</button>
            </div>
          </div>
          <div class="cart-delete">
            <button @click="deleteProductToCard(cart)">删除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productData from "@/data/product";

import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'CartList',
  props: {},
  data() {
    return {
      products: productData,
    }
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  methods: {
    // ...mapActions({
    //   pushProductToCard: 'PUSH_PRODUCT_TO_CARD'
    // }),
    ...mapActions(['addProductToCard', 'removeProductToCard', 'deleteProductToCard']),
    // addCart(product) {
    //   this.pushProductToCard(product)
    //   console.log("addCart")
    // },
    deleteCart() {
      console.log("deleteCart")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.productList {
  margin: 3px;
  display: flex;
  flex-direction: row;
}

.product {
  width: 240px;
  height: 400px;
  padding: 6px;
  border: 1px #ccc solid;
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
}

.product-img {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
}

.price {
  color: #e4393c;
  font-size: 20px;
  display: flex;
  font-weight: 1000;
  margin-bottom: 6px;
}

.title {
  display: flex;
  flex-direction: row;
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
}

.evaluate {
  margin-bottom: 4px;
  font-size: 12px;
}

.evaluate-count {
  color: #646fb0;
  font-family: verdana, serif;
  font-weight: 700;
}

.store {
  font-size: 12px;
  color: #999;
  display: flex;
  margin-bottom: 10px;
}

.store > b {
  margin-left: 4px;
  width: 16px;
  height: 16px;
  display: block;
  background: url(//img14.360buyimg.com/uba/jfs/t26764/156/1205787445/713/9f715eaa/5bc4255bN0776eea6.png) no-repeat;
}

.action {
  display: flex;
}

.btn {
  background: #fff;
  border: 1px #999 solid;
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: 12px;
  color: #999;
}

.btn:hover {
  border: 1px #D9483C solid;
  color: #D9483C;
  cursor: pointer;
}

.compare {
  width: 30%;
}

.watch {
  width: 30%;
}

.add-cart {
  width: 40%;
}

.cart-list {
  width: 430px;
}

.cart {
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px #999999 solid;
}

.cart > .cart-img {
  width: 60px;
  height: 60px;
}

.cart > .cart-img > img {
  width: 100%;
}

.cart > .cart-title {
  font-size: 12px;
  color: #666;
  width: 200px;
  display: flex;
  align-items: center;
}

.cart-action {
  width: 150px;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
}

.cart-price-info{
  height: 26px;
  display: flex;
  flex-direction: row;
  padding: 3px;
}

.cart-price{
  color: #e4393c; font-weight: 700
}

.cart-count{
  display: flex;
  flex-direction: row;
  height: 100%;
}

.cart-count > input {
  width: 20px;
  display: block;
}

.cart-count-increment, .cart-count-decrement{
  width: 26px;
  height: 26px;
  padding: 1px 8px;
  font-weight: 700;
  background: none;
  border: #999999 1px solid;
}

.cart-delete {
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.cart-delete > button {
  width: 50px;
  height: 20px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  background-color: #f5ecec;
  box-shadow: 2px 2px 4px #ece5e5;
  border-radius: 4px;
}

.cart-delete > button:hover {
  cursor: pointer;
}
</style>
