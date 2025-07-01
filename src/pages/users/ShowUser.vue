<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="col-md-4">
    <CardViwe :user="user" />
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import CardViwe from "@/components/users/CardView.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    CardViwe,
  },
  setup() {
    const user = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getUser() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
          user.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getUser();

    return { user, loading };
  },
};
</script>

<style>
</style>

<style>
</style>