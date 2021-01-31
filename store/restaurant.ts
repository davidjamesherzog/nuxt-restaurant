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
  private _times: Array<string> = [
    '04:00',
    '04:15',
    '04:30',
    '04:45',
    '05:00',
    '05:15',
    '05:30',
    '05:45',
    '06:00',
    '06:15',
    '06:30',
    '06:45',
    '07:00',
    '07:15',
    '07:30',
    '07:45',
    '08:00',
    '08:15',
    '08:30',
    '08:45',
    '09:00',
    '09:15',
    '09:30',
    '09:45',
    '10:00',
    '10:15',
    '10:30',
    '10:45'
  ];

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

  // eslint-disable-next-line require-await
  @action public async getAvailableTimes(): Promise<Array<string>> {
    // This function should be achieved via a SQL statement in an API call

    // take reservations and come up with total count for each time
    const countReservations = (arr: any) =>
      arr.reduce((prev: any, curr: any) => {
        prev[curr.time] = ++prev[curr.time] || 1;
        return prev;
      }, {});
    const totalCount: any = countReservations(this._reservations);

    // look for reservations exist for specific time and if they exceed the limit
    return this._times.filter((time: string) => {
      const timeInventory: Array<Inventory> = this._inventory.filter(
        (inventory: Inventory) => inventory.time === time
      );
      if (!timeInventory[0]) {
        return false;
      }

      const reservations: number = totalCount[time];
      if (reservations && reservations >= timeInventory[0].reservations) {
        return false;
      }
      return time;
    });
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
