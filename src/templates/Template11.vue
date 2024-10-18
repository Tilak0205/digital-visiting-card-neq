<template>
  <div class="template-container">
    <div class="template-box">
      <!-- Left Section: Name and Title with Diagonal Gradient -->
      <div class="left-section">
        <div class="info-box flex flex-col gap-y-2">
          <span class="name">{{ formData.fullName }}</span>
          <span class="title">{{ formData.role }}</span>
        </div>
      </div>

      <!-- Right Section: Contact Info with Polygon Shape -->
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
export default class Template11 extends Vue {
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
  position: relative;
  width: 450px;
  height: 250px;
  border-radius: 15px;
}

.left-section {
  flex: 1;
  background: linear-gradient(to bottom right, #2563eb, #1d4ed8);
  padding: 20px;
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

.right-section {
  flex: 1;
  background-color: #f3f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.contact-box {
  background-color: #2563eb;
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

/* Geometric Shape */
.polygon-shape {
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: #2563eb;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  bottom: 10px;
  right: 10px;
}
</style>
