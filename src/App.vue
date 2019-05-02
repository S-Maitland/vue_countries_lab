<template>
  <div id="app">
    <div id="countryList">
      <select-view :countries="countries"></select-view>
    </div>
    <div id="countryDetail">
      <country-detail :country="selectedCountry"></country-detail>
    </div>
  </div>
</template>

<script>
import {eventBus} from './main.js'
import CountryList from './components/CountryList.vue'
import CountryDetail from './components/CountryDetail.vue'
import SelectView from './components/SelectView.vue'
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
    "country-detail": CountryDetail,
    "select-view": SelectView
  },
  mounted(){
    //fetch the API data countries
    fetch('https://restcountries.eu/rest/v2/all')
    //convert the data response to a json format
    .then(response => response.json())
    // put the data into vue object to be used
    .then(countriesAPI => this.countries = countriesAPI)

    eventBus.$on('country-selected', (index) => {
      this.selectedCountry = this.countries[index]
    })
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
}

#countryList {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  list-style: none;
  width: 500px;
}

#countryDetail {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 30px;
  list-style: none;
  height: 300px;
  overflow: auto;
  width: 400px;
}

#countryDetail img {
  height: 100px;
  width: 150px;
}
</style>
