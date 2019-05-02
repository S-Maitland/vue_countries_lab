<template lang="html">
  <div>
      <list-item v-for="country in countries" :country="country" :key="country.name"></list-item>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  name: 'country-list',
    props: ['countries'],
    components: {
      "list-item": ListItem
    }
}
</script>

<style lang="css" scoped>
</style>
