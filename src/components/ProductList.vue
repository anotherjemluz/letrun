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
      div.white-space
        section.image-and-options
          img(:src="require('../assets/products/' + product.image)" class="photo")

          div.colors
            div.red
            div.blue
            div.orange
            div.grey.active

        section.details
          div.name-desc
            h1 {{ product.name }}
            p {{ product.desc }}

          div.price-many
            div.first-column
              p PREÇO
              h1 R$ {{ product.price }}

            div.second-column
              p QUANTIDADE

              div.set-quantity
                fa-icon(class="remove-qnt" icon="minus" @click="quantity--")
                h1 {{ quantity }}
                fa-icon(class="add-qnt" icon="plus" @click="quantity++")

          div.longDesc
            p {{ product.longDesc }}

          div.add-to-cart
            div.total
              p Valor total
              h3 R$ {{ (product.price * quantity).toFixed(2) }}

            button.add-btn(@click="addToCart()") #[fa-icon(class="add-cart-icon" icon="shopping-cart")] Adicionar ao carrinho
          
      button.close(@click="showModal = ''") #[fa-icon(class="close-icon" icon="times")]
</template>

<script>
import { mapState } from 'vuex'

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
    addToCart() {
      this.$store.commit("addToCart");
    }
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    z-index: 999;
    background-color: #00000050;
    position: fixed;
    top: 0%;
    left: 0%;

    height: 100vh;
    width: 100vw;

    .white-space {
      display: flex;
      border-radius: 20px;
      box-shadow: 0px 0px 40px 10px #00000020;
      background-color: $white;

      .image-and-options {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .colors {
          display: flex;

          div {
            border-radius: 20px;
            opacity: .2;

            &:hover {
              cursor: pointer;
              opacity: 1;
            }
          }

          .active {
            opacity: 1;
          }

          .red { background-color: $red; }
          .blue { background-color: blue; }
          .orange { background-color: orangered; }
          .grey { background-color: $grey; }
        }
      }

      .details {
        display: flex;
        flex-direction: column;

        .name-desc {
          p { opacity: .7; }
        }

        .price-many {
          display: flex;

          .first-column,
          .second-column {
            display: flex;
            flex-direction: column;

            p {
              font-family: hind-siliguri, sans-serif;
              opacity: .4;
            }
          }

          .first-column {
            h1 { font-family: 'Baloo Tamma 2', cursive; }
          }

          .second-column {
            .set-quantity {
              display: flex;
              justify-content: center;
              align-items: center;

              h1 {
                font-family: 'Baloo Tamma 2', cursive;
                opacity: .8;
              }

              .remove-qnt,
              .add-qnt {
                color: $grey;

                &:hover {
                  cursor: pointer;
                  color: $red;
                }
              }
            }
          }
        }

        .longDesc {
          font-family: hind-siliguri, sans-serif;
          opacity: .4;
        }

        .add-to-cart {
          display: flex;

          .total {
            h3 { 
              font-family: 'Baloo Tamma 2', cursive;
              color: $red; 
            }
          }

          .add-btn {
            font-family: 'Baloo Tamma 2', cursive;
            background-color: $red;
            border-radius: 10px;
            color: $white;

            &:hover {
              cursor: pointer;
              background-color: $black;
            }
          }
        }
      }
    }

    .close {
      background-color: $black;
      color: $white;
      border-radius: 20px;
      transition: all .5s ease;
      box-shadow: 0px 0px 0px 0px #00000000;

      height: 40px;
      width: 40px;

      margin-top: 24px;

      &:hover {
        cursor: pointer;
        background-color: $red;
        box-shadow: 0px 0px 20px 10px #FD2C2750;

      }
    }
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

    .modal {
      .white-space {
        max-height: 65vh;
        width: calc(90vw - 48px);
        padding: 24px;

        overflow-y: scroll;

        flex-direction: column;

        border-radius: 20px ;
        
        .image-and-options {   
          margin-bottom: 48px;

          .photo {
            width: 100%;
            height: 100%;
          }

          .colors {
            display: flex;

            div {
              height: 20px;
              width: 20px;

              margin: 0px 10px;
            }
          }
        }

        .details {
          .name-desc {
            margin-bottom: 48px;
            text-align: center;

            h1 { 
              font-size: 1.8rem; 
              padding: 0px;
            }
          }

          .price-many {
            justify-content: space-between;
            margin: 0px 12px 24px 12px;

            .first-column {

              h1 { 
                font-size: 1.5rem; 
                padding: 0px;
              }
            }

            .second-column {
              .set-quantity {
                h1 {
                  font-size: 1.5rem;
                }
              }
            }
          }

          .longDesc {
            margin: 0px 12px 24px 12px ;
            font-size: 12px;
          }

          .add-to-cart {
            flex-direction: column;
            align-items: center;
            margin: 0px 12px;

            .total {
              text-align: center;
              margin-bottom: 24px;
              p { opacity: .6; }
              h3 { 
                font-size: 1.5rem;
              }
            }

            .add-btn {
              // height: 56px;
              padding: 20px 30px;
              font-size: 1rem;
            }
          }
        }
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

    .modal {
      .white-space {
        width: 70vw;
        max-width: 700px;

        padding: 64px;

        .image-and-options {
          margin-right: 48px;
          .photo {
            width: 200px;
            height: 200px;
          }

          .colors {
            display: flex;

            div {
              height: 20px;
              width: 20px;

              margin: 0px 10px;
            }
          }
        }

        .details {
          .name-desc {
            margin-bottom: 48px;

            h1 { font-size: 2.5rem; }
          }

          .price-many {
            margin-bottom: 24px;

            .first-column {
              margin-right: 64px;

              h1 { font-size: 1.5rem; }
            }

            .second-column {
              .set-quantity {
                h1 {
                  font-size: 1.5rem;
                  margin: 0px 24px;
                }
              }
            }
          }

          .longDesc {
            margin-bottom: 48px;
            // max-width: 85%;
          }

          .add-to-cart {
            .total {
              margin-right: 48px;

              h3 { 
                font-size: 1.5rem;
              }
            }

            .add-btn {
              height: 56px;
              padding: 5px 30px;
              font-size: 1rem;
            }
          }
        }
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

    .modal {
      .white-space {
        width: 800px;
        // height: 500px;

        padding: 64px;

        .image-and-options {
          margin-right: 48px;
          .photo {
            width: 300px;
            height: 300px;
          }

          .colors {
            display: flex;

            div {
              height: 20px;
              width: 20px;

              margin: 0px 10px;
            }
          }
        }

        .details {
          .name-desc {
            margin-bottom: 48px;

            h1 { font-size: 2.5rem; }
          }

          .price-many {
            margin-bottom: 24px;

            .first-column {
              margin-right: 64px;

              h1 { font-size: 1.5rem; }
            }

            .second-column {
              .set-quantity {
                h1 {
                  font-size: 1.5rem;
                  margin: 0px 24px;
                }
              }
            }
          }

          .longDesc {
            margin-bottom: 48px;
            max-width: 85%;
          }

          .add-to-cart {
            .total {
              margin-right: 48px;

              h3 { 
                font-size: 1.5rem;
              }
            }

            .add-btn {
              height: 56px;
              padding: 5px 30px;
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>