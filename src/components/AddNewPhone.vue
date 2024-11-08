<script setup>
import { NForm, NFormItem, NInput, NInputGroup, NImage, NButton } from 'naive-ui';

import { defineProps, ref, defineEmits, reactive } from 'vue';

const phone = reactive({
  name: '',
  brand: '',
  releaseDate: null,
  cost: '',
  img: '',
  color: null,
  screen: {
    id: '',
    resolution: null,
    size: null,
    screen: null,
    features: null,
    scanFrequency: null,
    type: null
  },
  camera: {
    mainCamera: '',
    selfieCamera: ''
  },
  processor: {
    chipset: '',
    cpu: '',
    gpu: ''
  },
  connection: {
    mobile_nfc: '',
    sim: null,
    os: '',
    network: null,
    wlan: '',
    bluetooth: '',
    gps: ''
  },
  storage: {
    ram: null,
    internalMemory: null,
    memoryCardSlot: ''
  },
  battery: {
    battery: '',
    charginTechnology: null,
    port: null
  },
  design: {
    size: '',
    weight: '',
    material: ''
  },
  otherInfor: {
    cooler: null,
    resistanceIndex: null,
    tech: null,
    soundTech: null,
    utilities: null,
    sensor: ''
  }
});

const emits = defineEmits(['closeAddPhone']);

const phoneImg = `${import.meta.env.VITE_CELLPHONES_URL}/${phone.img}`;

const closeAddPhoneHandler = () => {
  emits('closeAddPhone');
};

const newPhone = ref({});
const addPhoneHandler = () => {
  newPhone.value = phone;
  console.log(newPhone.value);
};
</script>

<template>
  <p class="edit-phone-title">Thêm điện thoại</p>
  <n-form ref="formRef" :model="phone">
    <div class="edit-phone-input-wrap">
      <n-image width="200" :src="phoneImg" />
      <n-form-item path="name" label="Tên điện thoại">
        <n-input v-model:value="phone.name" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="brand" label="Brand">
        <n-input v-model:value="phone.brand" type="text" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="releaseDate" label="Ngày phát hành">
        <n-input v-model:value="phone.releaseDate" type="text" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="cost" label="Giá tiền">
        <n-input v-model:value="phone.cost" type="text" @keydown.enter.prevent />
      </n-form-item>
    </div>
    <!-- Màn hình -->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Màn hình</p>
      <div>
        <n-form-item path="size" label="Kích thước màn hình">
          <n-input v-model:value="phone.screen.size" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="screen" label="Công nghệ màn hình">
          <n-input v-model:value="phone.screen.screen" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="resolution" label="Độ phân giải màn hình">
          <n-input v-model:value="phone.screen.resolution" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="features" label="Tính năng màn hình">
          <n-input v-model:value="phone.screen.features" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="scanFrequency" label="Tần số quét">
          <n-input v-model:value="phone.screen.scanFrequency" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="type" label="Kiểu màn hình">
          <n-input v-model:value="phone.screen.type" type="text" @keydown.enter.prevent />
        </n-form-item>
      </div>
    </div>
    <!-- Camera-->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Camera</p>
      <div>
        <n-form-item path="mainCamera" label="Camera sau">
          <n-input v-model:value="phone.camera.mainCamera" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="selfieCamera" label="Camera trước">
          <n-input v-model:value="phone.camera.selfieCamera" type="text" @keydown.enter.prevent />
        </n-form-item>
      </div>
    </div>
    <!-- Vi xử lý & Đồ họa-->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Vi xử lý & Đồ họa</p>
      <div>
        <n-form-item path="chipset" label="Chipset">
          <n-input v-model:value="phone.processor.chipset" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="gpu" label="GPU">
          <n-input v-model:value="phone.processor.gpu" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="cpu" label="CPU">
          <n-input v-model:value="phone.processor.cpu" type="text" @keydown.enter.prevent />
        </n-form-item>
      </div>
    </div>
    <!-- Giao tiếp & Kết nối-->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Giao tiếp & Kết nối</p>
      <div>
        <n-form-item path="mobile_nfc" label="Công nghệ NFC">
          <n-input v-model:value="phone.connection.mobile_nfc" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="sim" label="Thẻ SIM">
          <n-input v-model:value="phone.connection.sim" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="os" label="Hệ điều hành">
          <n-input v-model:value="phone.connection.os" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="wlan" label="WLAN">
          <n-input v-model:value="phone.connection.wlan" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="network" label="Hỗ trợ mạng">
          <n-input v-model:value="phone.connection.network" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="bluetooth" label="Hỗ trợ Bluetooth">
          <n-input v-model:value="phone.connection.bluetooth" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="gps" label="GPS">
          <n-input v-model:value="phone.connection.gps" type="text" @keydown.enter.prevent />
        </n-form-item>
      </div>
    </div>
    <!-- Lưu trữ -->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Lưu trữ</p>
      <div>
        <n-form-item path="ram" label="RAM">
          <n-input v-model:value="phone.storage.ram" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="internalMemory" label="Bộ nhớ trong">
          <n-input
            v-model:value="phone.storage.internalMemory"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="memoryCardSlot" label="Khe cắm thẻ nhớ">
          <n-input
            v-model:value="phone.storage.memoryCardSlot"
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
          <n-input v-model:value="phone.battery.battery" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="charginTechnology" label="Công nghệ sạc">
          <n-input
            v-model:value="phone.battery.charginTechnology"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="port" label="Cổng sạc">
          <n-input v-model:value="phone.battery.port" type="text" @keydown.enter.prevent />
        </n-form-item>
      </div>
    </div>
    <!-- Thiết kế & Trọng lượng -->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Thiết kế & Trọng lượng</p>
      <div>
        <n-form-item path="size" label="Kích thước">
          <n-input v-model:value="phone.design.size" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="weight" label="Trọng lượng">
          <n-input v-model:value="phone.design.weight" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="material" label="Chất liệu">
          <n-input v-model:value="phone.design.material" type="text" @keydown.enter.prevent />
        </n-form-item>
      </div>
    </div>
    <!-- Thông số khác -->
    <div class="edit-phone-input-wrap">
      <p class="edit-phone-label">Thông số khác</p>
      <div>
        <n-form-item path="cooler" label="Làm mát">
          <n-input v-model:value="phone.otherInfor.cooler" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="resistanceIndex" label="Chỉ số kháng nước">
          <n-input
            v-model:value="phone.otherInfor.resistanceIndex"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="tech" label="Công nghệ tiện ích">
          <n-input v-model:value="phone.otherInfor.tech" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="soundTech" label="Công nghệ âm thanh">
          <n-input v-model:value="phone.otherInfor.soundTech" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="utilities" label="Các loại tiện ích">
          <n-input v-model:value="phone.otherInfor.utilities" type="text" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="sensor" label="Các loại cảm biến">
          <n-input v-model:value="phone.otherInfor.sensor" type="text" @keydown.enter.prevent />
        </n-form-item>
      </div>
    </div>
    <div class="edit-phone-footer">
      <n-button @click="addPhoneHandler">Thêm</n-button>
      <n-button @click="closeAddPhoneHandler">Hủy</n-button>
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
