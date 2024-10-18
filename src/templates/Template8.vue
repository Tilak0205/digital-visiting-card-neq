<template>
  <div class="card-container flex w-full justify-center items-center">
    <!-- Card Section -->
    <div class="card flex rounded-[20px] overflow-hidden" style="width: 450px; height: 250px;">
      <!-- Left Section (Name & Role) -->
      <div class="left-section bg-gray-900 text-white p-4 flex flex-col justify-center" style="flex: 1;">
        <div>
          <h1 class="text-xl font-bold">{{ formData.fullName }}</h1>
          <p class="text-sm mt-1">{{ formData.role }}</p>
        </div>
      </div>

      <!-- Right Section (Contact Info & Company) -->
      <div class="right-section relative bg-white p-4" style="flex: 2;">
        <!-- Vertical Stripe in the center -->
        <div class="stripe-shape absolute inset-y-0 left-0 w-[10px] bg-yellow-400"></div>
        <div class="contact-details ml-4 text-gray-700">
          <div class="flex items-center mb-2">
            <i class="fas fa-phone-alt text-yellow-600 text-sm mr-2"></i>
            <p class="text-xs">{{ formData.phone }}</p>
          </div>
          <div class="flex items-center mb-2">
            <i class="fas fa-envelope text-yellow-600 text-sm mr-2"></i>
            <p class="text-xs">{{ formData.email }}</p>
          </div>
          <div class="flex items-center">
            <i class="fas fa-map-marker-alt text-yellow-600 text-sm mr-2"></i>
            <p class="text-xs">{{ formData.address }}</p>
          </div>
        </div>
        <div class="company-info text-right mt-4">
          <h2 class="text-base font-bold text-yellow-600">{{ formData.company }}</h2>
          <p class="text-xs">"Excellence in Every Step"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Template8 extends Vue {
  @Prop() formData!: any; // Receive formData as a prop
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.left-section {
  background-color: #111827; /* Dark Gray */
  color: white;
}

.stripe-shape {
  position: absolute;
  height: 100%;
  width: 10px;
  background-color: #fbbf24; /* Bright Yellow Stripe */
}
</style>
