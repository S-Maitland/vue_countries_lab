<template lang="html">
<div class="SelectView">
  <select v-model="selectedIndex" v-on:change="handleChange">
    <option v-for="(country, index) in countries" :value="index">{{country.name}}</option>
  </select>
</div>
</template>

<script>
import {eventBus} from '../main.js';

export default {
  name: 'select-view',
  props: ['countries'],
  data(){
    return{
      selectedIndex: ''
    }
  },
  methods: {
    handleChange(){
      eventBus.$emit('country-selected', this.selectedIndex);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
