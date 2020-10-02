<template lang="pug">
  section#ProductList
    //- titulo
    h1 SÓ QUEM GOSTA DE NIKE

    //- #[fa-icon.mail-icon(icon="paper-plane")]

    //- LISTA DE PRODUTOS
    carousel(ref="carousel" :perPage="4" paginationColor="#777777" @pageChange="setPageStatus")
      slide(v-for="(product, index) in json" @click="goToProduct(product.url)")
        img(:src="require('../assets/nikes/' + product.image)")

        p.name {{ product.name }}
        p.desc {{ product.desc }}

        p.payment {{ product.payment }}
        p.price {{ product.price }}

        div.rating
          div.stars

          p.rating-number
      
    div.carousel-btns
      button(@click.prevent="prevSlide" :class="[pageStatus == 'firstPage' ? 'btn-off' : 'btn-on' ]" ) 
        fa-icon(class="btn-prev" icon="angle-left")

      button(@click.prevent="nextSlide" :class="[pageStatus == 'lastPage' ? 'btn-off' : 'btn-on' ]" ) 
        fa-icon(class="btn-next" icon="angle-right")
        

</template>

<script>
import { nikeList } from '../../data.json'

export default {
  name: 'ProductList',
  data: () => {
    return {
      json: nikeList,
      pageStatus: 'firstPage'
    }
  },
  methods: {
    setPageStatus() {
      if (this.$refs.carousel.currentPage == 0) { 
        this.pageStatus = 'firstPage';
      } 
      
      if (this.$refs.carousel.currentPage == (this.$refs.carousel.slideCount/this.$refs.carousel.perPage) - 1) {
        this.pageStatus =  'lastPage';
      } 
    },
    nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    prevSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    },
    goToProduct(url) {
      this.$router.push({ name: url }) 
    }
  },
  updated() {
    this.pageStatus()
  }
}
</script>

<style lang="scss">
@import "../styles/variables.scss";

// GENERIC
#ProductList {
  h1 { color: $almost-black; }
}

// MOBILE E TABLET
@media only screen and (max-width: 900px) {

}

// DESKTOP 
@media only screen and (min-width: 901px) {
  #ProductList {
    padding: 72px 0px;

    h1 { 
      text-align: center; 
    }

    .VueCarousel {
      width: 80vw;
      padding: 30px 48px;
      margin: 0px auto;
    }

    .carousel-btns {
      background-color: transparent;

      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;

      margin: 0px auto;

      .btn-prev, 
      .btn-next {
        color: $almost-black;

        font-size: 60px;

        &:hover {
          cursor: pointer;
        }
      }

      .btn-on {
        opacity: 1;
      }

      .btn-off {
        opacity: .3;
      }

    }

  }
}

</style>