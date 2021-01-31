<template>
  <div class="box form-width">
    <form novalidate="true" method="post" @submit="submit">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            v-model="reservation.name"
            class="input"
            :class="{ 'is-danger': nameError }"
            type="text"
            placeholder="Enter name"
          />
        </div>
        <div v-if="nameError" class="is-small has-text-danger">
          Please specify a name
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            v-model="reservation.email"
            class="input"
            :class="{ 'is-danger': emailError }"
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div v-if="emailError" class="is-small has-text-danger">
          Please specify an email address
        </div>
      </div>

      <div class="field">
        <label class="label">Party Size</label>
        <div class="control">
          <input
            v-model.number="reservation.size"
            class="input"
            :class="{ 'is-danger': sizeError }"
            type="text"
            placeholder="# of people"
          />
        </div>
        <div v-if="sizeError" class="is-small has-text-danger">
          Please specify the size of the party
        </div>
      </div>

      <div class="field">
        <label class="label">Date</label>
        <div class="control">
          <div class="select" :class="{ 'is-danger': dateError }">
            <select v-model="reservation.date">
              <option>Today</option>
            </select>
          </div>
        </div>
        <div v-if="dateError" class="is-small has-text-danger">
          Please specify a date
        </div>
      </div>

      <div class="field">
        <label class="label">Time</label>
        <div class="control">
          <div class="select" :class="{ 'is-danger': timeError }">
            <select v-model="reservation.time">
              <option v-for="time in times" :key="time" :value="time">
                {{ time }}
              </option>
            </select>
          </div>
        </div>
        <div v-if="timeError" class="is-small has-text-danger">
          Please specify a time
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <input type="submit" class="button is-link" value="Submit" />
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { namespace } from 'vuex-class';
import Reservation from '../models/Reservation';

const restaurantModule = namespace('restaurant');

@Component({
  name: 'ReservationForm'
})
export default class ReservationForm extends Vue {
  private reservation: Reservation = new Reservation();
  private times: Array<string> = [];
  private nameError = false;
  private emailError = false;
  private sizeError = false;
  private dateError = false;
  private timeError = false;

  @Prop()
  private id!: number;

  @restaurantModule.Action
  private getReservationTimes!: () => Promise<Array<string>>;

  @restaurantModule.Action
  private getReservation!: (id: number) => Promise<Reservation>;

  @restaurantModule.Action
  private updateReservation!: (reservation: Reservation) => Promise<void>;

  // lifecycle phases
  public async mounted() {
    this.times = await this.getReservationTimes();
    if (this.id) {
      this.reservation = await this.getReservation(this.id);
    }
  }

  // methods
  submit(e: Event) {
    e.preventDefault();
    this.nameError = false;
    this.emailError = false;
    this.sizeError = false;
    this.dateError = false;
    this.timeError = false;

    if (!this.reservation.name) {
      this.nameError = true;
    }

    if (!this.reservation.email || !this.validEmail(this.reservation.email)) {
      this.emailError = true;
    }

    if (!this.reservation.size) {
      this.sizeError = true;
    }

    if (!this.reservation.date) {
      this.dateError = true;
    }

    if (!this.reservation.time) {
      this.timeError = true;
    }

    if (
      this.nameError ||
      this.emailError ||
      this.sizeError ||
      this.dateError ||
      this.timeError
    ) {
      return;
    }
    this.updateReservation(this.reservation);
    this.$router.push({
      path: '/reservations'
    });
  }

  private validEmail(email: string) {
    const expression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(email);
  }
}
</script>

<style lang="scss" scoped>
.form-width {
  max-width: 500px;
}
</style>
