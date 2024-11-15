<script setup>
import { ref, watch, onUnmounted } from 'vue';
import Chart from 'chart.js/auto';

// Định nghĩa props
const props = defineProps({
  phoneBrand: {
    type: Array,
    required: true,
    default: () => []
  }
});

const chartCanvas = ref(null); // Tham chiếu canvas
let chartInstance = null; // Lưu trữ instance của Chart.js

// Hàm tạo hoặc cập nhật biểu đồ
const renderChart = () => {
  if (!chartCanvas.value || !props.phoneBrand.length) return;

  // Hủy biểu đồ cũ nếu đã tồn tại
  if (chartInstance) {
    chartInstance.destroy();
  }

  // Tạo biểu đồ mới
  chartInstance = new Chart(chartCanvas.value, {
    type: 'bar',
    data: {
      labels: props.phoneBrand.map((br) => br.brand),
      datasets: [
        {
          label: 'Quantity of Phone By Brand',
          data: props.phoneBrand.map((br) => br.count),
          backgroundColor: 'rgba(20, 100, 244, 0.2)',
          borderColor: 'rgba(20, 100, 244, 1)',
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          barPercentage: 1, // Chiều rộng của cột (tỷ lệ với không gian danh mục)
          categoryPercentage: 0.8 // Tỷ lệ không gian giữa các cột
        }
      },
      scales: {
        y: {
          min: 0 // Giá trị tối thiểu của trục Y
        }
      }
    }
  });
};

// Theo dõi props.phoneBrand để cập nhật biểu đồ
watch(props.phoneBrand, renderChart);

// Hủy biểu đồ khi component bị tháo
onUnmounted(() => {
  if (chartInstance) {
    chartInstance.destroy();
  }
});
</script>

<template>
  <div v-if="props.phoneBrand">
    <!-- Canvas để Chart.js render biểu đồ -->
    <canvas v-if="props.phoneBrand" id="acquisitions" ref="chartCanvas"></canvas>
  </div>
</template>

<style scoped>
/* Tùy chỉnh kích thước canvas nếu cần */
canvas {
  width: 100%;
  max-width: 100%;
}
</style>
