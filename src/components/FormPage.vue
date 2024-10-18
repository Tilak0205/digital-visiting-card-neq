<template>
  <div class="container">
    <div class="brand-logo"></div>
    <div class="brand-title">Your Information</div>
    <form @submit.prevent="goToTemplates" class="inputs">
      <label for="fullName">Full Name</label>
      <input type="text" v-model="form.fullName" placeholder="Enter your full name" required />

      <label for="role">Role</label>
      <input type="text" v-model="form.role" placeholder="Your Role" required />

      <label for="role">Company</label>
      <input type="text" v-model="form.company" placeholder="Your Company" required />

      <label for="phone">Phone</label>
      <input type="text" v-model="form.phone" placeholder="Your Phone Number" required />

      <label for="email">Email</label>
      <input type="email" v-model="form.email" placeholder="Your Email" required />

      <label for="website">Website</label>
      <input type="text" v-model="form.website" placeholder="Your Website" required />

      <label for="website">Address</label>
      <input type="text" v-model="form.address" placeholder="Your Address" />

      <button type="submit">Next: Choose Template</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class FormPage extends Vue {
  form: any = {
    fullName: '',
    role: '',
    phone: '',
    email: '',
    website: '',
    company: '',
    address: ''
  };

  mounted() {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      this.form = JSON.parse(savedFormData);
    }
  }

  goToTemplates() {
    localStorage.setItem('formData', JSON.stringify(this.form));
    this.$router.push({
      name: 'TemplatesPage',
      query: {
        formData: this.form
      }
    });
  }
}
</script>

<style scoped>
.container {
  position: relative;
  width: 350px;
  height: auto;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
  margin: 50px auto;
}

.brand-title {
  margin-top: 20px;
  font-weight: 900;
  font-size: 1.8rem;
  color: #333;
  letter-spacing: 1px;
  text-align: center;
}

.inputs {
  text-align: left;
  margin-top: 30px;
}

label, input, button {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}

label {
  margin-bottom: 4px;
}

label:nth-of-type(2) {
  margin-top: 12px;
}

input::placeholder {
  color: gray;
}

input {
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 50px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  margin-bottom: 20px;
}

button {
  color: white;
  margin-top: 20px;
  background: #333;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 900;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
  transition: 0.5s;
}

button:hover {
  box-shadow: none;
}

a {
  position: absolute;
  font-size: 8px;
  bottom: 4px;
  right: 4px;
  text-decoration: none;
  color: black;
  background: yellow;
  border-radius: 10px;
  padding: 2px;
}
</style>
