import { createModule } from 'vuex-class-component';

const VuexModule = createModule({
  namespaced: 'restaurant',
  strict: false,
  target: 'nuxt'
});

export default class Restaurant extends VuexModule {
  // state
  private _inventory = [];
  private _reservations = [];
}
