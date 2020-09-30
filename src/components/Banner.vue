<template lang="pug">
  section#banner
    div.desktop-only.desktop-banner
    div.mobile-only.mobile-banner
      agile(ref="slider" fade="true" :navButtons="false" :autoplay="false" speed="1000" :dots="true")
        div.slide.first-banner
          div.text
            h1 Você com tudo!
            h4 Sapatênis Polowear

          img.marca-dagua(src="@/assets/marca-dagua.png")

        div.slide
          p tchau

      div.slide-btn
        button.btn-prev-slide(@click="$refs.slider.goToNext()") #[fa-icon(class="slide-btn-icon" icon="angle-left")]
        button.btn-next-slide(@click="$refs.slider.goToPrev()") #[fa-icon(class="slide-btn-icon" icon="angle-right")]

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
  .mobile-banner {
  }
}

// MOBILE E TABLET
@media only screen and (max-width: 900px) {
  #banner .mobile-banner {
    .slide {
      text-align: center;

      width: 100vw;
      height: 50vh;
    }

    .first-banner {
      background-image: url('../assets/banners/main-banner.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;

      .text {
        color: $white;
        margin-top: 20px;

        h4 { opacity: .8; }
      }

      .marca-dagua {
        position: fixed;
        opacity: .6;

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
            background-color: transparent;
            border-radius: 10px;
            border: 3px solid #303030;

            height: 16px;
            width: 16px;
          }
        }

        .agile__dot--current button {
          background-color: #303030;
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
  }
}


</style>