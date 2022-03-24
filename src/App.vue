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
            <div v-if="!isSubThemeModalOpened && !isSubLangModalOpened">
              <span>Your Account</span>
              <div class="avatar">
                <div>avatar</div>
                <div>user roles</div>
              </div>
            </div>
            <transition name="expanded">
              <div
                class="profile-menu"
                v-if="!isSubThemeModalOpened && !isSubLangModalOpened"
              >
                <div class="inner-menu">
                  <div class="dropdown">
                    <div>dropdown1</div>
                    <div>dropdown2</div>
                  </div>

                  <div class="menu-container">
                    <div class="flex flex-col">
                      <span>logout</span>
                      <span>profile</span>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            <div>
              <transition name="slide-up">
                <div
                  v-if="isSubThemeModalOpened"
                  @click="isSubThemeModalOpened = !isSubThemeModalOpened"
                  class="mini-modal"
                >
                  <span>Sub Modal theme</span>
                </div>
              </transition>
              <transition name="slide-up">
                <div
                  v-if="isSubLangModalOpened"
                  @click="isSubLangModalOpened = !isSubLangModalOpened"
                  class="mini-modal"
                >
                  <span>Sub Modal Language</span>
                </div>
              </transition>
              <transition name="fade">
                <div
                  class="preference"
                  v-if="!isSubThemeModalOpened && !isSubLangModalOpened"
                >
                  <div @click="isSubThemeModalOpened = !isSubThemeModalOpened">
                    <span>theme</span>
                  </div>
                  <div @click="isSubLangModalOpened = !isSubLangModalOpened">
                    <span>language</span>
                  </div>
                </div>
              </transition>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* .expanded-enter-active,
.expanded-leave-active {
  transition: opacity 0.5s;
}
.expanded-enter,
.expanded-leave-to {
  max-height: 40%;
} */

.expanded-enter {
  max-height: 0;
  opacity: 0;
}
.expanded-enter-to {
  max-height: 31rem;
  opacity: 1;
}
.expanded-enter-active,
.expanded-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.8s;
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(100px);
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
.menu-container {
  width: 200px;
  height: 100px;
}
/* .dropdown {
  background-color: blue;
  width: 200px;
  height: 100px;
} */
.mini-modal {
  background-color: blanchedalmond;
  width: 200px;
  height: 100px;
}
.preference {
  background-color: rebeccapurple;
  width: 200px;
  height: 150px;
}
</style>
