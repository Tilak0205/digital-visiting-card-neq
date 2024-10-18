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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Prevent overflow */
}

@media (max-width: 768px) {
  .template-box {
    width: 350px; /* Adjust the width for mobile */
  }

  /* Adjust the text size and layout for mobile */
  .name {
    font-size: 16px;
  }

  .title,
  .company-tagline,
  .company-name {
    font-size: 10px; /* Smaller font size for mobile */
  }

  .contact-item {
    font-size: 8px; /* Make sure the contact info fits well */
  }

  .contact-box {
    padding: 0;
  }
}

/* Left Section for Name and Company Info */
.left-section {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-wrap: break-word; /* Prevent text overflow */
  max-width: 100%; /* Ensure content doesn't overflow */
}

.name-box {
  background-color: #3b82f6;
  padding: 10px;
  border-radius: 8px;
  word-wrap: break-word; /* Ensure text breaks within box */
  max-width: 100%;
}

.name {
  color: white;
  font-size: 18px;
  font-weight: bold;
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* Prevent text from wrapping into multiple lines */
}

.title {
  color: white;
  font-size: 12px;
  display: block;
  margin-top: 5px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.company-info {
  margin-top: 20px;
  word-wrap: break-word;
}

.company-name {
  color: white;
  font-size: 18px;
  font-weight: bold;
  word-wrap: break-word; /* Ensure company name wraps */
}

.company-tagline {
  color: white;
  font-size: 12px;
  margin-top: 5px;
  word-wrap: break-word;
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

/* Prevent text overflow globally */
* {
  word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>
