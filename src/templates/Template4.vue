<template>
  <div class="template-container">
    <div class="template-box">
      <!-- Left Section: Name and Company Info -->
      <div class="left-section">
        <div class="name-box">
          <span class="name">{{ formData.fullName }}</span>
          <span class="title">{{ formData.role }}</span>
        </div>
        <div class="company-info flex flex-col mt-4">
          <span class="company-name">{{ formData.company }}</span>
          <span class="company-tagline">We Deliver Excellence</span>
        </div>
      </div>

      <!-- Right Section: Contact Info with Modern Shape -->
      <div class="right-section flex justify-center items-center">
        <div class="contact-box relative">
          <div class="contact-info flex flex-col items-start p-6">
            <div class="contact-item mb-2">
              <i class="fas fa-phone-alt"></i> {{ formData.phone }}
            </div>
            <div class="contact-item mb-2">
              <i class="fas fa-envelope"></i> {{ formData.email }}
            </div>
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i> {{ formData.address }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Template4 extends Vue {
  @Prop() formData!: any;
}
</script>

<style scoped>
/* Main container for centering */
.template-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}

/* Main template box with standard width and height */
.template-box {
  display: flex;
  flex-direction: row;
  width: 450px; /* Standard width */
  height: 250px; /* Standard height */
  background-color: #1e3a8a;
  border-radius: 15px;
  padding: 10px;
  position: relative;
}

/* Left Section for Name and Company Info */
.left-section {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.name-box {
  background-color: #3b82f6;
  padding: 10px;
  border-radius: 8px;
}

.name {
  color: white;
  font-size: 18px;
  font-weight: bold;
  display: block;
}

.title {
  color: white;
  font-size: 12px;
  display: block;
}

.company-info {
  margin-top: 20px;
}

.company-name {
  color: white;
  font-size: 18px;
  font-weight: bold;
}

.company-tagline {
  color: white;
  font-size: 12px;
}

/* Right Section for Contact Info */
.right-section {
  flex: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
}

.contact-box {
  background-color: #3b82f6;
  padding: 20px;
  clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 50%);
}

.contact-info {
  color: white;
  font-size: 12px;
}

.contact-item {
  margin-bottom: 8px;
  font-size: 10px;
}

.contact-item i {
  color: white;
  margin-right: 8px;
}
</style>
