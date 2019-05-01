<template lang="html">
<li @click="handleClick"> {{country.name}} </li>
</template>

<script>
//import the eventBus Vue object from main.js so that we can create an $emit
//and then that $emit will signal to our $on in app.js to display detail
//about the individual list item.
import {eventBus} from '../main.js';

export default {
  name: "list-item",
    props: ['country'],
    methods: {
      handleClick(){
        eventBus.$emit('country-selected', this.country)
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
