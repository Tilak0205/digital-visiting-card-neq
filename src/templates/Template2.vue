<template>
  <div class="card-container flex w-full justify-center items-center">
    <!-- Card Section -->
    <div class="card flex rounded-[20px] overflow-hidden">
      <!-- Left Section (Solid Background for Name & Role) -->
      <div class="left-section bg-indigo-900 text-white p-4 flex flex-col justify-center" style="flex: 1;">
        <div>
          <h1 class="text-xl font-bold">{{ formData.fullName }}</h1>
          <p class="text-sm mt-1">{{ formData.role }}</p>
        </div>
      </div>

      <!-- Right Section (Contact Info with Background Image or Pattern) -->
      <div class="right-section bg-white p-4 relative" style="flex: 2; background-size: cover;">
        <!-- Overlay to darken the background -->
        <div class="overlay absolute inset-0 bg-white z-0"></div>
        <div class="contact-details text-white relative z-10">
          <div class="flex items-center mb-2">
            <i class="fas fa-phone-alt text-sm mr-2"></i>
            <p class="text-xs">{{ formData.phone }}</p>
          </div>
          <div class="flex items-center mb-2">
            <i class="fas fa-envelope text-sm mr-2"></i>
            <p class="text-xs">{{ formData.email }}</p>
          </div>
          <div class="flex items-center">
            <i class="fas fa-map-marker-alt text-sm mr-2"></i>
            <p class="text-xs">{{ formData.address }}</p>
          </div>
        </div>
        <div class="company-info text-right relative z-10 mt-4">
          <h2 class="text-base font-bold">{{ formData.company }}</h2>
          <p class="text-xs">We Deliver Quality</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Template2 extends Vue {
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
  background-color: #2c3e50; /* Indigo Dark */
  color: white;
}

.right-section {
  position: relative;
  background-color: #ffffff;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(255, 255, 255);
}

.contact-details, .company-info {
  color: black;
}

.company-info h2 {
  margin-bottom: 0;
}
</style>
