<template>
  <div>
    <div class="m-6 relative">
      <button @click="handleClick" class="w-8 h-8 rounded-full">
        user avatar
      </button>
      <transition name="fade">
        <div v-if="isUserModalOpened" class="absolute top-12 right-1">
          <transition name="slide">
            <div v-if="!isSubThemeModalOpened && !isSubLangModalOpened">
              <span>Your Account</span>
              <div class="avatar">
                <div>avatar</div>
                <div>user roles</div>
              </div>
            </div>
          </transition>
          <transition name="slide">
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
            <div
              v-if="isSubThemeModalOpened"
              @click="isSubThemeModalOpened = !isSubThemeModalOpened"
              class="mini-modal"
            >
              <span>Sub Modal theme</span>
            </div>
            <div
              v-if="isSubLangModalOpened"
              @click="isSubLangModalOpened = !isSubLangModalOpened"
              class="mini-modal"
            >
              <span>Sub Modal Language</span>
            </div>
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
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {};
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

.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s ease-out;
}

.slide-enter,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-enter-to,
.slide-leave {
  max-height: 300px;
  opacity: 1;
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
