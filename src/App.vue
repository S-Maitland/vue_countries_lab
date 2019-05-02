<template>
  <div id="app">
    <country-list :countries="countries"></country-list>
    <country-detail :country="selectedCountry"></country-detail>
  </div>
</template>

<script>
import {eventBus} from './main.js'
import CountryList from './components/CountryList.vue'
import CountryDetail from './components/CountryDetail.vue'
import ListItem from './components/ListItem.vue'

export default {
  name: 'app',
  data(){
    return {
      countries: [],
      selectedCountry: null
    }
  },
  components: {
    "country-list": CountryList,
    "country-detail": CountryDetail
  },
  mounted(){
    //fetch the API data countries
    fetch('https://restcountries.eu/rest/v2/all')
    //convert the data response to a json format
    .then(response => response.json())
    // put the data into vue object to be used
    .then(countriesAPI => this.countries = countriesAPI)

    eventBus.$on('country-selected', (country) => {
      this.selectedCountry = country;
    })
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
  list-style: none;
}
</style>
