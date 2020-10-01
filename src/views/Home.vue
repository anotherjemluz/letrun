<template lang="pug">
  div
    Header
    Banner
    CategoryList
    Alert
    CallToAction

</template>

<script>
import Header from '../components/Header'
import Banner from '../components/Banner'
import CategoryList from '../components/CategoryList'
import Alert from '../components/Alert'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components: { Header, Banner, CategoryList, Alert, CallToAction, Footer }
}
</script>

<style>

</style>