<template>
  <div class="box form-width">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input
          v-model="reservation.name"
          class="input"
          type="text"
          placeholder="Enter name"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input
          v-model="reservation.email"
          class="input"
          type="email"
          placeholder="Enter email"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Party Size</label>
      <div class="control">
        <input
          v-model="reservation.size"
          class="input"
          type="text"
          placeholder="# of people"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Date</label>
      <div class="control">
        <div class="select">
          <select v-model="reservation.date">
            <option>Today</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Time</label>
      <div class="control">
        <div class="select">
          <select v-model="reservation.time">
            <option>10:00</option>
            <option>10:15</option>
            <option>10:30</option>
            <option>10:45</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Reservation from '../models/Reservation';

@Component({
  name: 'ReservationForm'
})
export default class ReservationForm extends Vue {
  private reservation: Reservation = new Reservation();

  submit() {
    console.log(this.reservation);
  }
}
</script>

<style lang="scss" scoped>
.form-width {
  max-width: 500px;
}
</style>
