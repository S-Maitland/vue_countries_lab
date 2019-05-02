<template lang="html">
  <div class="country-details" v-if="country">
    <p>Country Selected: {{country.name}}</p>
    <p>Capital: {{country.capital}}</p>
    <p>Region: {{country.region}}</p>
    <p>Population: {{country.population}}</p>
    <img :src="country.flag" alt="country.name">
  </div>
</template>

<script>
export default {
  name: "country-detail",
  props: ['country']
}
</script>

<style lang="css" scoped>
.country-details {
  float: center;
  background-color: lightgrey;
  border: 1px solid black;
}
</style>
