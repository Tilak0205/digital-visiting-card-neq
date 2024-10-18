<template>
  <div id="homepage">
    <div class="hero h-screen">
      <div class="flex flex-col gap-y-2 content w-2/4 m-auto" style="margin-top: 6rem;">
        <h1>The easiest way to share your details</h1>
        <h2>A digital business card allows you to instantly share who you are, with anyone, wherever you go</h2>
        <div class="buttons">
          <button class="shop-all" @click="scrollToForm">Create your own card</button>
        </div>
      </div>
    </div>
    <div id="form-section">
      <FormPage />
    </div>
  </div>
</template>

<script>
import FormPage from './FormPage.vue';

export default {
  name: 'HomePage',
  components: {
    FormPage,
  },
  methods: {
    scrollToForm() {
      const formSection = document.getElementById('form-section');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  mounted() {
    const formData = this.$route.query.formData;
    const selectedTemplate = this.$route.query.selectedTemplate;

    // If formData or selectedTemplate is in the query, scroll to the form
    if (formData || selectedTemplate) {
      this.scrollToForm();
    }
  }
};
</script>

<style scoped>
#homepage {
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  text-align: center;
  background: linear-gradient(to right, #D9AFD9, #97D9E1);
}

.navbar {
  background-color: #333;
  color: white;
  padding: 10px 20px;
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
}

.hero {
  padding: 40px 20px;
}

.hero h1 {
  font-size: 6rem;
  color: #333;
}

.product-image {
  max-width: 100%;
  height: auto;
}

.buttons {
  margin-top: 20px;
}

button {
  background-color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s;
  border-radius: 10px;
}

button:hover {
  background-color: #ffdd57;
}

#form-section {
  padding: 20px;
}
</style>
