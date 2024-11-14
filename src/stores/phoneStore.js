import { defineStore } from 'pinia';
import phoneList from './phoneList';
import { api } from '@api/axios';

export const usePhoneStore = defineStore('phone', {
  state: () => ({
    pagination: {},
    allPhones: [],
    allBrands: [],
    detailPhone: {}
  }),
  actions: {
    async getPhone() {
      try {
        const response = await api.get('/phone');

        this.allPhones = response.data.data;
        this.pagination = response.data.data.meta;
      } catch (error) {
        return error;
      }
      return this.allPhones;
    },
    async getDetailPhone(phoneName) {
      try {
        const response = await api.get('/phone/name', { params: { name: phoneName } });

        this.detailPhone = response.data.data[0];
      } catch (error) {
        return error;
      }
      return this.detailPhone;
    },
    getAllBrand() {
      this.allPhones.forEach((phone) => {
        const newBrand = {};
        newBrand.label = phone.brand;
        newBrand.value = phone.brand;

        if (this.allBrands.length === 0) this.allBrands.push(newBrand);
        else {
          const hasBrand = this.allBrands.some((brand) => brand.value === newBrand.value);
          if (!hasBrand) this.allBrands.push(newBrand);
        }
      });

      return this.allBrands;
    },
    async updatePhone(editedPhone) {
      try {
        const response = await api.put('/phone', editedPhone);

        console.log(response);
        return response;
      } catch (error) {
        return error;
      }
    },
    async addNewPhone(newPhone) {
      try {
        const response = await api.post('/phone', newPhone);

        return response;
      } catch (error) {
        return error;
      }
    },
    async deletePhone(id) {
      const response = await api.delete('/phone', { params: { phoneId: id } });
      return response;
    }
  }
});
