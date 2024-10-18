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
}

.left-section {
  flex: 1;
  background: linear-gradient(to bottom right, #6d28d9, #d946ef);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px 0 0 15px;
}

.info-box {
  color: white;
  font-size: 14px;
}

.name {
  font-size: 20px;
  font-weight: bold;
}

.title {
  font-size: 12px;
  margin-top: 4px;
}

.company {
  font-size: 12px;
  margin-top: 8px;
}

.right-section {
  flex: 1;
  background: linear-gradient(45deg, #f3f4f6 25%, transparent 25%, transparent 50%, #f3f4f6 50%, #f3f4f6 75%, transparent 75%, transparent);
  background-size: 50px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-box {
  background-color: #6d28d9;
  padding: 20px;
  border-radius: 15px;
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
