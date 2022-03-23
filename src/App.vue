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
      <div class="m-6 relative">
        <button @click="handleClick" class="w-8 h-8 rounded-full">
          user avatar
        </button>
        <transition name="fade">
          <div v-if="isUserModalOpened" class="absolute top-12 right-1">
            <span>Your Account</span>
            <div class="avatar">
              <div>avatar</div>
              <div>user roles</div>
            </div>
            <div class="profile-menu">
              <div class="dropdown">
                <div>dropdown1</div>
                <div>dropdown2</div>
              </div>

              <div class="menu-container">
                <div>
                  <span>logout</span>
                  <span>profile</span>
                </div>
              </div>
              <div class="preference">
                <div>
                  <span>appearance</span>
                </div>
                <div>
                  language
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.avatar {
  background-color: blueviolet;
  width: 200px;
  height: 75px;
}
.profile-menu {
  background-color: bisque;
  width: 200px;
  height: 300px;
}
.menu-container{
  width: 200px;
  height: 100px;
}
.dropdown {
  background-color: blue;
  width: 200px;
  height: 100px;
}
.preference {
  background-color: bluev;
  width: 200px;
  height: 150px;
}
</style>
