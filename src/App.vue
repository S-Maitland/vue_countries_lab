<template>
  <div id="app">
    <country-list :countries="countries"></country-list>
  </div>
</template>

<script>
import CountryList from './components/CountryList.vue'
import ListItem from './components/ListItem.vue'

export default {
  name: 'app',
  data(){
    return {
      countries: []
    }
  },
  components: {
    "country-list": CountryList,
  },
  mounted(){
    //fetch the API data countries
    fetch('https://restcountries.eu/rest/v2/all')
    //convert the data response to a json format
    .then(response => response.json())
    // put the data into vue object to be used
    .then(countriesAPI => this.countries = countriesAPI);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
