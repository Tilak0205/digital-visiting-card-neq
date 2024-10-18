<template>
  <div class="card-container flex w-full justify-center items-center">
    <!-- Card Section -->
    <div class="card flex rounded-[20px] overflow-hidden" style="width: 450px; height: 250px;">
      <!-- Left Section (Diagonal Background for Name & Role) -->
      <div class="left-section bg-gradient-to-r from-purple-700 to-pink-500 text-white p-4 flex flex-col justify-center relative" style="flex: 1.5;">
        <!-- Diagonal Effect -->
        <div class="diagonal-clip bg-white absolute inset-0 transform rotate-6 origin-bottom-left" style="z-index: -1;"></div>
        <div>
          <h1 class="text-lg font-bold">{{ formData.fullName }}</h1>
          <p class="text-sm mt-1">{{ formData.role }}</p>
        </div>
      </div>

      <!-- Right Section (Contact Info with Icon-Based Layout) -->
      <div class="right-section bg-white flex flex-col justify-around p-4" style="flex: 2;">
        <div class="contact-details">
          <div class="flex items-center mb-2">
            <i class="fas fa-phone-alt text-purple-500 text-sm mr-2"></i>
            <p class="text-xs">{{ formData.phone }}</p>
          </div>
          <div class="flex items-center mb-2">
            <i class="fas fa-envelope text-purple-500 text-sm mr-2"></i>
            <p class="text-xs">{{ formData.email }}</p>
          </div>
          <div class="flex items-center">
            <i class="fas fa-map-marker-alt text-purple-500 text-sm mr-2"></i>
            <p class="text-xs">{{ formData.address }}</p>
          </div>
        </div>
        <div class="company-info text-right">
          <h2 class="text-base font-bold text-purple-500">{{ formData.company }}</h2>
          <p class="text-xs text-gray-500">"Your Success, Our Mission"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Template1 extends Vue {
  @Prop() formData!: any; // Receive formData as a prop
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.left-section {
  background: linear-gradient(to right, #6a0dad, #ff1493);
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.diagonal-clip {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  z-index: -1;
}

.right-section {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.company-info h2 {
  margin-bottom: 0;
}
</style>
