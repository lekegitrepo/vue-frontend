<template>
  <div id="app" class="flex flex-col items-center">
    <div class="flex flex-row w-full">
      <Navbar
        allowUnselect
        :tabs="[
          { name: 'Features', value: 'feautures' },
          { name: 'Delivery', value: 'delivery' },
          { name: 'Shipping', value: 'shipping' },
          { name: 'About', value: 'about' },
        ]"
      />
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/contacts">Contacts</router-link>|
      <router-link to="/signup">Sign Up</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
//import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      isUserModalOpened: false,
      isSubThemeModalOpened: false,
      isSubLangModalOpened: false,
    };
  },
  methods: {
    handleClick() {
      this.isUserModalOpened = !this.isUserModalOpened;
      console.log("This is handleClick");
    },
  },
};
</script>
