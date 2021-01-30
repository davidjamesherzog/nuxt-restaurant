<template>
  <div class="container">
    <h1 class="title">Edit Reservation</h1>
    <reservation-form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'ReservationsEdit'
})
export default class ReservationsEdit extends Vue {}
</script>
