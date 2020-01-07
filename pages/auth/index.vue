<template>
  <section class="section">
    <AuthForm></AuthForm>
  </section>
</template>

<script>
import AuthForm from '~/components/AuthForm'

export default {
  name: 'AuthPage',

  components: {
    AuthForm
  }
}
</script>
