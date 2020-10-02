<template lang="pug">
  section#ProductList
    //- titulo
    h1(v-show="titleCenter") {{ title }}
    h1(v-show="titleLeft" class="desktop-only") {{ title }}

    //- LISTA DE PRODUTOS
    carousel(ref="carousel" :perPage="itemsPerPage" paginationColor="#77777750" @pageChange="setPageStatus")
      slide(v-for="(product, index) in json" @click="goToProduct(product.url)" class="slide")
        img(:src="require('../assets/products/' + product.image)" class="photo")

        p.name {{ product.name }}
        p.desc {{ product.desc }}

        p.payment Até #[strong.x {{ product.payment1 }}] de #[strong.value R$ {{ product.payment2 }}] {{ product.payment3 }}
        p.price R$ {{ product.price }}

        div.rating
          div.stars

          p.rating-number {{ product.rating }}

    div.carousel-btns
      button(@click.prevent="prevSlide" :class="[pageStatus == 'firstPage' ? 'btn-off' : 'btn-on' ]" ) 
        fa-icon(class="btn-prev" icon="angle-left")

      button(@click.prevent="nextSlide" :class="[pageStatus == 'lastPage' ? 'btn-off' : 'btn-on' ]" ) 
        fa-icon(class="btn-next" icon="angle-right")
        
</template>

<script>
export default {
  name: 'ProductList',
  props: ['json', 'itemsPerPage', 'title', 'titleCenter', 'titleLeft'],
  data: () => {
    return {
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
  }
}
</script>

<style lang="scss">
@import "../styles/variables.scss";

// GENERIC
#ProductList {
  h1 { color: $almost-black; }

  .slide {
    font-family: hind-siliguri, sans-serif;
    background-color: $white;
    box-shadow: 0px 0px 20px 0px #00000020;
    border-radius: 10px;
    transition: all .5s ease;

    &:hover {
      box-shadow: 0px 0px 10px 10px #00000020;
      cursor: pointer;
    }

    .desc {
      opacity: .5;
    }

    .payment {
      color: $grey;

      .x { color: $red; }
      .value { color: $black; }
    }

    .price {
      font-family: 'Baloo Tamma 2', cursive;
      background-color: $black;
      border-radius: 5px;
      color: $white;
    }
  }

  .carousel-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;

    button {
      background-color: transparent;  
    }

    .btn-prev, 
    .btn-next {
      color: $almost-black;

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

// MOBILE E TABLET
@media only screen and (max-width: 900px) {
  #ProductList {
    padding: 96px 0px 48px 0px;

    h1 { 
      text-align: center; 
    }

    .VueCarousel {
      width: 100vw;
      padding: 64px 0px 0px 0px;
      margin: 0px auto;
    }

    .slide {
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      margin: 15px;
      padding: 15px;

      max-width: calc(100vw / 3);

      .photo {
        width: 60%;
        margin: 24px auto;
      }

      .name,
      .desc,
      .payment {
        margin-left: 12px;
      }

      .desc {
        margin-bottom: 24px;
      }

      .price {
        display: inline-block;
        text-align: center;

        font-size: 22px;

        padding: 5px 10px 0px 10px;
        margin: 24px 0px 12px;
      }

      .rating {
        display: flex;
        justify-content: center;
      }
    }

    .carousel-btns {
      display: flex;
      justify-content: space-between;

      width: calc(100vw - 20vw);

      margin-top: -50px;
      padding: 0px 10vw 0px 10vw;

      .btn-prev, 
      .btn-next {
        font-size: 60px;
      }
    }
  }
}

// DESKTOP 
@media only screen and (min-width: 901px) {
  #ProductList {
    padding: 96px 0px 48px 0px;

    h1 { 
      // text-align: center; 
    }

    .VueCarousel {
      width: 80vw;
      padding: 64px 48px 0px 48px;
      margin: 0px auto;
    }

    .left { text-align: left; }

    .slide {
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      margin: 15px;
      padding: 15px;

      max-width: calc(100vw / 11);

      .photo {
        width: 60%;
        margin: 24px auto;
      }

      .name,
      .desc,
      .payment {
        margin-left: 12px;
      }

      .desc {
        margin-bottom: 24px;
      }

      .price {
        display: inline-block;
        text-align: center;

        font-size: 22px;

        padding: 5px 10px 0px 10px;
        margin: 24px 0px 12px;
      }

      .rating {
        display: flex;
        justify-content: center;
      }
    }

    .carousel-btns {
      width: 90vw;
      margin: -200px 5vw 0px 5vw;

      .btn-prev, 
      .btn-next {
        font-size: 60px;
      }
    }
  }
}

</style>