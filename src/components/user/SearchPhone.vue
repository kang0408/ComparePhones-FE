<script setup>
import { NCheckbox } from 'naive-ui';
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

import brandList from '@/stores/brandList';
import phoneList from '@/stores/phoneList';

import AppPhone from './AppPhone.vue';
import AppButton from './AppButton.vue';

const brands = brandList;
const randomPhoneList = phoneList.slice(0, 8);

const brandValue = ref(false);
const searchInputRef = ref(null);
const filtersRef = ref(null);
const phonesRef = ref(null);

onMounted(() => {
  gsap.from(searchInputRef.value, {
    opacity: 0,
    duration: 1.5,
    y: -50,
    ease: 'power2.out'
  });
  gsap.from(filtersRef.value, {
    opacity: 0,
    duration: 1.5,
    x: -400,
    ease: 'power2.out'
  });
  gsap.from(phonesRef.value, {
    opacity: 0,
    duration: 1.5,
    y: 400,
    ease: 'power2.out'
  });
});
</script>

<template>
  <div class="search">
    <div class="search-input" ref="searchInputRef">
      <input type="text" />
      <AppButton class="custom-btn">Tìm kiếm</AppButton>
    </div>
    <div class="filter-options" ref="filtersRef">
      <div class="brands">
        <p class="label">Hãng điện thoại</p>
        <n-checkbox v-for="(brand, index) in brands" :key="index" v-model:check="brandValue">
          {{ brand.brand }}</n-checkbox
        >
      </div>
      <AppButton class="custom-btn">Lọc</AppButton>
    </div>
    <div class="phones" ref="phonesRef">
      <AppPhone
        v-for="phone in randomPhoneList"
        :key="phone.id"
        :phone="phone"
        style="width: 100%"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 50px 1fr;
  grid-row-gap: 36px;
  color: $text-color;
  .search-input {
    grid-column: span 2;
    display: flex;
    .custom-btn {
      width: max-content;
      border-radius: 0;
      flex: 1;
    }
    input {
      width: 88%;
      padding: 0 16px;
      border: 1px solid;
      border-right: none;
    }
  }
  .filter-options {
    .label {
      font-size: 20px;
      font-weight: 600;
    }
    .brands {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 16px;
    }
    .custom-btn {
      padding: 8px 32px;
      margin-top: 16px;
      font-size: 16px;
    }
  }
  .phones {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    // grid-template-rows: repeat(4, 1fr);
    grid-gap: 36px;
  }
}
</style>
