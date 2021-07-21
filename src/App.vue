<template>
  <div id="app" class="flex flex-col items-center">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/contacts">Contacts</router-link>
    </div>
    <router-view />
  </div>
</template>
