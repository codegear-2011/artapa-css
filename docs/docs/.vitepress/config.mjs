import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ArtapaCSS Docs",
  description: "A Lightweight CSS Framework for Rapid Web Development",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview of ArtapaCSS', link: '/overview' }
      { text: 'Getting Started with Artapa', link: '/api-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Overview of ArtapaCSS', link: '/overview' },
          { text: 'Getting Started with Artapa', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codegear-2011/artapa-css' }
    ]
  }
})
