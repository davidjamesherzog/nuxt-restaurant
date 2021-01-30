<template>
  <div class="container">
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
        <tbody>
          <tr>
            <td>
              <nuxt-link
                :to="{ name: 'inventory-id', params: { id: 1 } }"
                title="11.00"
                >11:00</nuxt-link
              >
            </td>
            <td>5</td>
            <td>Some note</td>
            <td>
              <button class="button is-danger is-small">X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'inventory'
})
export default class Inventory extends Vue {
  add() {
    this.$router.push({
      path: '/inventory/add'
    });
  }

  delete(id: number) {
    console.log(`Deleting inventory ${id}`);
  }
}
</script>
