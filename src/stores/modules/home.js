import { defineStore } from "pinia";
import { getHomeHotSuggesst } from "@/services";

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: []
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHomeHotSuggesst();
      this.hotSuggests = res.data;
    }
  }
})

export default useHomeStore;