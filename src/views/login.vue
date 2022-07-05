<template>
  <div class="h-full login">
    <div class="flex items-center justify-center h-full">
      <div>
        <h3>Learn to Code by Watching others</h3>
        <div>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable
        </div>
      </div>

      <div>
        <form @submit.prevent="handleSubmit">
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
              placeholder="Password"
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <div>
            <router-link to="/signup">SignUp</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  created() {
    this.checkSignIn();
  },
  updated() {
    this.checkSignIn();
  },
  methods: {
    handleSubmit() {
      this.$http.plain
        .post("/signin", {
          email: this.form.email,
          password: this.form.password,
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
      this.$router.replace("/coders");
    },

    signinFailed(error) {
      //this.error = (error.response && error.response.data && error.response.data.error) || ''
      console.log(error);
      delete localStorage.csrf;
      delete localStorage.signedIn;
    },

    checkSignIn() {
      if (localStorage.signedIn) {
        this.$router.replace("/coders");
      }
    },
  },
};
</script>

<style scoped>
.login {
  background-image: url("../assets/images/bg-intro-desktop.png");
  background-position: center;
  background-repeat: no-repeat;
  background-origin: content-box;
}
</style>
