<template lang="pug">
header
  //- HEADER DESKTOP
  div.desktop-only.desktop-header
    div.first-row
      img.logo(src="../assets/logo.png")

      //- left navigation
      nav.left-navigation
        router-link(to="/") HOME
        router-link(to="/") CONTATO
        router-link(to="/") PRODUTOS

        //- search bar
        div.input-box
          fa-icon.search-icon(icon="search")
          input(type="text" placeholder="Pesquisar" v-model="searchText" @focus="isActive = true" @blur="isActive = false")
          fa-icon.arrow-icon(icon="arrow-right" :class="[isActive ? 'arrow-on' : 'arrow-off']" )

      //- right navigation
      nav.right-navigation
        router-link(to="/c") ENTRAR #[fa-icon.user-icon(icon="user-circle")]

        //- cart
        div.cart-box
          span.items-bg 
          span.items {{ cartItems }}
          fa-icon.cart-icon(icon="shopping-cart")

    div.second-row
      nav.dropdown
        router-link(to="/a") Corrida
        router-link(to="/a") Social
        router-link(to="/a") Trilhas
        router-link(to="/a") Passeios
        router-link(to="/a") Cadarços 
        router-link(to="/a") Meias

  //- HEADER MOBILE
  div.mobile-only.mobile-header
    div.first-row
      //- menu
      img.menu-icon(src="../assets/menu.svg" @click="isMenuOpen = !isMenuOpen")

      //- logo
      img.logo(src="../assets/logo.png")

      //- cart
      div.cart-box
        span.items-bg 
        span.items {{ cartItems }}
        fa-icon.cart-icon(icon="shopping-cart")

    div.second-row
      //- search bar
      div.input-box
        fa-icon.search-icon(icon="search")
        input(type="text" placeholder="Pesquisar" v-model="searchText" @focus="isActive = true" @blur="isActive = false")
        fa-icon.arrow-icon(icon="arrow-right" :class="[isActive ? 'arrow-on' : 'arrow-off']" )

  //- MENU MOBILE
  transition(name="menu")
    div.mobile-only.mobile-menu(v-show="isMenuOpen")
      div.first-row
        //- logo
        img.logo(src="../assets/logo.png")
        fa-icon.back-icon(icon="arrow-left" @click="isMenuOpen = !isMenuOpen")

      //- unique navigation
      nav
        router-link(to="/") HOME #[fa-icon.dropdown-icon(:icon="isDropdownOpen ? 'arrow-down' : 'arrow-up'" @click="isDropdownOpen = !isDropdownOpen")]

        //- dropdown
        transition(name="dropdown")
          nav.dropdown(v-show="isDropdownOpen")
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
import { mapState } from 'vuex';

export default {
  name: "Header",
  computed: mapState(["cartItems"]),
  data: () => {
    return {
      isActive: false,
      searchText: '',
      isDropdownOpen: true,
      isMenuOpen: false
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
      .cart-box {
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

      .arrow-on {
        background-color: $black;
        color: $white;
      }

      .arrow-off {
        background-color: $header-grey;
        color: $white;
        opacity: .5;
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

  .desktop-header {
    .first-row {
      display: flex;
      justify-content: space-around;
      align-items: center;

      .left-navigation {
        display: flex;
        align-items: center;

        a { 
          color: $nav-link-color; 
          font-family: 'Baloo Tamma 2', cursive;
        }

        .input-box {
          background-color: $search-box-color;

          .search-icon {
            color: $header-grey;
          }

          input {
            font-family: 'Baloo Tamma 2', cursive;
            font-weight: 400;
            color: $header-grey;
          }

          .arrow-on {
            background-color: $black;
            color: $white;
          }

          .arrow-off {
            background-color: $header-grey;
            color: $white;
            opacity: .5;
          }
        }

      }

      .right-navigation {
        display: flex;
        align-items: center;

        a { 
          color: $nav-link-color; 
          font-family: 'Baloo Tamma 2', cursive;
        }

        .cart-box {
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
    }

    .second-row {
      display: flex;
      justify-content: center;
      background-color: $red;

      a { color: $white;}
    }
  }
}

// MOBILE E TABLET
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

        .cart-box {
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
      z-index: 1;
      
      top: 0px;
      left: 0px;

      height: 100vh;

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

// MOBILE 
@media only screen and (max-width: 720px) {
  header {
    .mobile-menu {
      width: 80vw;

      nav a {
        margin-left: 10vw;
      }
    }
  }
}

// TABLET 
@media only screen and (min-width: 721px) and (max-width: 900px){ 
  header {
    .mobile-menu {
      width: 40vw;

      nav a {
        margin-left: 7vw;
      }
    }
  }
}

// DESKTOP 
@media only screen and (min-width: 901px) {
  header {
    .desktop-header {
      .first-row {
        width: 70vw; 

        padding: 0px 16px;
        margin: 0px auto;

        .logo {
          height: 40px;
        }

        .left-navigation,
        .right-navigation {
          a {
            border-radius: 8px;
            transition: all .5s ease;

            font-size: 16px;
            padding: 4px 16px 0px 16px;
            margin: 16px 8px;

            &:hover {
              background-color: $red;
              color: white;
            }
          }
        }

        .left-navigation {
          .input-box {
            display: flex;
            align-items: center;
            border-radius: 10px;

            height: 28px;

            padding: 8px 16px;
            margin: 16px 16px;

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
              font-size: 16px;
              // width: 80%;

              &::placeholder {
                opacity: .6;
              }
            }
          }
        }

        .right-navigation {
          .user-icon {
            margin-left: 12px;
          }

          .cart-box {
            &:hover {
              cursor: pointer;
            }

            margin-left: 12px;

            .items-bg {
              position: absolute;
              border-radius: 30px;
              margin-top: -8px;
              margin-left: 7px;

              height: 20px;
              width: 20px;
            }

            .items {
              position: absolute;
              margin-top: -8px;
              margin-left: 11px;

              font-size: 12px;
            }
          }
        }
      }

      .second-row {
        padding: 16px 0px;
        a { 
          font-size: 20px;
          padding: 0px 16px; 
        }
      }
    }
  }
}

// ANIMATIONS
// menu
.menu-enter-active, .menu-leave-active {
  transition: all .3s ease-in-out;
}
.menu-enter, .menu-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-80vw);
}

// dropdown
.dropdown-enter-active, .dropdown-leave-active {
  transition: all .1s ease-in-out;
}
.dropdown-enter, .dropdown-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>