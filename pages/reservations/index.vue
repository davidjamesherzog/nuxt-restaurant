<template>
  <div class="container">
    <h1 class="title">Reservations</h1>
    <button class="button is-primary" @click="add">Add</button>
    <div class="">
      <table class="table">
        <thead>
          <tr>
            <th><abbr title="Name">Name</abbr></th>
            <th><abbr title="Email">Email</abbr></th>
            <th><abbr title="Party Size">Size</abbr></th>
            <th><abbr title="Date">Date</abbr></th>
            <th><abbr title="Time">Time</abbr></th>
            <th><abbr title="Delete"></abbr></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(res, index) in reservations" :key="index">
            <td>
              <nuxt-link
                :to="{ name: 'reservations-id', params: { id: res.id } }"
                >{{ res.name }}</nuxt-link
              >
            </td>
            <td>{{ res.email }}</td>
            <td>{{ res.size }}</td>
            <td>{{ res.date }}</td>
            <td>{{ res.time }}</td>
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
import { namespace } from 'vuex-class';

const restaurantModule = namespace('restaurant');

@Component({
  name: 'reservations'
})
export default class Reservations extends Vue {
  @restaurantModule.State('_reservations')
  private reservations!: Array<Reservations>;

  // methods
  add() {
    this.$router.push({
      path: '/reservations/add'
    });
  }

  delete(id: number) {
    console.log(`Deleting reservation ${id}`);
  }
}
</script>
