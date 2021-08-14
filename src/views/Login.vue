<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="email">Email</label>
        <input v-model="email" type="email" name="email" placeholder="Email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          name="password"
          placeholder="Passowrd"
        />
      </div>
      <div>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    handleSubmit() {},
  },
};
</script>
