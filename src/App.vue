<template>
  <header-view />
  <router-view />
  <footer-view />
</template>

<script setup>
import HeaderView from '@/components/HeaderView.vue'
import router from '@/router';
import FooterView from '@/components/FooterView.vue'
</script>
