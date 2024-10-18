<template>
  <div class="card-container flex w-full justify-center items-center">
    <!-- Card Section -->
    <div class="card flex rounded-[20px] overflow-hidden" style="width: 450px; height: 250px;">
      <!-- Left Section (Company Logo & Info) -->
      <div class="left-section bg-teal-500 text-white p-4 flex flex-col justify-between" style="flex: 1;">
        <div class="logo-section flex justify-center">
          <div class="circle-logo bg-white flex items-center justify-center rounded-full" style="width: 60px; height: 60px;">
            <i class="fas fa-briefcase text-2xl text-teal-500"></i>
          </div>
        </div>
        <div class="company-info mt-4 text-center">
          <h2 class="text-lg font-bold">{{ formData.company }}</h2>
          <p class="text-sm">"Your Trusted Partner"</p>
        </div>
      </div>

      <!-- Right Section (Personal Details) -->
      <div class="right-section bg-white flex flex-col justify-center p-4" style="flex: 2;">
        <div>
          <h1 class="text-xl font-bold text-teal-500">{{ formData.fullName }}</h1>
          <p class="text-sm text-gray-700">{{ formData.role }}</p>
        </div>
        <div class="contact-details mt-4">
          <div class="flex items-center mb-2">
            <i class="fas fa-phone-alt text-teal-500 text-sm mr-2"></i>
            <p class="text-xs">{{ formData.phone }}</p>
          </div>
          <div class="flex items-center mb-2">
            <i class="fas fa-envelope text-teal-500 text-sm mr-2"></i>
            <p class="text-xs">{{ formData.email }}</p>
          </div>
          <div class="flex items-center">
            <i class="fas fa-map-marker-alt text-teal-500 text-sm mr-2"></i>
            <p class="text-xs">{{ formData.address }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Template6 extends Vue {
  @Prop() formData!: any; // Receive formData as a prop
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.left-section {
  background-color: #1abc9c;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-section {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.circle-logo {
  z-index: 10;
  width: 60px;
  height: 60px;
}

.company-info {
  text-align: center;
}

.contact-details p {
  margin: 0;
}
</style>
