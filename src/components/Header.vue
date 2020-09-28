<template lang="pug">
header
  //- HEADER DESKTOP
  .desktop-only
    img(src="../assets/menu.svg")

  //- HEADER MOBILE
  .mobile-only.menu
    .first-row
      //- menu
      img.menu-icon(src="../assets/menu.svg")

      //- logo
      img.logo(src="../assets/logo.png")

      //- cart
      fa-icon.cart-icon(icon="shopping-cart")

    .second-row
      .input-box
        fa-icon.search-icon(icon="search")
        input(type="text" placeholder="Pesquisar")
        fa-icon.arrow-icon(icon="arrow-right")

</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

// GENERIC
header {
  .menu {
    .first-row .cart-icon {
      color: $header-grey;
    }

    .second-row {
      .input-box {
        background-color: $search-box-color;
      }

      .search-icon {
        color: $header-grey;
      }

      .arrow-icon {
        background-color: $black;
        color: $white;
      }

      input {
        font-family: 'Baloo Tamma 2', cursive;
        font-weight: 400;
        color: $header-grey;
      }
    }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  header {
    .menu {
      display: flex;
      flex-direction: column;

      padding: 16px 24px 24px 24px;

      .first-row {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0px 12px;

        .logo {
          height: 70px;
        }
      }

      .second-row {
        margin-top: 20px;

        .input-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 10px;

          padding: 8px 16px;

          .search-icon {
            margin-right: 12px;
          }

          .arrow-icon {
            border-radius: 20px;
            font-size: 14px;

            padding: 5px 10px;
            margin-left: 12px;
          }

          input {
            font-size: 20px;
            width: 80%;

            &::placeholder {
              opacity: .6;
            }
          }
        }
      }
    }
  }
}

// TABLET
@media only screen and (min-width: 901px) {
  header {
    
  }
}

// // DESKTOP
// @media only screen and (max-width: 900px) {
//   header {

//   }
// }
</style>