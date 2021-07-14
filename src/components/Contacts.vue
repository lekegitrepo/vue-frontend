<template>
  <div id="contacts">
    <h1>This is Contact Page</h1>
    <div v-for="contact in contacts" :key="contact.id">
      <p>{{ contact.name }} is my {{ contact.relationship }}</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import axios from 'axios';

export default {
  data() {
    return {
      contacts: [],
      name: [],
      relationship: [],
      errors: [],
    };
  },
  created() {
    axios
      .get('http://localhost:3000/contacts')
      .then((response) => {
        console.log('This is created response data ', response.data);
        this.contacts = response.data;
      })
      .catch((e) => {
        this.error.push(e);
      });

    console.log('This is created response data ');
  },
};
</script>
