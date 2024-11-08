import { defineStore } from 'pinia';
import phoneList from './phoneList';

export const usePhoneStore = defineStore('phone', {
  state: () => ({
    allPhones: [],
    allBrands: [],
    detailPhone: {}
  }),
  actions: {
    getAllPhone() {
      phoneList.forEach((phone) => {
        const newPhone = {};
        newPhone.id = phone.id;
        newPhone.name = phone.name;
        newPhone.image = phone.img;
        newPhone.brand = phone.brand;
        newPhone.cost = phone.cost;

        this.allPhones.push(newPhone);
      });
      return this.allPhones;
    },
    getDetailPhone(phoneId) {
      return (this.detailPhone = phoneList.find((phone) => phone.id === phoneId));
    },
    getAllBrand() {
      phoneList.forEach((phone) => {
        const newBrand = {};
        newBrand.label = phone.brand;
        newBrand.value = phone.brand;

        this.allBrands.push(newBrand);
      });

      return this.allBrands;
    }
  }
});
