<script setup>
import { NForm, NFormItem, NInput, NInputGroup, NImage } from 'naive-ui';

import { defineProps, ref } from 'vue';
const model = ref({});

const props = defineProps({
  detailPhone: {}
});

const phoneImg = `${process.env.VITE_CELLPHONES_URL}/${props.detailPhone.img}`;
</script>

<template>
  <p class="edit-phone-title">Sửa thông tin điện thoại</p>
  <n-form ref="formRef" :model="model">
    <div class="edit-phone-input-wrap">
      <n-image width="200" :src="phoneImg" />
      <n-form-item path="name" label="Tên điện thoại">
        <n-input v-model:value="model.age" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="brand" label="Brand">
        <n-input v-model:value="model.brand" type="text" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="releaseDate" label="Ngày phát hành">
        <n-input v-model:value="model.releaseDate" type="text" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="cost" label="Giá tiền">
        <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
      </n-form-item>
    </div>
    <!-- Màn hình -->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Màn hình</p>
      <div>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
      </div>
    </div>
    <!-- Camera-->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Camera</p>
      <div>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
      </div>
    </div>
    <!-- Vi xử lý & Đồ họa-->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Vi xử lý & Đồ họa</p>
      <div>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
      </div>
    </div>
    <!-- Giao tiếp & Kết nối-->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Giao tiếp & Kết nối</p>
      <div>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
      </div>
    </div>
    <!-- Lưu trữ -->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Giao tiếp & Kết nối</p>
      <div>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
      </div>
    </div>
    <!-- Pin & Công nghệ sạc -->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Pin & Công nghệ sạc</p>
      <div>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
      </div>
    </div>
    <!-- Thiết kế & Trọng lượng -->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Thiết kế & Trọng lượng</p>
      <div>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
      </div>
    </div>
    <!-- Thông số khác -->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Thông số khác</p>
      <div>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cost" label="Giá tiền">
          <n-input v-model:value="model.cost" type="text" @keydown.enter.prevent />
        </n-form-item>
      </div>
    </div>
  </n-form>
</template>

<style lang="scss" scoped>
.edit-phone-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
}
.edit-phone-input-wrap {
  border: 1px solid;
  padding: 8px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  .edit-phone-label {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  > div {
    margin-left: 8px;
  }
}
</style>
