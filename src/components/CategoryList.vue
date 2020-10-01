<template lang="pug">
  section#CategoryList
    h1 MARCAS FAMOSAS

    ul
      li(v-for="brand in data.brandList")
        img(:src="require('../assets/brands/' + brand.image)")
        p {{ brand.name }}

      div.mobile-only(style="width: 150px;")




</template>

<script>
import json from '../../data.json'

export default {
  name: 'CategoryList',
  data: () => {
    return {
      data: json
    }
  }
}
</script>

<style lang="scss">
@import "../styles/variables.scss";

// GENERIC
#CategoryList {
  h1 { color: #303030;}

  ul {
    display: flex;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        display: flex;
        justify-content: center;
        align-items: center;

        box-shadow: 0px 0px 20px 0px #00000020;
        border-radius: 30px;
      }

      p { color: #303030; }
    }
  }
}

// MOBILE E TABLET
@media only screen and (max-width: 900px) {
  #CategoryList {
    padding: 48px 0px;
    h1 { 
      text-align: center; 
    }

    ul {
      width: calc(100vw - 40px);
      padding: 40px 20px;

      li {
        img {
          height: 200px;
          width: 200px;

          margin: 20px;
        }
      }
    }
  }
}

// DESKTOP 
@media only screen and (min-width: 901px) {
  #CategoryList {
    padding: 72px 0px;
    h1 { 
      text-align: center; 
    }

    ul {
      justify-content: center;

      width: 100vw;
      padding: 30px 0px;

      li {
        img {
          height: 200px;
          width: 200px;

          margin: 20px;
        }
      }
    }
  }
}

</style>