<template>
  <div class="template-container">
    <div class="template-box">
      <!-- Left Section: Name and Company Info with Gradient -->
      <div class="left-section">
        <div class="info-box flex flex-col gap-y-2">
          <span class="name">{{ formData.fullName }}</span>
          <span class="title">{{ formData.role }}</span>
          <span class="company">{{ formData.company }}</span>
        </div>
      </div>

      <!-- Right Section: Contact Info with Stripes -->
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
export default class Template10 extends Vue {
  @Prop() formData!: any;
}
</script>

<style scoped>
.template-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}

.template-box {
  display: flex;
  width: 450px;
  height: 250px;
  border-radius: 15px;
  position: relative;
  background-color: #f3f4f6;
  overflow: hidden; /* Prevent overflow */
}

@media (max-width: 768px) {
  .template-box {
    width: 350px; /* Adjust width for mobile */
  }

  .name {
    font-size: 18px;
  }

  .title,
  .company {
    font-size: 10px; /* Smaller font size for mobile */
  }

  .contact-info {
    font-size: 10px; /* Reduce font size for contact info */
  }

  .contact-item {
    font-size: 9px; /* Ensure contact items fit well */
  }

  .left-section,
  .right-section {
    padding: 10px; /* Adjust padding on smaller screens */
  }
}

.left-section {
  flex: 1;
  background: linear-gradient(to bottom right, #6d28d9, #d946ef);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px 0 0 15px;
  word-wrap: break-word; /* Ensure long text wraps */
}

.info-box {
  color: white;
  font-size: 14px;
  max-width: 100%; /* Ensure content doesn't overflow */
}

.name {
  font-size: 20px;
  font-weight: bold;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* Truncate long names */
}

.title {
  font-size: 12px;
  margin-top: 4px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* Truncate long titles */
}

.company {
  font-size: 12px;
  margin-top: 8px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* Truncate long company names */
}

.right-section {
  flex: 1;
  background: linear-gradient(
      45deg,
      #f3f4f6 25%,
      transparent 25%,
      transparent 50%,
      #f3f4f6 50%,
      #f3f4f6 75%,
      transparent 75%,
      transparent
  );
  background-size: 50px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px; /* Added padding to ensure content fits */
  max-width: 100%;
}

.contact-box {
  background-color: #6d28d9;
  padding: 20px;
  border-radius: 15px;
  max-width: 100%;
}

.contact-info {
  color: white;
  font-size: 12px;
  word-wrap: break-word;
}

.contact-item {
  margin-bottom: 8px;
  font-size: 10px;
  word-wrap: break-word;
}

.contact-item i {
  color: white;
  margin-right: 8px;
}

/* Ensure words wrap and prevent overflow */
* {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

</style>
