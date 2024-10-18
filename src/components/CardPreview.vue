<template>
  <div class="card-preview p-4 position-relative" v-if="formData && selectedTemplate">
    <div class="flex justify-center">
      <div @click="onEditClick"><i class="fas fa-edit" style="cursor: pointer; font-size: 2rem;"></i></div>
      <div @click="onShareClick" ><i class="fas fa-share ml-3" style="cursor: pointer; font-size: 2rem;"></i></div>
    </div>

    <!-- Template component rendering -->
    <component :is="selectedTemplateComponent" :formData="formData"></component>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
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

@Component
export default class CardPreview extends Vue {
  formData: any = {};
  selectedTemplate: any = {};

  mounted() {
    const formData = this.$route.query.formData;
    if (formData && typeof formData === 'string' && formData !== '{}') {
      this.formData = JSON.parse(formData);
    } else if (Array.isArray(formData)) {
      console.error('Expected a single formData string, but got an array:', formData);
    } else {
      const savedFormData = localStorage.getItem('formData');
      if (savedFormData) {
        this.formData = JSON.parse(savedFormData);
      }
    }

    const selectedTemplate = this.$route.query.selectedTemplate;
    if (selectedTemplate && typeof selectedTemplate === 'string') {
      this.selectedTemplate = JSON.parse(selectedTemplate);
    } else if (Array.isArray(selectedTemplate)) {
      console.error('Expected a single selectedTemplate string, but got an array:', selectedTemplate);
    } else {
      const savedTemplate = localStorage.getItem('selectedTemplate');
      if (savedTemplate) {
        this.selectedTemplate = JSON.parse(savedTemplate);
      }
    }
  }

  // Map the selectedTemplate to its component
  get selectedTemplateComponent() {
    switch (this.selectedTemplate.id) {
      case 'template1':
        return Template1;
      case 'template2':
        return Template2;
      case 'template3':
        return Template3;
      case 'template4':
        return Template4;
      case 'template5':
        return Template5; 
      case 'template6':
        return Template6;   
      case 'template7':
        return Template7;  
      case 'template8':
        return Template8;    
      case 'template9':
        return Template9; 
      case 'template10':
        return Template10; 
      case 'template11':
        return Template11; 
      case 'template12':
        return Template12; 
      default:
        return Template1;
    }
  }

  // Handle Edit Icon click
  onEditClick() {
    console.log('camer')
    this.$router.push({
      name: 'HomePage',
      query: {
        formData: JSON.stringify(this.formData),
        selectedTemplate: JSON.stringify(this.selectedTemplate)
      }
    });
  }

  // Handle Share Icon click
  onShareClick() {
    const url = `${window.location.origin}${this.$router.resolve({
      name: 'CardPreview',
      query: {
        formData: JSON.stringify(this.formData),
        selectedTemplate: JSON.stringify(this.selectedTemplate)
      }
    }).href}`;

    // Copy the generated URL to the clipboard
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy the link: ', err);
      alert('Failed to copy the link.');
    });
  }
}
</script>
<style scoped>
.card-preview {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
}
</style>
