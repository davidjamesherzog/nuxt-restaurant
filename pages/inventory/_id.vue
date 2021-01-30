<template>
  <div class="container">
    <h1 class="title">Edit Inventory</h1>
    <inventory-form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'InventoryEdit'
})
export default class InventoryEdit extends Vue {}
</script>
