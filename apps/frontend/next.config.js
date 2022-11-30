const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'dist',
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US',
    localeDetection: false,
  }
}

module.exports = nextConfig
