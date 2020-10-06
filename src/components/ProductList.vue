<template lang="pug">
  section#ProductList
    //- titulo
    h1.mobile-only {{ title }}

    h1(v-show="titleCenter" class="desktop-only h1-center") {{ title }}
    h1(v-show="titleLeft" class="desktop-only h1-left") {{ title }}

    //- LISTA DE PRODUTOS
    carousel(ref="carousel" :perPage="itemsPerPage" paginationColor="#77777750" @pageChange="setPageStatus" )
      slide(v-for="(product, index) in json" class="slide" :id="product.id" @click="openModal()")
        img(:src="require('../assets/products/' + product.image)" class="photo")

        p.name {{ product.name }}
        p.desc {{ product.desc }}

        p.payment Até #[strong.x {{ product.payment1 }}] de #[strong.value R$ {{ product.payment2 }}] {{ product.payment3 }}
        p.price R$ {{ product.price }}

        div.rating
          div.stars
            fa-icon(class="star-icon" icon="star")
            fa-icon(class="star-icon" icon="star")
            fa-icon(class="star-icon" icon="star")
            fa-icon(class="star-icon" icon="star")
            fa-icon(class="star-icon" icon="star-half")
            
          p.rating-number {{ product.rating }}

    //- CAROUSEL BUTTONS
    div.carousel-btns
      button(@click.prevent="prevSlide" :class="[pageStatus == 'firstPage' ? 'btn-off' : 'btn-on' ]" ) 
        fa-icon(class="btn-prev" icon="angle-left")

      button(@click.prevent="nextSlide" :class="[pageStatus == 'lastPage' ? 'btn-off' : 'btn-on' ]" ) 
        fa-icon(class="btn-next" icon="angle-right")

    //- PRODUCT MODALS
    div.modal(v-for="(product, index) in json" :id="'modal-'+ product.id" v-show="showModal === `modal-${product.id}`")
      section.image-and-options
        img(:src="require('../assets/products/' + product.image)" class="photo")

      section.details
        div.name-desc
          p.name {{ product.name }}
          p.desc {{ product.desc }}

        div.price-many
          div.first-row
            p.price PREÇO
            p.quantity QUANTIDADE

          div.second-row
            h1 R$ {{ product.price }}

            div.set-quantity
              fa-icon(class="btn-next" icon="angle-right")
              p {{ quantity }}
              fa-icon(class="btn-next" icon="angle-right")

        div.longDesc
          p {{ product.longDesc }}

        div.add-to-cart
          div.total
            p Valor total
            h3 {{ product.price * quantity }}

          button.add-btn #[fa-icon(class="btn-next" icon="angle-right")] Adicionar ao carrinho
        
</template>

<script>
export default {
  name: 'ProductList',
  props: ['json', 'itemsPerPage', 'title', 'titleCenter', 'titleLeft'],
  data: () => {
    return {
      pageStatus: 'firstPage',
      quantity: 1,
      showModal: ''
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
    },
    openModal() {
      let id = event.path[10].activeElement.attributes.id.value
      this.showModal = `modal-${id}`
    },
  },
  created() {
    document.addEventListener("click", this.openModal)
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

    &:hover,
    &:focus {
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

    .rating {
      display: flex;
      justify-content: center;
      align-items: center;

      .stars {
        .star-icon {
          color: $red;
        }
      }

      .rating-number {
        color: $grey;
        opacity: .8;
      }
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

      &:hover,
      &:focus {
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

  .modal {

  }
}

// MOBILE E TABLET
@media only screen and (max-width: 900px) {
  #ProductList {
    padding: 72px 0px 48px 0px;

    h1 { 
      text-align: center; 
      padding: 0px 36px;
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
      padding: 0px 15px 10px;

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

      .payment {
        font-size: .9rem;
      }

      .price {
        display: inline-block;
        text-align: center;

        font-size: 1rem;

        padding: 5px 10px 0px 10px;
        margin: 24px 0px 12px;
      }

      .rating {
        display: flex;
        justify-content: center;
        align-items: center;

        .stars {
          margin-right: 6px;
          .star-icon {
            color: $red;
            font-size: 12px;
          }
        }

        .rating-number {
          color: $grey;
          font-size: 14px;
        }
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
@media only screen and (min-width: 901px) and (max-width: 1599px) {
  #ProductList {
    padding: 96px 0px 48px 0px;

    .h1-center { text-align: center; }
    .h1-left { 
      text-align: left; 
      padding-left: 200px;
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
        .stars {
          margin-right: 6px;
          .star-icon {
            font-size: 12px;
          }
        }

        .rating-number {
          font-size: 14px;
        }
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

// FIX COLUMN 
@media only screen and (min-width: 1600px) {
  #ProductList {
    padding: 96px 0px 48px 0px;

    .h1-center { text-align: center; }
    .h1-left { 
      width: 1600px;
      text-align: left; 
      padding-left: calc(((100vw - 1600px) / 2) + 200px );
    }

    .VueCarousel {
      max-width: calc(1600px * 0.8);
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

      max-width: calc(100% / 10);

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

        font-size: 1.3rem;

        padding: 5px 10px 0px 10px;
        margin: 24px 0px 12px;
      }

      .rating {
        .stars {
          margin-right: 6px;
          .star-icon {
            font-size: 12px;
          }
        }

        .rating-number {
          font-size: 14px;
        }
      }
    }

    .carousel-btns {
      width: calc(1600px * 0.9);
      margin: -200px calc((100vw - (1600px * 0.9)) / 2) 0px calc((100vw - (1600px * 0.9)) / 2);

      .btn-prev, 
      .btn-next {
        font-size: 60px;
      }
    }
  }
}

</style>