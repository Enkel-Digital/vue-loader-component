<script setup lang="ts">
import { ref } from "vue";

// Import the component directly
import loader from "../src/Loader.vue";

// Used to toggle loader component's visibility
const loading = ref<boolean>(false);

// Function to handle form data submission
async function submit() {
  // Enable loading UI
  loading.value = true;

  // Wait for 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Disable loading UI
  loading.value = false;
}
</script>

<template>
  <loader :show="loading">
    <!-- Your actual component logic here to be shown once loading is set to false -->
    <div class="center">
      <h1>My form</h1>

      <input type="text" placeholder="Some text to submit" />
      <br />

      <button @click="submit">submit</button>
    </div>
  </loader>
</template>
