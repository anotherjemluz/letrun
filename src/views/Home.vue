<template lang="pug">
  div
    Header
    Banner
    CategoryList
</template>

<script>
import Header from '../components/Header'
import Banner from '../components/Banner'
import CategoryList from '../components/CategoryList'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components: { Header, Banner, CategoryList, Footer }
}
</script>

<style>

</style>