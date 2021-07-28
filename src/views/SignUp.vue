<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username</label>
        <input
          v-model="userName"
          type="text"
          name="username"
          placeholder="Username"
        />
      </div>
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
        <label for="password_confirmation">Password Confirmation</label>
        <input
          v-model="password_confirmaion"
          type="password"
          name="password_confirmation"
          placeholder="Passowrd Confirmation"
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
        userName: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
    };
  },
  methods: {
    handleSubmit() {},
  },
};
</script>
