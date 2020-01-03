<template>
  <div class="home">
   <div class="jumbotron">
  <h1 class="display-3">Welcome to Community!</h1>
  <p class="lead">A fully open source forum. Made with 💚 by ret83 </p>
  <hr class="my-4">
  
  <p class="lead">
    <a class="btn btn-primary btn-lg" :href="getLoginUrl" role="button">Login with google</a>
  </p>
</div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  computed: {
    getLoginUrl() {
      if(window.location.hostname === 'localhost') {
        return 'http://localhost:3000/auth/google'
      } else {
        return 'https://vue-forum-api.now.sh/auth/google'
      }
    }
  }
}
</script>
