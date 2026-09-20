<script setup>
import { useI18n } from 'vue-i18n'
import LegalLayout from '../layouts/LegalLayout.vue'

const { t } = useI18n()
</script>

<template>
  <LegalLayout :title="t('legalPage.title')" :lastUpdated="t('legalPage.date')">
    <h2>{{ t('legalPage.s1.title') }}</h2>
    <p>{{ t('legalPage.s1.p1') }}</p>
    <p>{{ t('legalPage.s1.p2') }}</p>
    <p>{{ t('legalPage.s1.p3') }}</p>
    <p>{{ t('legalPage.s1.p4') }}</p>

    <h2>{{ t('legalPage.s2.title') }}</h2>
    <p>{{ t('legalPage.s2.p1') }}</p>

    <h2>{{ t('legalPage.s3.title') }}</h2>
    <p>{{ t('legalPage.s3.p1') }}</p>
    <p>{{ t('legalPage.s3.p2') }}</p>
  </LegalLayout>
</template>
