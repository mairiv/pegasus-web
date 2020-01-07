<template>
  <section>
    <div class="columns">
      <div class="column is-4">
        <b-field label="Name">
          <b-input v-model="name"></b-input>
        </b-field>
        <b-field label="Password">
          <b-input type="password" password-reveal></b-input>
        </b-field>
        <b-button type="is-success" expanded>Sign in</b-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    password: {
      type: String
    }
  }
}
</script>
