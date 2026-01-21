import { defineStore } from "pinia";

const useCityStore = defineStore("city", {
  state: () => ({
    citys: []
  }),
  getters: {
    cityInfo() {
      return this.cityName;
    },
  },
});

export default useCityStore;