<template>
  <div class="template-container">
    <div class="template-box">
      <!-- Left Section: Name and Company Info with Curved Design -->
      <div class="left-section">
        <div class="info-box flex flex-col gap-y-1">
          <span class="name">{{ formData.fullName }}</span>
          <span class="title">{{ formData.role }}</span>
          <span class="company">{{ formData.company }}</span>
        </div>
      </div>

      <!-- Right Section: Contact Info with Curved Highlight -->
      <div class="right-section">
        <div class="contact-box">
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
export default class Template12 extends Vue {
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
  background-color: #1f2937;
  position: relative;
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
    font-size: 9px; /* Make sure the contact info fits */
  }

  .left-section, .right-section {
    padding: 10px; /* Adjust padding on smaller screens */
  }
}

.left-section {
  flex: 1;
  background-color: #4b5563;
  padding: 20px;
  border-radius: 15px 0 0 15px;
  word-wrap: break-word; /* Ensure long text wraps */
}

.info-box {
  color: white;
  font-size: 14px;
  max-width: 100%; /* Prevent overflow */
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
  background-color: #4b5563;
  padding: 20px;
  border-radius: 0 15px 15px 0;
  position: relative;
  max-width: 100%; /* Prevent overflow */
}

.contact-box {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  max-width: 100%; /* Ensure the box does not overflow */
}

.contact-info {
  color: white;
  font-size: 12px;
  word-wrap: break-word; /* Ensure long text wraps */
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
</style>
