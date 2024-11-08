<script setup>
import { NModalProvider, NConfigProvider, NMessageProvider, NDialogProvider } from 'naive-ui';
// const themeOverrides = {
//   DataTable: {
//     fontSizeMedium: '20px'
//   }
// };
</script>

<template>
  <n-config-provider>
    <n-message-provider :max="5">
      <n-dialog-provider>
        <n-modal-provider>
          <router-view></router-view>
        </n-modal-provider>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped></style>
