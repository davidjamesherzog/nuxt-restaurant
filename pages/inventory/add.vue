<template>
  <div class="page">
    <h1 class="title">Add Inventory</h1>
    <inventory-form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'InventoryAdd'
})
export default class InventoryAdd extends Vue {}
</script>
