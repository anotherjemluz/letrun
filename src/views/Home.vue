<template lang="pug">
div
  Header
  Banner
  CategoryList
  Alert

  //- NIKE PRODUCTS
  ProductList.desktop-only(:json="nikeData" :itemsPerPage="6" title="SÓ QUEM GOSTA DE NIKE" titleAlign="center")
  ProductList.mobile-only(:json="nikeData" :itemsPerPage="2" title="SÓ QUEM GOSTA DE NIKE" titleAlign="center")

  DualPromo
  CallToAction

  //- FRIENDS PRODUCTS
  ProductList.desktop-only(:json="friendData" :itemsPerPage="6" title="PARA CORRER COM SEUS AMIGOS" titleAlign="left")
  ProductList.mobile-only(:json="friendData" :itemsPerPage="2" title="PARA CORRER COM SEUS AMIGOS" titleAlign="left")

  //- SOCIAL PRODUCTS
  ProductList.desktop-only(:json="socialData" :itemsPerPage="6" title="PARA SOCIALIZAR SEM MEDO" titleAlign="left")
  ProductList.mobile-only(:json="socialData" :itemsPerPage="2" title="PARA SOCIALIZAR SEM MEDO" titleAlign="left")
  
</template>

<script>
import Header from "../components/Header";
import Banner from "../components/Banner";
import CategoryList from "../components/CategoryList";
import Alert from "../components/Alert";
import ProductList from "../components/ProductList";
import DualPromo from "../components/DualPromo";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

import Json from '../../data.json'

export default {
  name: "Home",
  data: () => {
    return {
      nikeData: Json.nikeList,
      friendData: Json.friendList,
      socialData: Json.socialList
    }
  },
  components: {
    Header,
    Banner,
    CategoryList,
    Alert,
    ProductList,
    DualPromo,
    CallToAction,
    Footer,
  },
};
</script>

<style>
</style>