<template>
  <div class="box form-width">
    <div class="field">
      <label class="label">Time</label>
      <div class="control">
        <div class="select">
          <select v-model="inventory.time">
            <option>10:00</option>
            <option>10:15</option>
            <option>10:30</option>
            <option>10:45</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Reservations</label>
      <div class="control">
        <input
          v-model="inventory.reservations"
          class="input"
          type="text"
          placeholder="# of reservations"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Note</label>
      <div class="control">
        <input
          v-model="inventory.note"
          class="input"
          type="text"
          placeholder="Enter note"
        />
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
import Inventory from '../models/Inventory';

@Component({
  name: 'ReservationForm'
})
export default class ReservationForm extends Vue {
  private inventory: Inventory = new Inventory();

  submit() {
    console.log(this.inventory);
  }
}
</script>

<style lang="scss" scoped>
.form-width {
  max-width: 500px;
}
</style>
