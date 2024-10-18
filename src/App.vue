<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-container">
        <div class="logo">Digital Card Generator</div>
        <div class="menu-icon" @click="toggleMenu">
          <i class="fas" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
        </div>
        <ul class="navbar-links" :class="{ 'navbar-links-active': isMenuOpen }">
          <li><router-link to="/" @click="toggleMenu">Home</router-link></li>
          <li><router-link to="/templates" @click="toggleMenu">Templates</router-link></li>
          <li><a href="#" @click="toggleMenu">Contact</a></li>
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
export default class App extends Vue {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
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

/* Menu icon (hamburger) */
.menu-icon {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
}

/* Navbar links */
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

/* Mobile menu link styles */
.navbar-links-active {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .navbar-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  /* Show menu icon on mobile */
  .menu-icon {
    display: block;
  }

  /* Hide navbar links by default */
  .navbar-links {
    display: none;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #226e95;
    padding: 10px 20px;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    text-align: center;
  }

  /* Show navbar links when menu is open */
  .navbar-links-active {
    display: flex;
  }
}
</style>
