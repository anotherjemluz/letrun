<template lang="pug">
  footer
    section.payments
      h2  Formas de Pagamento
      div.mercado-pago
        img(src="@/assets/paymment/logo-mercado-pago.svg")
        fa-icon(icon="arrow-right" class="arrow-right")

      div.picpay
        img(src="@/assets/paymment/logo-picpay.svg")
        fa-icon(icon="arrow-right" class="arrow-right")

      div.bradesco
        img(src="@/assets/paymment/logo-bradesco.svg")

      div.bb
        img(src="@/assets/paymment/logo-bb.svg")

      div.cartoes
        p #[strong 💳] Cartão de crédito ou débito

      div.especie
        p #[strong 💵] Espécie
  
    section.sitemap
      h2 Mapa do site
      router-link(to="/") Home
      router-link(to="/") Contato
      router-link(to="/") Produtos
      router-link(to="/") Home
      router-link(to="/") Contato
      router-link(to="/") Produtos

    section.other
      div.certif
        img(src="@/assets/paymment/certificados.png")

      div.social
        h2 Segue a gente!
        div.networks
          fa-icon(:icon="['fab', 'facebook']" class="facebook-icon")
          fa-icon(:icon="['fab', 'instagram']" class="instagram-icon")
          fa-icon(:icon="['fab', 'twitter']" class="twitter-icon")


</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
@import "../styles/variables.scss";

// GENERIC
footer {
  font-family: 'Baloo Tamma 2', cursive;
  background-color: $footer-bg;

  display: flex;

  section {
    h2 { color: $footer-title; }
  }

  .payments {
    div {
      background-color: $white;
      border-radius: 10px;
      color: $grey;
    }

    .mercado-pago,
    .picpay {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .arrow-right {

      }
    }

    .mercado-pago {
      .arrow-right {
        color: #50B4E9;
      }
    }

    .picpay {
      .arrow-right {
        color: #21C25E;
      }
    }
  }

  .sitemap {
    display: flex;
    flex-direction: column;

    a {
      color: $grey;

      &:hover,
      &:focus {
        cursor: pointer;
        color: $black;
      }
    }
  }

  .other {
    display: flex;
    flex-direction: column;
    align-items: center;
      
    .certif {
      img {
        border-radius: 20px;
      }
    }

    .social {
      .facebook-icon,
      .instagram-icon,
      .twitter-icon {
        color: $grey;

        &:hover,
        &:focus {
          cursor: pointer;
          color: $black;
        }
      }
    }
  }
}

// MOBILE E TABLET
@media only screen and (max-width: 900px) {
  footer {

  }
}

// DESKTOP 
@media only screen and (min-width: 901px) {
  footer {
    padding: 64px 15vw;
    justify-content: space-between;

    section {
      h2 {
        margin-bottom: 24px;
      }
    }

    .payments {
      div {
        padding: 15px 20px 5px 20px;
        margin: 10px 0px;

        img {
          height: 20px;
        }
      }
      
      .mercado-pago,
      .picpay {
        padding: 15px 20px 15px 20px;
      }
    }

    .other {
      h2 {
        margin-bottom: 12px;
      }

      .certif {
        margin-bottom: 24px;
      }

      .social {
        .facebook-icon,
        .instagram-icon,
        .twitter-icon {
          font-size: 1.8rem;

          margin: 0px 10px;
        }
      }
    }
  }
}

</style>