<template lang="pug">
  section#SinglePromo
    div.promo
      div 
        h1 <strong>Promoção</strong>

      h2 Indique um amigo  e ganhe R$ 50,00 #[br] para compras no site!

        //- img.marca-dagua(src="@/assets/marca-dagua.png")
  
</template>

<script>
export default {
  name: 'DualPromo'
}
</script>

<style lang="scss" >
@import "../styles/variables.scss";

// GENERIC
#SinglePromo {
  .promo {
    background-image: linear-gradient(to top, hsla(0, 0, 0, 0.2), hsla(0, 0, 0, 1  )), url('../assets/banners/promo-amigo.jpg');

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 60%;

    box-shadow: 0px 0px 15px 10px #00000020;

    h2 { color: $white; }

    div {
      font-family: fp-dancer-pro, sans-serif;
      background-color: $white;
      color: $black;

      p { color: $grey; }
    }

    .marca-dagua {
      position: absolute;
      opacity: .6;
    }
  }
}

// MOBILE E TABLET
@media only screen and (max-width: 900px) {
  #SinglePromo {
    padding: 48px 24px;

    .promo {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      border-radius: 10px;
      text-align: center;

      height: 40vh;
      padding: 58px 24px;

      div {
        border-radius: 10px;
        padding: 12px 24px;

        margin-bottom: 48px;
        
        h1 {
          strong { 
            display: inline-block; 
            width: 100%;
            font-size: 1.6rem;
          }
        }
      }

      h2 {
        margin: 0px auto 48px auto;
        padding: 0px 12px;
        font-size: 1.8rem;
      }

      // .marca-dagua {
      //   display: none;
      //   position: absolute;
      //   height: 30px;
         
      //   bottom: 40px;
      //   left: 40px
      // }
    }
  }
}

// DESKTOP
@media only screen and (min-width: 901px) {
  #SinglePromo {
    display: flex;
    padding: 24px 48px 72px 48px;

    .promo {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      border-radius: 10px;
      text-align: left;
      flex-grow: 1;

      margin-left: 32px;
      padding: 32px 0px;

      div {
        border-radius: 10px;

        margin: 0px 0px 24px 24px;
        padding: 12px 48px;

        h1 { font-size: 2rem; }
      }

      h2 { 
        margin: 0px 0px 12px 24px; 
        font-size: 1.8rem;
      }


      // .marca-dagua {
      //   display: none;
      //   height: 30px;
         
      //   bottom: 20px;
      //   right: 40px
      // }
    }
  }
}

// FIX COLUMN 
@media only screen and (min-width: 1600px) {
  #SinglePromo {
    margin: 0px auto;
    width: 1600px;
    height: 300px;
  }
}

</style>