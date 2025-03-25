<template>
  <h1>{{ $t('common.my_app') }}</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>
</template>

<script setup lang="ts">
import Counter from "../../components/Counter.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
