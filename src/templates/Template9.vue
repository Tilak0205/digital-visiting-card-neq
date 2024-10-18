<template>
  <div class="card-container flex w-full justify-center items-center">
    <!-- Card Section -->
    <div class="card flex rounded-[20px] overflow-hidden" style="width: 450px; height: 250px; position: relative;">
      <!-- Left Section (Personal Info) -->
      <div class="left-section bg-teal-600 text-white p-4 flex flex-col justify-between" style="flex: 1.5;">
        <div class="personal-info">
          <h1 class="text-xl font-bold">{{ formData.fullName }}</h1>
          <p class="text-sm mt-1">{{ formData.role }}</p>
        </div>
        <div class="contact-details mt-4">
          <div class="flex items-center mb-2">
            <i class="fas fa-phone-alt text-white text-sm mr-2"></i>
            <p class="text-xs">{{ formData.phone }}</p>
          </div>
          <div class="flex items-center mb-2">
            <i class="fas fa-envelope text-white text-sm mr-2"></i>
            <p class="text-xs">{{ formData.email }}</p>
          </div>
          <div class="flex items-center">
            <i class="fas fa-map-marker-alt text-white text-sm mr-2"></i>
            <p class="text-xs">{{ formData.address }}</p>
          </div>
        </div>
      </div>

      <!-- Right Section (Diagonal Cut, Company Info) -->
      <div class="right-section relative p-4 flex flex-col justify-center items-center" style="flex: 2; background-color: #f1f5f9;">
        <!-- Diagonal Shape Cut -->
        <div class="diagonal-shape bg-teal-600 absolute inset-0 transform -rotate-12 origin-bottom-left" style="z-index: -1; height: 100%; width: 110%;"></div>
        
        <!-- Company Information -->
        <div class="company-info relative z-10 text-center">
          <h2 class="text-lg font-bold text-teal-600">{{ formData.company }}</h2>
          <p class="text-xs mt-1 text-gray-500">"Committed to Excellence"</p>
        </div>
        
        <!-- Circular Design Element -->
        <div class="circle bg-teal-600 rounded-full absolute" style="width: 80px; height: 80px; bottom: -30px; right: -30px;"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Template9 extends Vue {
  @Prop() formData!: any; // Receive formData as a prop
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.left-section {
  background-color: #0f766e; /* Teal */
  color: white;
}

.right-section {
  background-color: #f1f5f9; /* Light Gray */
  position: relative;
  overflow: hidden;
}

.diagonal-shape {
  background-color: #0f766e; /* Teal */
  transform: rotate(-12deg);
  position: absolute;
  z-index: -1;
}

.circle {
  position: absolute;
  background-color: #0f766e; /* Teal */
  bottom: -30px;
  right: -30px;
}
</style>
