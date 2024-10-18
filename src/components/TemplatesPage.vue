<template>
  <div class="templates-page flex items-center flex-col gap-y-4">
    <div>
      <h1 class="subtitle">Choose a Template</h1>
    </div>

    <!-- Template list -->
    <div class="template-list flex-wrap items-center justify-center">
      <div 
        class="template-preview" 
        v-for="template in templates" 
        :key="template.id" 
        @click="selectTemplate(template)"
      >
        <component :is="template.component" :formData="formData"></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import Template1 from '../templates/Template1.vue';
import Template2 from '../templates/Template2.vue';
import Template3 from '../templates/Template3.vue';
import Template4 from '../templates/Template4.vue';
import Template5 from '../templates/Template5.vue';
import Template6 from '../templates/Template6.vue';
import Template7 from '../templates/Template7.vue';
import Template8 from '../templates/Template8.vue';
import Template9 from '../templates/Template9.vue';
import Template10 from '../templates/Template10.vue';
import Template11 from '../templates/Template11.vue';
import Template12 from '../templates/Template12.vue';
import Route from 'vue-router';


@Component
export default class TemplatesPage extends Vue {
  formData: any = {}; // Initialize formData as an empty object

  templates = [
    { id: 'template1', name: 'Template 1', component: Template1 },
    { id: 'template2', name: 'Template 2', component: Template2 },
    { id: 'template3', name: 'Template 3', component: Template3 },
    { id: 'template4', name: 'Template 4', component: Template4 },
    { id: 'template5', name: 'Template 5', component: Template5 },
    { id: 'template6', name: 'Template 6', component: Template6 },
    { id: 'template7', name: 'Template 7', component: Template7 },
    { id: 'template8', name: 'Template 8', component: Template8 },
    { id: 'template9', name: 'Template 9', component: Template9 },
    { id: 'template10', name: 'Template 10', component: Template10 },
    { id: 'template11', name: 'Template 11', component: Template11 },
    { id: 'template12', name: 'Template 12', component: Template12 }
  ];

  mounted() {
  // Default data to be used if no formData is present in query string or localStorage
  const defaultFormData = {
    fullName: "John Doe",
    role: "Software Engineer",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    address: "123 Main Street, Springfield, USA",
    company: "Tech Solutions",
  };

  // Try to get formData from the query string
  const formData = this.$route.query.formData;

  if (formData && typeof formData === 'string' && formData !== '[object Object]') {
    // If formData is in the query string, parse and use it
    this.formData = JSON.parse(formData);
    localStorage.setItem('formData', JSON.stringify(this.formData)); // Ensure it's in localStorage
  } else {
    // If formData is not in the query string, try to get it from localStorage
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      // Parse it and set to formData
      this.formData = JSON.parse(savedFormData);
      // Trigger reactivity by resetting the reference to force Vue to update
      this.formData = { ...this.formData }; // Shallow copy to trigger reactivity
    } else {
      // If no formData is found in localStorage, use defaultFormData
      console.warn('No formData found in localStorage. Using default data.');
      this.formData = { ...defaultFormData };
      localStorage.setItem('formData', JSON.stringify(this.formData)); // Save default formData in localStorage
    }
  }
}


  selectTemplate(template: any) {
    localStorage.setItem('selectedTemplate', JSON.stringify(template));

    // Navigate to the preview page and pass both formData and selectedTemplate
    this.$router.push({
      name: 'CardPreview',
      query: {
        formData: JSON.stringify(this.formData),
        selectedTemplate: JSON.stringify(template)
      }
    });
  }
}
</script>

<style scoped>
.templates-page {
  padding: 20px;
  background: linear-gradient(to right, #dceaf1, #c7f9ff);
}

.template-list {
  display: flex;
  gap: 40px;
}

.template-preview {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.template-preview:hover {
  transform: scale(1.05);
}

.subtitle {
  color: #226e95;
  font-size: 2rem; /* Larger, more prominent title */
  font-weight: 600;
}
</style>
