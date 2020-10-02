<template lang="pug">
div
  Header
  Banner
  CategoryList
  Alert
  ProductList
  DualPromo
  CallToAction
  
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

export default {
  name: "Home",
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