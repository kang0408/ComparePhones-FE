<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <header>
    <div class="logo" @click="router.push('/')">
      <img src="../../assets/logo.png" alt="" />
    </div>
    <p class="title">Mobile Manager</p>
    <!-- <div class="avatar">
      <img src="../assets/avatar.jpeg" alt="" />
    </div> -->
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  padding: 16px 32px;
  // justify-content: space-between;
  gap: 32px;
  align-items: center;
  border-bottom: 2px solid $color-primary;
  background: $color-primary;
  .logo {
    width: 60px;
    height: 60px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .title {
    font-size: 36px;
    font-weight: 700;
    margin-top: 0;
    margin-left: 0;
    color: #fff;
  }
  .avatar {
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
}
</style>
