import { defineConfig } from 'vitepress'
import { zh } from './zh.mjs'
import { en } from './en.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: { label: '简体中文', ...zh },
    en: { label: 'English', ...en },
  }
})