<template>
  <div class="box form-width">
    <form novalidate="true" method="post" @submit="submit">
      <div class="field">
        <label class="label">Time</label>
        <div class="control">
          <div class="select" :class="{ 'is-danger': timeError }">
            <select v-model="inventory.time">
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

      <div class="field">
        <label class="label">Reservations</label>
        <div class="control">
          <input
            v-model.number="inventory.reservations"
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
  private times: Array<string> = [];
  private timeError = false;
  private reservationsError = false;

  @Prop()
  private id!: number;

  @restaurantModule.Action
  private getInventoryTimes!: () => Promise<Array<string>>;

  @restaurantModule.Action
  private getInventory!: (id: number) => Promise<Inventory>;

  @restaurantModule.Action
  private updateInventory!: (inventory: Inventory) => Promise<void>;

  // lifecycle phases
  public async mounted() {
    this.times = await this.getInventoryTimes();
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
