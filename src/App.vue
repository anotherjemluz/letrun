<template lang="pug">

  #app
    router-view

</template>

<style lang="scss">
// BC Alphapipe font
@import url("https://use.typekit.net/bia7dqi.css");
// BC Alphapipe Italic
// font-family: bc-alphapipe, sans-serif;
// font-weight: 400;
// font-style: italic;

// Hind Siliguri font
@import url("https://use.typekit.net/bia7dqi.css");

// Hind Siliguri SemiBold
// font-family: hind-siliguri, sans-serif;
// font-weight: 600;
// ----------------------
// Hind Siliguri Bold
// font-family: hind-siliguri, sans-serif;
// font-weight: 700;

// Baloo Tamma 2 font
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;600&display=swap');
// font-family: 'Baloo Tamma 2', cursive;

// Dancer Pro font
@import url("https://use.typekit.net/bia7dqi.css");


// CSS RESET
* {
  padding: 0;
  margin: 0;
}

input {
  border: none;
  background-color: transparent;
  outline: none;
}

a {
  text-decoration: none;
}

button {
  border: none;
  outline: none;
}

#app {
  font-family: fp-dancer-pro, sans-serif;
  font-weight: 700;
  font-style: normal;

  background-color: #f9f9f9;
}

// MOBILE
@media only screen and (max-width: 900px) {
  .desktop-only { display: none; }
}

// DESKTOP
@media only screen and (min-width: 901px) {
  .mobile-only { display: none; }
}
</style>
