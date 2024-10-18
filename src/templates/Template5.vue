<template>
  <div class="card-container flex w-full justify-center items-center">
    <!-- Card Section -->
    <div class="card flex rounded-[20px] overflow-hidden" style="width: 450px; height: 250px;">
      <!-- Left Section (Personal Details) -->
      <div class="left-section bg-blue-900 text-white p-4 flex flex-col justify-between" style="flex: 1.5;">
        <div>
          <h1 class="text-lg font-bold text-yellow-500">{{ formData.fullName }}</h1>
          <p class="text-sm mt-1">{{ formData.role }}</p>
        </div>
        <div class="contact-details mt-4">
          <div class="flex items-center mb-2">
            <i class="fas fa-phone-alt text-yellow-500 text-sm mr-2"></i>
            <p class="text-xs">{{ formData.phone }}</p>
          </div>
          <div class="flex items-center mb-2">
            <i class="fas fa-envelope text-yellow-500 text-sm mr-2"></i>
            <p class="text-xs">{{ formData.email }}</p>
          </div>
          <div class="flex items-center">
            <i class="fas fa-map-marker-alt text-yellow-500 text-sm mr-2"></i>
            <p class="text-xs">{{formData.address}}</p>
          </div>
        </div>
      </div>

      <!-- Right Section (Company Logo & Name) -->
      <div class="right-section bg-white flex flex-col justify-center items-center relative" style="flex: 3;">
        <!-- Curved shape -->
        <div class="curve bg-yellow-500 absolute h-full" style="width: 60px; top: 0; right: 0; border-top-left-radius: 125px; border-bottom-left-radius: 125px;"></div>

        <!-- Circular Logo Placeholder -->
        <div class="circle-logo bg-yellow-500 flex items-center justify-center rounded-full" style="width: 50px; height: 50px;">
          <i class="fas fa-circle text-xl text-white"></i> <!-- Placeholder for logo -->
        </div>

        <!-- Company Name and Tagline -->
        <div class="text-center mt-2">
          <h2 class="text-base font-bold text-yellow-500">{{formData.company}}</h2>
          <p class="text-xs text-gray-500">TAG LINE GOES HERE</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class template5 extends Vue {
  @Prop() formData!: any; // Receive formData as prop
}
</script>

<style scoped>

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.left-section {
  background-color: #0d2546;
}

.right-section {
  position: relative;
}

.curve {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}

.circle-logo {
  z-index: 10;
}
</style>
