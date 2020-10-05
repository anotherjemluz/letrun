<template lang="pug">
  section#DualPromo
    div.first-promo
      h2 Segunda sem desculpas
      div 
        h1 <strong>30%</strong>  de desconto
        p em tênis esportivos

        img.marca-dagua(src="@/assets/marca-dagua.png")
      
    div.second-promo
      h2 Cadastre-se e
      div 
        h1 <strong>Pague</strong> com Pix
        p a partir de outubro

        img.marca-dagua(src="@/assets/marca-dagua.png")

</template>

<script>
export default {
  name: 'DualPromo'
}
</script>

<style lang="scss" >
@import "../styles/variables.scss";

// GENERIC
#DualPromo {
  .first-promo,
  .second-promo {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 60%;

    box-shadow: 0px 0px 15px 10px #00000020;

    h2 { color: $white; }

    div {
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
  #DualPromo {
    padding: 72px 24px;

    .first-promo,
    .second-promo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      border-radius: 10px;
      text-align: center;

      height: 40vh;
      padding: 58px 24px;

      h2 {
        width: 70%;
        margin: 0px auto 24px auto;
      }

      div {
        border-radius: 10px;
        padding: 24px;
        
        h1 {
          margin-bottom: 12px;
          strong { 
            display: inline-block; 
            width: 100%;
            font-size: 40px;
          }
        }
      }

      .marca-dagua {
        display: none;
        position: absolute;
        height: 30px;
         
        bottom: 40px;
        left: 40px
      }
    }

    .first-promo {
      background-image: linear-gradient(to bottom, $gradient-red, $gradient-yellow), url('../assets/banners/promo-segunda.png');

      margin-bottom: 32px;
    }

    .second-promo {
      background-image: linear-gradient(to bottom, $gradient-grey, $gradient-black), url('../assets/banners/promo-pix.png');
    }
    
  }
}

// DESKTOP
@media only screen and (min-width: 901px) {
  #DualPromo {
    display: flex;
    padding: 48px 48px 72px 48px;

    .first-promo,
    .second-promo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 10px;
      text-align: center;
      flex-grow: 1;

      padding: 32px 0px;

      div {
        padding: 24px;
        width: 40%;
      }

      .marca-dagua {
        display: none;
        height: 30px;
         
        bottom: 20px;
        left: 40px
      }
    }

    .first-promo {
      background-image: linear-gradient(to left, $gradient-red, $gradient-yellow), url('../assets/banners/promo-segunda.png');

      margin-right: 32px;
      align-items: flex-end;

      h2 { margin: 0px 24px 12px 0px; }

      div {
        border-radius: 10px 0px 0px 10px;
      }
    }

    .second-promo {
      background-image: linear-gradient(to right, $gradient-grey, $gradient-black), url('../assets/banners/promo-pix.png');

      align-items: flex-start;

      h2 { margin: 0px 0px 12px 24px; }

      div {
        border-radius: 0px 10px 10px 0px;
      }
    }

  }
}

// FIX COLUMN 
@media only screen and (min-width: 1600px) {
  #DualPromo {
    margin: 0px auto;
    width: 1600px;
    height: 300px;
  }
}


</style>