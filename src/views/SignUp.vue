<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username</label>
        <input
          v-model="form.userName"
          type="text"
          name="username"
          placeholder="Username"
        />
      </div>
      <div>
        <label for="email">Email</label>
        <input
          v-model="form.email"
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          v-model="form.password"
          type="password"
          name="password"
          placeholder="Passowrd"
        />
      </div>
      <div>
        <label for="password_confirmation">Password Confirmation</label>
        <input
          v-model="form.password_confirmaion"
          type="password"
          name="password_confirmation"
          placeholder="Passowrd Confirmation"
        />
      </div>
      <div>
        <button type="submit">Sign Up</button>
      </div>
      <div>
        <span>Already has an account? </span>
        <router-link to="/login">click here to Login</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
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
    handleSubmit() {
      this.$http.plain
        .post('/signup', {
          email: this.form.email,
          password: this.form.password,
          password_confirmation: this.form.password_confirmation,
        })
        .then((response) => this.signinSuccessful(response))
        .catch((error) => this.signinFailed(error));
    },

    signinSuccessful(response) {
      if (!response.data.csrf) {
        this.signinFailed(response);
        return;
      }
      localStorage.csrf = response.data.csrf;
      localStorage.signedIn = true;
      //this.error = ''
      this.$router.replace('/coders');
    },

    signinFailed(error) {
      //this.error = (error.response && error.response.data && error.response.data.error) || ''
      console.log(error);
      delete localStorage.csrf;
      delete localStorage.signedIn;
    },

    checkSignIn() {
      if (localStorage.signedIn) {
        this.$router.replace('/coders');
      }
    },
  },
};
</script>
