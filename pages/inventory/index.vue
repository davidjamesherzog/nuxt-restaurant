<template>
  <div class="page">
    <h1 class="title">Inventory</h1>
    <button class="button is-primary" @click="add">Add</button>
    <div class="">
      <table class="table">
        <thead>
          <tr>
            <th><abbr title="Time">Time</abbr></th>
            <th><abbr title="Reservations">Reservations</abbr></th>
            <th><abbr title="Note">Note</abbr></th>
            <th><abbr title="Delete"></abbr></th>
          </tr>
        </thead>
        <tbody v-if="inventory">
          <tr v-for="inv in inventory" :key="inv.id">
            <td>
              <nuxt-link
                :to="{ name: 'inventory-id', params: { id: inv.id } }"
                >{{ inv.time }}</nuxt-link
              >
            </td>
            <td>{{ inv.reservations }}</td>
            <td>{{ inv.note }}</td>
            <td>
              <button
                class="button is-danger is-small"
                @click="deleteById(inv.id)"
              >
                X
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { namespace } from 'vuex-class';

const restaurantModule = namespace('restaurant');

@Component({
  name: 'inventory'
})
export default class Inventory extends Vue {
  @restaurantModule.Getter('inventory')
  private inventory!: Array<Inventory>;

  @restaurantModule.Action
  private deleteInventory!: (id: number) => Promise<void>;

  // methods
  public add() {
    this.$router.push({
      path: '/inventory/add'
    });
  }

  public deleteById(id: number) {
    this.deleteInventory(id);
  }
}
</script>
