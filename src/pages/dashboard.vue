<script setup>
import {
  NDataTable,
  NButton,
  useMessage,
  useDialog,
  NModal,
  NCard,
  NInput,
  NInputGroup,
  NPagination
} from 'naive-ui';
import { h, ref, computed } from 'vue';

import DetailPhone from '@/components/DetailPhone.vue';
import EditPhone from '@/components/EditPhone.vue';

import { usePhoneStore } from '@/stores/phoneStore';

import editIcon from '@assets/icons/edit.svg';
import delIcon from '@assets/icons/del.svg';
import eyeIcon from '@assets/icons/eye.svg';

const dialog = useDialog();
const message = useMessage();
const phoneStore = usePhoneStore();
const checkedRowKeysRef = ref([]);

const phoneList = ref();
const brandList = ref();

phoneList.value = phoneStore.getAllPhone();
brandList.value = phoneStore.getAllBrand();

const searchValue = ref('');
// Lọc và tìm kiếm
const filteredData = computed(() => {
  const query = searchValue.value.toLowerCase();
  if (!query) {
    return phoneList.value;
  } else {
    return phoneList.value.filter((phone) => phone.name.toLowerCase().includes(query));
  }
});

const filteredDataLength = computed(() => filteredData.value.length);
// Phân trang
const currentPage = ref(1);
const pageSize = ref(5);
const pageSlot = ref(7);
const pageCount = computed(() => Math.ceil(filteredDataLength.value / pageSize.value));

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;

  return filteredData.value.slice(start, end);
});

const handlePageChange = (page) => {
  currentPage.value = page;
};

const phoneColumns = [
  {
    type: 'selection',
    options: ['all', 'none']
  },
  {
    title: 'Name',
    key: 'name',
    sorter: 'default'
  },
  {
    title: 'Image',
    key: 'image',
    render(value) {
      return h('div', { class: 'phone-image-wrap' }, [
        h('img', {
          src: `${import.meta.env.VITE_CELLPHONES_URL}/${value.image}`,
          class: 'phone-image'
        })
      ]);
    }
  },
  {
    title: 'Brand',
    key: 'brand',
    sorter: 'default',
    filterOptions: brandList.value,
    filter(value) {
      return !!~row.brand.indexOf(value.toString());
    }
  },
  {
    title: 'Cost',
    key: 'cost',
    filterOptions: [
      {
        label: 'Not price yet',
        value: 'Not price yet'
      },
      {
        label: 'Has price',
        value: 'Has price'
      }
    ],
    filter(value, row) {
      if (value.toString() === 'Not price yet') {
        return !!~row.cost.indexOf(value.toString());
      } else {
        return !~row.cost.indexOf('Not price yet');
      }
    },
    sorter(rowA, rowB) {
      return rowA.cost - rowB.cost;
    }
  },
  {
    title: 'Action',
    key: 'action',
    render(row) {
      return h('div', [
        h(
          NButton,
          {
            onClick: () => viewInforPhone(row)
          },
          {
            icon: () => h('img', { title: 'Phone Infor', src: eyeIcon, alt: 'Edit', class: 'icon' })
          }
        ),
        h(
          NButton,
          {
            onClick: () => editPhone(row),
            style: { marginLeft: '8px' }
          },
          {
            icon: () => h('img', { title: 'Edit Phone', src: editIcon, alt: 'Edit', class: 'icon' })
          }
        ),
        h(
          NButton,
          {
            onClick: () => deletePhoneHandler(row),
            style: { marginLeft: '8px' }
          },
          {
            default: () =>
              h('img', { title: 'Delete Phone', src: delIcon, alt: 'Close', class: 'icon' })
          }
        )
      ]);
    }
  }
];

const detailPhone = ref({});
const showDetailPhone = ref(false);
const viewInforPhone = (row) => {
  showDetailPhone.value = true;
  detailPhone.value = phoneStore.getDetailPhone(row.id);
};

const showEditPhone = ref(false);
const editPhone = (row) => {
  showEditPhone.value = true;
  detailPhone.value = phoneStore.getDetailPhone(row.id);
};

const deletePhoneHandler = () => {
  dialog.warning({
    title: 'Delete phone',
    content: `Do you want to delete this phone?`,
    positiveText: 'Yes',
    negativeText: 'Cancel',
    onPositiveClick: async () => {
      message.success('Delete phone successfully');
    },
    onNegativeClick: () => {
      message.info('Cancel delete phone');
    }
  });
};

// const searchPhoneByNameHandler = () => {
//   if (searchValue.value === '') {
//     message.info('Please enter your search!');
//   } else {
//     phoneList.value = phoneList.value.filter((phone) =>
//       phone.name.toLowerCase().includes(searchValue.value)
//     );
//   }
// };

// const resetPhoneListHandler = () => {
//   phoneList.value = phoneStore.getAllPhone();
// };
</script>

<template>
  <p class="title">Danh sách điện thoại</p>
  <div class="phone-list-wrap">
    <n-input-group>
      <n-input
        v-model:value="searchValue"
        type="text"
        placeholder="Search by name here..."
        style="width: 400px; margin-bottom: 16px; margin-right: 16px"
      />
      <!-- <n-button @click="searchPhoneByNameHandler">Search</n-button>
      <n-button @click="resetPhoneListHandler">🔃</n-button> -->
    </n-input-group>
    <n-data-table
      v-model:checked-row-keys="checkedRowKeysRef"
      size="large"
      :columns="phoneColumns"
      :data="paginatedData"
    />
    <div class="phone-pagination">
      <n-pagination
        v-model:page="currentPage"
        :page-count="pageCount"
        :page-slot="pageSlot"
        show-quick-jumper
        @update:page="handlePageChange"
      />
    </div>
  </div>
  <n-modal v-model:show="showDetailPhone" style="margin-top: 50px; margin-bottom: 50px">
    <n-card style="width: 800px" :bordered="true" size="huge" role="dialog" aria-modal="true">
      <template #header-extra>
        <span style="cursor: pointer" @click="showDetailPhone = false">X</span>
      </template>
      <DetailPhone :detail-phone="detailPhone" />
    </n-card>
  </n-modal>
  <n-modal v-model:show="showEditPhone" style="margin-top: 50px; margin-bottom: 50px">
    <n-card style="width: 90%" :bordered="true" size="huge" role="dialog" aria-modal="true">
      <template #header-extra>
        <span style="cursor: pointer" @click="showDetailPhone = false">X</span>
      </template>
      <EditPhone :detail-phone="detailPhone" />
    </n-card>
  </n-modal>
</template>

<style lang="scss">
.title {
  font-size: 28px;
  font-weight: 700;
  margin-left: 16px;
  margin-top: 16px;
}
.phone-list-wrap {
  padding: 32px;
}
.phone-image-wrap {
  width: 100px;
  height: 100px;
  .phone-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.phone-pagination {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}
</style>
