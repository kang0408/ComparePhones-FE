import { defineStore } from 'pinia';

export const usePhoneCompareStore = defineStore('phoneCompare', {
  state: () => ({
    phoneCompareList: []
  }),
  actions: {
    addPhoneCompare(phone) {
      return this.phoneCompareList.push(phone);
    },
    removePhoneCompare(name) {
      const index = this.phoneCompareList.findIndex((item) => item.name === name);
      return this.phoneCompareList.splice(index, 1);
    }
  }
});
