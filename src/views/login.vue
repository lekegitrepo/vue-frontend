<template>
  <div class="bg-mask h-full opacity-80 z-10 w-full">
    <div class="h-full login">
      <div class="flex flex-col md:flex-row items-center h-full z-20">
        <div class="flex justify-center text-white  md:w-3/6">
          <div class="md:w-2/3">
            <div class="flex flex-col md:text-5xl font-bold mb-6">
              <span>Learn to Code by</span> <span>Watching others</span>
            </div>
            <div class="text-lg font-medium">
              <span>
                See how experienced developers solve problems in real-time.
              </span>
              <span>scripted tutorials is great, but understanding how </span>
              <span>developers think is invaluable</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center md:w-3/6">
          <div class="md:w-2/3">
            <div>Try it free 7 days then $20/mo. thereafter</div>
            <div class="bg-white p-8">
              <form @submit.prevent="handleSubmit">
                <div>
                  <input
                    v-model="form.email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    class="h-12 w-full"
                  />
                </div>
                <div>
                  <input
                    v-model="form.password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    class="h-12 w-full"
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
.bg-mask {
  background-color: #cd3434;
}
</style>
