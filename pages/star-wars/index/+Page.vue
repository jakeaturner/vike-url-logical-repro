<template>
  <h1>{{ $t('common.star_wars_movies') }}</h1>
  <ol>
    <li v-for="item in movies.data" :key="item.id">
      <a :href="'/star-wars/' + item.id">{{ item.title }}</a> ({{ item.release_date }})
    </li>
  </ol>
  <p>Source: <a href="https://brillout.github.io/star-wars">brillout.github.io/star-wars</a>.</p>
</template>

<script lang="ts" setup>
import { useData } from "vike-vue/useData";
import type { Data } from "./+data.js";
import { useI18n } from "vue-i18n";

const movies = useData<Data>();
const { t } = useI18n();
</script>
