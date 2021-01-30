import { createModule, mutation, action } from 'vuex-class-component';
import Reservation from '~/models/Reservation';
import Inventory from '~/models/Inventory';

const VuexModule = createModule({
  namespaced: 'restaurant',
  strict: false,
  target: 'nuxt'
});

export default class Restaurant extends VuexModule {
  // state
  private _inventory: Array<Inventory> = [];
  private _reservations: Array<Reservation> = [];
  private _inventoryId = 0;
  private _reservationId = 0;

  // getters
  get inventory(): Array<Inventory> {
    return this._inventory.sort((a, b) => {
      if (a.time < b.time) {
        return -1;
      }
      if (a.time > b.time) {
        return 1;
      }
      // times must be equal
      return 0;
    });
  }

  get reservations(): Array<Reservation> {
    return this._reservations.sort((a, b) => {
      if (a.time < b.time) {
        return -1;
      }
      if (a.time > b.time) {
        return 1;
      }
      // times must be equal
      return 0;
    });
  }

  // mutations
  @mutation
  public addInventory(inventory: Inventory): void {
    this._inventory.push(inventory);
  }

  @mutation
  public editInventory(inventory: Inventory): void {
    const index = this._inventory.findIndex(
      (inv: Inventory) => inv.id === inventory.id
    );
    this._inventory.splice(index, 1, inventory);
  }

  @mutation
  public deleteInventoryById(id: number): void {
    const index = this._inventory.findIndex((inv: Inventory) => inv.id === id);
    this._inventory.splice(index, 1);
  }

  @mutation
  public addReservation(reservation: Reservation): void {
    this._reservations.push(reservation);
  }

  @mutation
  public editReservation(reservation: Reservation): void {
    const index = this._reservations.findIndex(
      (res: Reservation) => res.id === reservation.id
    );
    this._reservations.splice(index, 1, reservation);
  }

  @mutation
  public deleteReservationById(id: number): void {
    const index = this._reservations.findIndex(
      (res: Reservation) => res.id === id
    );
    this._reservations.splice(index, 1);
  }

  // actions
  // eslint-disable-next-line require-await
  @action
  public async updateInventory(inventory: Inventory): Promise<void> {
    // there would be an API call in here with an await
    if (inventory.id === 0) {
      this._inventoryId++;
      inventory.id = this._inventoryId;
      this.addInventory(inventory);
    } else {
      this.editInventory(inventory);
    }
  }

  // eslint-disable-next-line require-await
  @action public async getInventory(id: number): Promise<Inventory> {
    const inventory: Inventory = this._inventory.find(
      (inventory) => inventory.id === id
    )!;
    return inventory;
  }

  // eslint-disable-next-line require-await
  @action public async deleteInventory(id: number): Promise<void> {
    // Should check in the future if any reservations exist for this inventory
    this.deleteInventoryById(id);
  }

  // eslint-disable-next-line require-await
  @action
  public async updateReservation(reservation: Reservation): Promise<void> {
    // there would be an API call in here with an await
    if (reservation.id === 0) {
      this._reservationId++;
      reservation.id = this._reservationId;
      this.addReservation(reservation);
    } else {
      this.editReservation(reservation);
    }
  }

  // eslint-disable-next-line require-await
  @action public async getReservation(id: number): Promise<Reservation> {
    const reservation: Reservation = this._reservations.find(
      (reservation) => reservation.id === id
    )!;
    return reservation;
  }

  // eslint-disable-next-line require-await
  @action public async deleteReservation(id: number): Promise<void> {
    this.deleteReservationById(id);
  }

  /* private sortByTime<T>(items: Array<T>): Array<T> {
    return items.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      // times must be equal
      return 0;
    });
  } */
}
