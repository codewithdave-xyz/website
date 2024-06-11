// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-light'
     
    }
  },
  modules: [
    '@nuxt/content',
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-disqus",
    "@nuxtjs/seo",
    "nuxt-icon"
  ],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  disqus: {
    shortname: "davehilldev",
  },
  site: {
    url: 'https://example.com',
    name: 'Dave Hill, Front-end Developer',
    description: " For over two decades, I've developed user-friendly and captivating web interfaces. I collaborate effectively with designers and stakeholders. I'm confident in my ability to make a significant contribution, and I'm always eager for new challenges to deliver a seamless user experience.",
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  image: {
    inject: true,
    format: ['jpeg']
  }
})