<template>
  <header-view />
  <h1>{{ $t('hello') }}</h1>
  <p>{{ $t('welcome') }}</p>
  <footer-view />
</template>

<script setup>
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
</script>

<style>
</style>
