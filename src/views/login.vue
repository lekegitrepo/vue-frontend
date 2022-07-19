<template>
  <div class="bg-mask h-full opacity-80 z-10 w-full">
    <div class="h-full login">
      <div class="flex flex-col md:flex-row items-center h-full">
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
            <div
              class="p-4 mb-3 bg-purple-800 rounded-lg text-center text-white shadow-xl"
            >
              <span class="font-bold">Try it free 7 days</span> then $20/mo.
              thereafter
            </div>
            <div class="bg-white p-8 rounded-lg">
              <form @submit.prevent="handleSubmit">
                <div class="py-2">
                  <input
                    v-model="form.email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    class="h-12 w-full rounded border border-gray-300 focus:border-gray-400"
                  />
                </div>
                <div class="py-2">
                  <input
                    v-model="form.password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    class="h-12 w-full rounded border border-gray-300 focus:border-gray-400"
                  />
                </div>
                <div class="py-2">
                  <button
                    type="submit"
                    class="w-full bg-green-400 h-12 text-white rounded-md"
                  >
                    Login
                  </button>
                </div>
                <div class="py-4 text-blue-500">
                  <router-link to="/signup"
                    >New user? click here to SignUp</router-link
                  >
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
