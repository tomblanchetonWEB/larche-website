<script setup>
import { useI18n } from 'vue-i18n'
import LegalLayout from '../layouts/LegalLayout.vue'

const { t } = useI18n()
</script>

<template>
  <LegalLayout :title="t('privacyPage.title')" :lastUpdated="t('privacyPage.date')">
    <h2>{{ t('privacyPage.s1.title') }}</h2>
    <p>{{ t('privacyPage.s1.p1') }}</p>

    <h2>{{ t('privacyPage.s2.title') }}</h2>
    <p>{{ t('privacyPage.s2.p1') }}</p>
    <p>{{ t('privacyPage.s2.p2') }}</p>

    <h2>{{ t('privacyPage.s3.title') }}</h2>
    <p>{{ t('privacyPage.s3.p1') }}</p>
    <p>{{ t('privacyPage.s3.p2') }}</p>
  </LegalLayout>
</template>