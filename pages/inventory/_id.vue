<template>
  <div class="page">
    <h1 class="title">Edit Inventory</h1>
    <inventory-form :id="id" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'InventoryEdit'
})
export default class InventoryEdit extends Vue {
  private id!: number;

  // lifecycle phases
  public beforeCreate() {
    this.id = +this.$route.params.id;
  }
}
</script>
