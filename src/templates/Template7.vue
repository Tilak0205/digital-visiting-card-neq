<template>
  <div class="card-container flex w-full justify-center items-center">
    <!-- Card Section -->
    <div class="card flex rounded-[20px] overflow-hidden">
      <!-- Left Section (Name & Role) -->
      <div class="left-section bg-purple-800 text-white p-4 flex flex-col justify-center" style="flex: 1;">
        <div>
          <h1 class="text-xl font-bold">{{ formData.fullName }}</h1>
          <p class="text-sm mt-1">{{ formData.role }}</p>
        </div>
      </div>

      <!-- Right Section (Contact Info & Company) -->
      <div class="right-section bg-gray-50 relative p-4" style="flex: 2;">
        <!-- Circular Element in the center -->
        <div class="circle-shape absolute top-0 right-0 w-[100px] h-[100px] rounded-full bg-purple-500 opacity-20"></div>
        <div class="contact-details text-gray-700">
          <div class="flex items-center mb-2">
            <i class="fas fa-phone-alt text-purple-600 text-sm mr-2"></i>
            <p class="text-xs">{{ formData.phone }}</p>
          </div>
          <div class="flex items-center mb-2">
            <i class="fas fa-envelope text-purple-600 text-sm mr-2"></i>
            <p class="text-xs">{{ formData.email }}</p>
          </div>
          <div class="flex items-center">
            <i class="fas fa-map-marker-alt text-purple-600 text-sm mr-2"></i>
            <p class="text-xs">{{ formData.address }}</p>
          </div>
        </div>
        <div class="company-info text-right mt-4">
          <h2 class="text-base font-bold text-purple-600">{{ formData.company }}</h2>
          <p class="text-xs">"Innovation at Heart"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Template7 extends Vue {
  @Prop() formData!: any; // Receive formData as a prop
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 450px;
  height: 250px;
}
@media (max-width: 768px) { /* Adjust for screens smaller than 768px */
  .card {
    width: 350px; /* Set width to 350px for mobile view */
  }
}

.left-section {
  background-color: #6b21a8; /* Deep Purple */
  color: white;
}

.circle-shape {
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 0.2;
}
</style>
