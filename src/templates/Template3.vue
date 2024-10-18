<template>
  <div class="card-container flex w-full justify-center items-center">
    <!-- Card Section -->
    <div class="card flex rounded-[20px] overflow-hidden" style="width: 450px; height: 250px;">
      <!-- Left Section (Name & Role) -->
      <div class="left-section bg-gradient-to-br from-blue-600 to-blue-400 text-white p-4 flex flex-col justify-center" style="flex: 1;">
        <div>
          <h1 class="text-xl font-bold">{{ formData.fullName }}</h1>
          <p class="text-sm mt-1">{{ formData.role }}</p>
        </div>
      </div>

      <!-- Right Section (Contact Info) -->
      <div class="right-section bg-white p-4 relative" style="flex: 2;">
        <!-- Triangle shape in the corner -->
        <div class="triangle-shape absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-blue-600 border-t-[60px] border-t-transparent"></div>
        <div class="contact-details text-gray-700">
          <div class="flex items-center mb-2">
            <i class="fas fa-phone-alt text-blue-600 text-sm mr-2"></i>
            <p class="text-xs">{{ formData.phone }}</p>
          </div>
          <div class="flex items-center mb-2">
            <i class="fas fa-envelope text-blue-600 text-sm mr-2"></i>
            <p class="text-xs">{{ formData.email }}</p>
          </div>
          <div class="flex items-center">
            <i class="fas fa-map-marker-alt text-blue-600 text-sm mr-2"></i>
            <p class="text-xs">{{ formData.address }}</p>
          </div>
        </div>
        <div class="company-info text-right mt-4">
          <h2 class="text-base font-bold text-blue-600">{{ formData.company }}</h2>
          <p class="text-xs">"We Build the Future"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Template3 extends Vue {
  @Prop() formData!: any; // Receive formData as a prop
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.left-section {
  background-color: #1e40af; /* Blue Gradient */
  color: white;
}

.triangle-shape {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
