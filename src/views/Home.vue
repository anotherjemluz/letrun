<template lang="pug">
  div
    Header
    Banner
    CategoryList
    Alert
    
</template>

<script>
import Header from '../components/Header'
import Banner from '../components/Banner'
import CategoryList from '../components/CategoryList'
import Alert from '../components/Alert'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components: { Header, Banner, CategoryList, Alert, Footer }
}
</script>

<style>

</style>