<script setup>
import { NForm, NFormItem, NInput, NInputGroup, NImage, NButton, useMessage } from 'naive-ui';
import { usePhoneStore } from '@/stores/phoneStore';

import { defineProps, ref, defineEmits } from 'vue';

const phoneStore = usePhoneStore();
const props = defineProps({
  detailPhone: {}
});
const message = useMessage();
const emits = defineEmits(['closeEditPhone', 'closeEditPhoneSuccess']);

const closeEditPhoneHandler = () => {
  emits('closeEditPhone');
};

const closeEditPhoneSuccessHandler = () => {
  emits('closeEditPhoneSuccess');
};

const editedPhone = ref({});
const editPhoneHandler = async () => {
  editedPhone.value = props.detailPhone;
  console.log(editedPhone.value);
  try {
    const res = await phoneStore.updatePhone(editedPhone.value);
    if (res) {
      message.success('Sửa thành công!');
      closeEditPhoneSuccessHandler();
    }
  } catch (error) {
    message.error('Sửa thất bại!');
  }
};
</script>

<template>
  <p class="edit-phone-title">Sửa thông tin điện thoại</p>
  <n-form ref="formRef" :model="props.detailPhone">
    <div class="edit-phone-input-wrap">
      <n-image width="200" :src="props.detailPhone.img" v-model="props.detailPhone.img" />
      <n-form-item path="img" label="Đường dẫn ảnh">
        <n-input v-model:value="props.detailPhone.img" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="name" label="Tên điện thoại">
        <n-input v-model:value="props.detailPhone.name" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="brand" label="Brand">
        <n-input v-model:value="props.detailPhone.brand" type="text" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="releaseDate" label="Ngày phát hành">
        <n-input v-model:value="props.detailPhone.releaseDate" type="text" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="cost" label="Giá tiền">
        <n-input v-model:value="props.detailPhone.cost" type="text" @keydown.enter.prevent />
      </n-form-item>
    </div>
    <!-- Màn hình -->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Màn hình</p>
      <div>
        <n-form-item path="size" label="Kích thước màn hình">
          <n-input
            v-model:value="props.detailPhone.screen.size"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="screen" label="Công nghệ màn hình">
          <n-input
            v-model:value="props.detailPhone.screen.screen"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="resolution" label="Độ phân giải màn hình">
          <n-input
            v-model:value="props.detailPhone.screen.resolution"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="features" label="Tính năng màn hình">
          <n-input
            v-model:value="props.detailPhone.screen.features"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="scanFrequency" label="Tần số quét">
          <n-input
            v-model:value="props.detailPhone.screen.scanFrequency"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="type" label="Kiểu màn hình">
          <n-input
            v-model:value="props.detailPhone.screen.type"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
      </div>
    </div>
    <!-- Camera-->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Camera</p>
      <div>
        <n-form-item path="mainCamera" label="Camera sau">
          <n-input
            v-model:value="props.detailPhone.camera.mainCamera"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="selfieCamera" label="Camera trước">
          <n-input
            v-model:value="props.detailPhone.camera.selfieCamera"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
      </div>
    </div>
    <!-- Vi xử lý & Đồ họa-->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Vi xử lý & Đồ họa</p>
      <div>
        <n-form-item path="chipset" label="Chipset">
          <n-input
            v-model:value="props.detailPhone.processor.chipset"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="gpu" label="GPU">
          <n-input
            v-model:value="props.detailPhone.processor.gpu"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="cpu" label="CPU">
          <n-input
            v-model:value="props.detailPhone.processor.cpu"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
      </div>
    </div>
    <!-- Giao tiếp & Kết nối-->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Giao tiếp & Kết nối</p>
      <div>
        <n-form-item path="mobile_nfc" label="Công nghệ NFC">
          <n-input
            v-model:value="props.detailPhone.connection.mobile_nfc"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="sim" label="Thẻ SIM">
          <n-input
            v-model:value="props.detailPhone.connection.sim"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="os" label="Hệ điều hành">
          <n-input
            v-model:value="props.detailPhone.connection.os"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="wlan" label="WLAN">
          <n-input
            v-model:value="props.detailPhone.connection.wlan"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="network" label="Hỗ trợ mạng">
          <n-input
            v-model:value="props.detailPhone.connection.network"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="bluetooth" label="Hỗ trợ Bluetooth">
          <n-input
            v-model:value="props.detailPhone.connection.bluetooth"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="gps" label="GPS">
          <n-input
            v-model:value="props.detailPhone.connection.gps"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
      </div>
    </div>
    <!-- Lưu trữ -->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Lưu trữ</p>
      <div>
        <n-form-item path="ram" label="RAM">
          <n-input
            v-model:value="props.detailPhone.storage.ram"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="internalMemory" label="Bộ nhớ trong">
          <n-input
            v-model:value="props.detailPhone.storage.internalMemory"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="memoryCardSlot" label="Khe cắm thẻ nhớ">
          <n-input
            v-model:value="props.detailPhone.storage.memoryCardSlot"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
      </div>
    </div>
    <!-- Pin & Công nghệ sạc -->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Pin & Công nghệ sạc</p>
      <div>
        <n-form-item path="battery" label="Pin">
          <n-input
            v-model:value="props.detailPhone.battery.battery"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="charginTechnology" label="Công nghệ sạc">
          <n-input
            v-model:value="props.detailPhone.battery.charginTechnology"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="port" label="Cổng sạc">
          <n-input
            v-model:value="props.detailPhone.battery.port"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
      </div>
    </div>
    <!-- Thiết kế & Trọng lượng -->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Thiết kế & Trọng lượng</p>
      <div>
        <n-form-item path="size" label="Kích thước">
          <n-input
            v-model:value="props.detailPhone.design.size"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="weight" label="Trọng lượng">
          <n-input
            v-model:value="props.detailPhone.design.weight"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="material" label="Chất liệu">
          <n-input
            v-model:value="props.detailPhone.design.material"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
      </div>
    </div>
    <!-- Thông số khác -->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Thông số khác</p>
      <div>
        <n-form-item path="cooler" label="Làm mát">
          <n-input
            v-model:value="props.detailPhone.otherInfor.cooler"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="resistanceIndex" label="Chỉ số kháng nước">
          <n-input
            v-model:value="props.detailPhone.otherInfor.resistanceIndex"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="tech" label="Công nghệ tiện ích">
          <n-input
            v-model:value="props.detailPhone.otherInfor.tech"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="soundTech" label="Công nghệ âm thanh">
          <n-input
            v-model:value="props.detailPhone.otherInfor.soundTech"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="utilities" label="Các loại tiện ích">
          <n-input
            v-model:value="props.detailPhone.otherInfor.utilities"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="sensor" label="Các loại cảm biến">
          <n-input
            v-model:value="props.detailPhone.otherInfor.sensor"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
      </div>
    </div>
    <div class="edit-phone-footer">
      <n-button @click="editPhoneHandler" type="success">Sửa</n-button>
      <n-button @click="closeEditPhoneHandler">Hủy</n-button>
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
.edit-phone-footer {
  display: flex;
  gap: 16px;
  justify-content: center;
}
</style>
