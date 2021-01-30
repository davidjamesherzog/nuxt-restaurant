<template>
  <div class="page">
    <h1 class="title">Edit Reservation</h1>
    <reservation-form :id="id" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'ReservationsEdit'
})
export default class ReservationsEdit extends Vue {
  private id!: number;

  // lifecycle phases
  public beforeCreate() {
    this.id = +this.$route.params.id;
  }
}
</script>
