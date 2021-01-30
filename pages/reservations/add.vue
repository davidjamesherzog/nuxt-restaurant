<template>
  <div class="container">
    <h1 class="title">Add Reservation</h1>
    <reservation-form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'ReservationsAdd'
})
export default class ReservationsAdd extends Vue {}
</script>
