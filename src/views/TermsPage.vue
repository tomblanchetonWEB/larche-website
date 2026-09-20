<script setup>
import { useI18n } from 'vue-i18n'
import LegalLayout from '../layouts/LegalLayout.vue'

const { t } = useI18n()
</script>

<template>
  <LegalLayout :title="t('termsPage.title')" :lastUpdated="t('termsPage.date')">
    <h2>{{ t('termsPage.s1.title') }}</h2>
    <p>{{ t('termsPage.s1.p1') }}</p>

    <h2>{{ t('termsPage.s2.title') }}</h2>
    <p>{{ t('termsPage.s2.p1') }}</p>
    <p>{{ t('termsPage.s2.p2') }}</p>

    <h2>{{ t('termsPage.s3.title') }}</h2>
    <p>{{ t('termsPage.s3.p1') }}</p>
    <p>{{ t('termsPage.s3.p2') }}</p>
  </LegalLayout>
</template>
