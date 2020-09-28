<template lang="pug">
header
  //- HEADER DESKTOP
  .desktop-only
    img(src="../assets/menu.svg")

  //- HEADER MOBILE
  .mobile-only.mobile-header
    .first-row
      //- menu
      img.menu-icon(src="../assets/menu.svg" @click="isMenuOpen = !isMenuOpen")

      //- logo
      img.logo(src="../assets/logo.png")

      //- cart
      div
        span.items-bg 
        span.items {{ itemsCount }}
        fa-icon.cart-icon(icon="shopping-cart")

    .second-row
      //- search bar
      .input-box
        fa-icon.search-icon(icon="search")
        input(type="text" placeholder="Pesquisar")
        fa-icon.arrow-icon(icon="arrow-right")

  //- MENU MOBILE
  transition(name="menu")
    .mobile-only.mobile-menu(v-show="isMenuOpen")
      .first-row
        //- logo
        img.logo(src="../assets/logo.png")
        fa-icon.back-icon(icon="arrow-left" @click="isMenuOpen = !isMenuOpen")

      nav
        router-link(to="/") HOME #[fa-icon.dropdown-icon(:icon="isDropdownOpen ? 'arrow-down' : 'arrow-up'" @click="isDropdownOpen = !isDropdownOpen")]

        transition(name="dropdown")
          div.dropdown(v-show="isDropdownOpen")
            router-link(to="/a") Corrida
            router-link(to="/a") Social
            router-link(to="/a") Trilhas
            router-link(to="/a") Passeios
            router-link(to="/a") Cadarços
            router-link(to="/a") Meias


        router-link(to="/a") PRODUTOS
        router-link(to="/b") CONTATO

        div.space

        router-link(to="/c") ENTRAR #[fa-icon.user-icon(icon="user-circle")]


</template>

<script>
export default {
  name: "Header",
  data: () => {
    return {
      itemsCount: 12,
      isMenuOpen: true,
      isDropdownOpen: true
    }
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

// GENERIC
header {
  .mobile-header {
    .first-row {
      div {
        .items {
          color: $white;
        }

        .items-bg {
          background-color: $red;
          color: $white;
        }

        .cart-icon {
          color: $header-grey;
        }
      }
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

  .mobile-menu {
    background-color: $white;
    box-shadow: 10px 0px 20px 10px #00000020;
    border-left: 7px solid $red;

    .first-row {
      .back-icon {
        border-radius: 5px;
        background-color: $back-icon-color;
        color: $white;
      }
    }

    nav {
      a { 
        font-family: 'Baloo Tamma 2', cursive;
        color: $nav-link-color; 

        border-radius: 12px;
        
        &:hover, 
        &:focus {
          background-color: $red;
          color: white;
        }
      }

      .dropdown {
        background-color: $red;
        a { color: $white; }
      }

      .is-active {
        background-color: $red;
        color: white;
      }
    }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  header {
    .mobile-header {
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

        div {
          .items-bg {
            position: fixed;
            border-radius: 30px;
            top: 30px;
            right: 25px;

            height: 20px;
            width: 20px;
          }

          .items {
            position: fixed;
            top: 30px;
            right: 29px;

            font-size: 12px;
          }
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

    .mobile-menu {
      position: fixed;
      top: 0px;
      left: 0px;

      height: 100vh;
      width: 80vw;

      .first-row {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 16px 0px;

        .logo {
          height: 60px;
        }

        .back-icon {
          font-size: 14px;

          padding: 10px 10px;
          margin-left: 40px;
        }
      }

      nav {
        display: flex;
        flex-direction: column;

        font-size: 18px;

        padding: 40px 0px 0px 0px;

        a {
          width: 100px;
          padding: 5px 16px 3px 16px;
          margin-left: 10vw;

          .dropdown-icon,
          .user-icon {
            font-size: 14px;
            margin-left: 10px;
          }
        }

        .dropdown {
          display: flex;
          flex-direction: column;

          margin: 20px 0px;
          padding: 20px 0px;

          font-size: 18px;
        }

        .space {
          height: 20px;
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

// ANIMATIONS
.menu-enter-active, .menu-leave-active {
  transition: all .3s ease-in-out;
}
.menu-enter, .menu-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-80vw);
}

.dropdown-enter-active, .dropdown-leave-active {
  transition: all .1s ease-in-out;
}
.dropdown-enter, .dropdown-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>