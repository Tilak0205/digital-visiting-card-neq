<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-container">
        <div class="logo">Digital Card Generator</div>
        <ul class="navbar-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/templates">Templates</router-link></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
    </nav>
    
    <!-- Router View (renders the current page) -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style scoped>
/* Global and app styles */
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #f0f4f8; /* Soft light blue */
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Ensure all elements inherit box-sizing */
*, *::before, *::after {
  box-sizing: inherit;
}

#app {
  text-align: center;
  min-height: 100vh;
}

/* Navbar styles */
.navbar {
  background-color: #226e95;
  color: white;
  padding: 10px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.navbar-links li {
  display: inline;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar-links a:hover {
  color: #ffdd57;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
  }

  .navbar-links {
    flex-direction: column;
    gap: 10px;
  }
}

.app-title {
  color: #333;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 30px;
}
</style>
