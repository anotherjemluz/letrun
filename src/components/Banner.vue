<template lang="pug">
  section#banner
    agile(ref="slider" :fade="true" :navButtons="false" :autoplay="true" :speed="1000" :dots="true")
      div.slide
        div.first-banner
          div.text
            h1 Você com tudo!
            h4 Sapatênis Polowear

          div.desktop-only.promo
            h1 Lançamento
            h1 2020

          img.marca-dagua(src="@/assets/marca-dagua.png")

      div.slide
        div.second-banner
          div.text
            h1 Você com tudo!
            h4 Sapatênis Polowear

          div.desktop-only.promo
            h1 Lançamento
            h1 2020

          img.marca-dagua(src="@/assets/marca-dagua.png")

    div.slide-btn
      button.btn-prev-slide(@click="$refs.slider.goToNext()") #[fa-icon(class="slide-btn-icon" icon="angle-left")]
      button.btn-next-slide(@click="$refs.slider.goToPrev()") #[fa-icon(class="slide-btn-icon" icon="angle-right")]

    img.mobile-only.hr-mob(src="@/assets/hr-mob.png")
    img.desktop-only.hr(src="@/assets/hr.png")

</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="scss">
@import "../styles/variables.scss";

// GENERIC
#banner {
  .first-banner {
    background-image: url('../assets/banners/main-banner.jpg');
  }

  .second-banner {
    background-image: url('../assets/banners/main-banner-yellow.jpg');
  }

  .first-banner,
  .second-banner {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 60%;

    .text {
      color: $white;
      h4 { opacity: .8; }
    }

    .promo {
      position: absolute;
      border-radius: 10px;
      background-color: $white;
      color: $almost-black;
    }

    .marca-dagua {
      position: absolute;
      opacity: .6;
    }
  }

  .second-banner {
    .text {
      color: $almost-black;
    }
  }

  .agile__actions {
    ul {
      li {
        button {
          background-color: transparent;
          border-radius: 10px;
          border: 3px solid $almost-black;
        }
      }

      .agile__dot--current button {
        background-color: $almost-black;
      }
    }
  }

  .slide-btn {
    display: flex;
    justify-content: space-between;
    position: relative;

    .btn-prev-slide,
    .btn-next-slide {
      background-color: transparent;
      color: $almost-black;

      &:hover,
      &:focus {
        cursor: pointer;
      }
    }
  }
}

// MOBILE E TABLET
@media only screen and (max-width: 900px) {
  #banner {
    .first-banner,
    .second-banner {
      text-align: center;

      width: 100vw;
      height: 50vh;
      
      .text {
        padding-top: 30px;
      }

      .marca-dagua {
        height: 30px;

        bottom: 15px;
        right: 20px;
      }
    }

    .agile__actions {
      padding: 20px 0px 20px 0px;

      ul {
        margin-top: 20px;
        li {
          margin: 0px 5px;
          button {
            height: 16px;
            width: 16px;
          }
        }
      }
    }

    .slide-btn {
      display: flex;
      justify-content: space-between;
      position: relative;

      top: -40px;

      margin: 0px 40px;
      .btn-prev-slide,
      .btn-next-slide {
        background-color: transparent;

        font-size: 25px;

        height: 20px;
        width: 20px;
      }
    }

    .hr-mob {
      display: flex;
      margin: 10px auto;
      opacity: .6;
    }
  }
}

// AJUSTE BANNER
@media only screen and (min-width: 700px) and (max-width: 900px) {
  #banner {
    .second-banner {
      .text {
        position: absolute;
        top: 30%;
        left: 40px;
      }
    }
  }
}

// DESKTOP
@media only screen and (min-width: 901px) and (max-width: 1599px)  {
  #banner {
    // max-width: 1200px;
    
    .agile {
      // width: 80%;
      position: relative;
      margin: 0px auto;
    }

    .first-banner,
    .second-banner {
      box-shadow: 0px 10px 40px 0px #00000050;
      border-radius: 15px;

      height: 60vh;
      width: calc(100vw - 60px);

      margin: 30px auto 50px auto;

      .text {
        position: absolute;
        top: 40%;
        left: 80px;

        font-size: 2rem;
      }

      .promo {
        position: absolute;
        display: inline-block;

        text-align: right;

        top: 60px;
        right: 50px;

        padding: 10px 20px;

        font-size: 1.5rem;
      }

      .marca-dagua {
        height: 30px;

        bottom: 70px;
        right: 50px;
      }
    }

    .agile__actions {
      padding: 20px 0px 20px 0px;

      ul {
        position: absolute;
        bottom: 20px;

        li {
          margin: 0px 5px;
          button {
            height: 16px;
            width: 16px;
          }
        }
      }
    }

    .slide-btn {
      display: flex;
      justify-content: space-between;
      position: relative;

      bottom: 40px;

      margin: 0px 42vw;

      .btn-prev-slide,
      .btn-next-slide {
        background-color: transparent;

        font-size: 25px;

        height: 20px;
        width: 20px;
      }
    }

    .hr {
      display: flex;
      margin: 0px auto;
    }
  }
}

// FIX XOLUMN
@media only screen and (min-width: 1600px) {
  #banner {
    .agile {
      max-width: 1620px;
      position: relative;
      margin: 0px auto;
    }

    .first-banner,
    .second-banner {
      box-shadow: 0px 10px 40px 0px #00000050;
      border-radius: 15px;

      height: 60vh;
      width: calc(1600px - 40px);

      margin: 30px 30px 50px 30px;

      .text {
        position: absolute;
        top: 40%;
        left: 80px;

        font-size: 2rem;
      }

      .promo {
        position: absolute;
        display: inline-block;

        text-align: right;

        top: 60px;
        right: 50px;

        padding: 10px 20px;

        font-size: 1.5rem;
      }

      .marca-dagua {
        height: 30px;

        bottom: 70px;
        right: 50px;
      }
    }

    .agile__actions {
      padding: 20px 0px 20px 0px;

      ul {
        position: absolute;
        bottom: 20px;

        li {
          margin: 0px 5px;
          button {
            height: 16px;
            width: 16px;
          }
        }
      }
    }

    .slide-btn {
      display: flex;
      justify-content: space-between;
      position: relative;

      bottom: 40px;

      margin: 0px 44vw;

      .btn-prev-slide,
      .btn-next-slide {
        background-color: transparent;

        font-size: 25px;

        height: 20px;
        width: 20px;
      }
    }

    .hr {
      display: flex;
      margin: 0px auto;
      max-width: 1600px;
    }
  }
}

</style>