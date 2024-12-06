<script setup>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ref, onMounted } from 'vue';

import phoneList from '@/stores/phoneList';
import AppContentHeading from '../AppContentHeading.vue';
import AppPhone from '../AppPhone.vue';

// Đăng ký ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const randomPhoneList = phoneList.slice(0, 8);
const bestSellerListRef = ref(null);

onMounted(() => {
  gsap.from(bestSellerListRef.value, {
    opacity: 0,
    y: 400,
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: bestSellerListRef.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
});
</script>

<template>
  <div class="best-seller-wrap">
    <AppContentHeading :show-action="false" class="content-heading">
      <template #title> Sản phẩm nổi bật </template>
      <template #desc> Lorem ipsum dolor sit amet consectetur adipisicing elit. </template>
    </AppContentHeading>
    <div class="best-seller-list" ref="bestSellerListRef">
      <AppPhone
        v-for="phone in randomPhoneList"
        :key="phone.id"
        :phone="phone"
        style="width: 22%"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.best-seller-wrap {
  padding: 96px 200px;
  .content-heading {
    justify-content: center;
    text-align: center;
  }
  .best-seller-list {
    margin-top: 48px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 32px 16px;
  }
}
</style>
