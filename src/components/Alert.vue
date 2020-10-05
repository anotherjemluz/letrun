<template lang="pug">
  section#Alert
    h1 Frete grátis para todo o Brasil
    h4  em compras acima de R$ 200,00
</template>

<script>
export default {
  name: 'Alert'
}
</script>

<style lang="scss">
@import "../styles/variables.scss";

// GENERIC 
#Alert {
  background-color: $black;
  color: white;

  h4 { opacity: .6;}
}

// MOBILE E TABLET
@media only screen and (max-width: 900px) {
  #Alert {
    text-justify: center;
    text-align: center;
    padding: 96px 64px;

    h1 {
      font-size: 30px;
      margin-bottom: 40px;
    }

    h4 {
      font-size: 25px;
    }
  }
}

// DESKTOP 
@media only screen and (min-width: 901px) {
  #Alert {
    border-radius: 60px;

    text-justify: center;
    text-align: center;

    padding: 12px 0px;
    margin: 0px 24px;
    h1 {
      font-size: 30px;
      // margin-bottom: 40px;
    }

    h4 {
      font-size: 20px;
    }
  }
}

// FIX COLUMN 
@media only screen and (min-width: 1600px) {
  #Alert {
    // display: flex;
    // fle
    margin: 0px auto;
    width: 1600px;
  }
}

</style>