<template>
  <div class="box form-width">
    <form novalidate="true" method="post" @submit="submit">
      <div class="field">
        <label class="label">Time</label>
        <div class="control">
          <div class="select" :class="{ 'is-danger': timeError }">
            <select v-model="inventory.time">
              <option>10:00</option>
              <option>10:15</option>
              <option>10:30</option>
              <option>10:45</option>
            </select>
          </div>
        </div>
        <div v-if="timeError" class="is-small has-text-danger">
          Please specify a time
        </div>
      </div>

      <div class="field">
        <label class="label">Reservations</label>
        <div class="control">
          <input
            v-model="inventory.reservations"
            class="input"
            :class="{ 'is-danger': reservationsError }"
            type="text"
            placeholder="# of reservations"
          />
        </div>
        <div v-if="reservationsError" class="is-small has-text-danger">
          Please specify the amout of reservations allowed
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
          <input type="submit" class="button is-link" value="Submit" />
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { namespace } from 'vuex-class';
import Inventory from '../models/Inventory';

const restaurantModule = namespace('restaurant');

@Component({
  name: 'InventoryForm'
})
export default class ReservationForm extends Vue {
  private inventory: Inventory = new Inventory();
  private timeError = false;
  private reservationsError = false;

  @Prop()
  private id!: number;

  @restaurantModule.Action
  private getInventory: any;

  @restaurantModule.Action
  private updateInventory: any;

  // lifecycle phases
  public async mounted() {
    if (this.id) {
      this.inventory = await this.getInventory(this.id);
    }
  }

  // methods
  submit(e: Event) {
    e.preventDefault();
    this.timeError = false;
    this.reservationsError = false;

    if (!this.inventory.time) {
      this.timeError = true;
    }

    if (this.inventory.reservations < 1) {
      this.reservationsError = true;
    }

    if (this.timeError || this.reservationsError) {
      return;
    }
    this.updateInventory(this.inventory);
    this.$router.push({
      path: '/inventory'
    });
  }
}
</script>

<style lang="scss" scoped>
.form-width {
  max-width: 500px;
}
</style>
