<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    // watch(
    //   () => props.updateRow,
    //   (newValue) => {
    //     accountInfo.value = newValue;
    //     irAccount.value = newValue.irAccount;
    //   }
    // );
    const aa = ref("1212");

    return { aa };
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
