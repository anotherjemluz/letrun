<template lang="pug">
  section#CTA
    //- divisorias
    img.mobile-only.hr-mob(src="@/assets/hr-red-mob.png")
    img.desktop-only.hr(src="@/assets/hr-red.png")

    //- conteudo
    div.cta-content
      div.titulo
        h1 Cadastre-se para receber ofertas e descontos exclusivos

      div.input-box
        input(type="text" placeholder="Seu melhor e-mail" v-model="mailText" @focus="isActive = true" @blur="isActive = false")
        button Enviar #[fa-icon.mail-icon(icon="paper-plane")]
        

      //- preenchimento no desktop
      div.desktop-only.fill

    //- divisorias
    img.mobile-only.hr-mob(src="@/assets/hr-red-mob.png")
    img.desktop-only.hr(src="@/assets/hr-red.png")
</template>

<script>
export default {
  name: "CallToAction",
  data: () => {
    return {
      mailText: '',
      isActive: false
    }
  }
}
</script>

<style lang="scss">
@import "../styles/variables.scss";

// GENERIC
#CTA {
  .hr,
  .hr-mob {
    opacity: .6;
  }

  .cta-content {
    display: flex;

    .titulo {
      background-color: $red;

      h1 { color: $white; }
    }

    .input-box {
      display: flex;
      border-radius: 10px;
      
      input {
        background-color: #99999940;
        font-family: 'Baloo Tamma 2', cursive;
        font-weight: 400;
        color: #555;
      }

      button {
        font-family: 'Baloo Tamma 2', cursive;
        background-color: #333;
        color: $white;
        transition: all .5s ease;

        &:hover,
        &:focus {
          cursor: pointer;
          background-color: $red;
        }
      }

      .mail-icon {
        margin-left: 6px;
        color: $white;
      }
    }

    .fill {
      height: 100px;
      flex-grow: 1;
      background-color: $red;
    }
  }
}

// MOBILE E TABLET
@media only screen and (max-width: 900px) {
  #CTA {
    .cta-content {
      flex-direction: column;
      margin: 12px 0px;

      .titulo {        
        padding: 20px 40px;

        font-size: 14px;

        h1 {
          text-align: center;
          max-width: 400px;
        }
      }

      .input-box {
        flex-direction: column;
        padding: 12px 12px 6px 12px;
        margin: 24px auto 0px;

        input {
          width: 60vw;
          border-radius: 10px;

          font-size: 18px;
          padding: 12px 24px 6px 24px;
        }

        button {
          width: 150px;
          border-radius: 10px;

          font-size: 16px;
          padding: 15px 20px 15px 20px;
          margin: 20px auto 0px auto
        }
      }

    }

    .hr-mob {
      display: flex;
      margin: 10px auto;
      opacity: .6;
    }
  }
}

// DESKTOP 
@media only screen and (min-width: 901px) and (max-width: 1599px) {
  #CTA {
    .cta-content {
      align-items: center;
      height: 100px;

      .titulo {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        border-radius: 0px 20px 20px 0px;
        
        width: 40vw;
        margin: 24px 24px 12px 0px;
        padding: 20px 40px;

        font-size: 14px;

        h1 {
          text-align: right;
          max-width: 400px;
        }
      }

      .input-box {
        
        input {
          border-radius: 10px 0px 0px 10px;
          padding: 12px 24px 6px 24px;

          font-size: 18px;
        }

        button {
          border-radius: 0px 10px 10px 0px;

          font-size: 16px;
          padding: 10px 20px 5px 20px;
        }
      }

      .fill {
        border-radius: 20px 0px 0px 20px;
        margin: 24px 0px 12px 24px;
      }
    }
  }
}

// FIX COLUMN 
@media only screen and (min-width: 1600px) {
  #CTA {
    margin: 0px auto;
    max-width: 1600px;

    .cta-content {
      align-items: center;

      .titulo {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        border-radius: 50px 20px 20px 50px;
        
        max-width: calc(1600px * 0.8);
        margin: 24px 24px 24px 0px;
        padding: 20px 40px;

        font-size: 14px;  

        h1 {
          text-align: right;
          max-width: 60%;
        }
      }

      .input-box {
        
        input {
          border-radius: 10px 0px 0px 10px;
          padding: 12px 24px 6px 24px;

          font-size: 18px;
        }

        button {
          border-radius: 0px 10px 10px 0px;

          font-size: 16px;
          padding: 10px 20px 5px 20px;
        }
      }

      .fill {
        border-radius: 20px 50px 50px 20px;
        margin: 24px 0px 12px 24px;
      }
    }

    .hr{
      display: flex;
      margin: 0px auto;
      max-width: 1600px;
    }
  }
}

</style>