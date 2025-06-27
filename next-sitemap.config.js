/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://semprevisao.com.br',
  generateRobotsTxt: true,
  changefreq: 'weekly', // Frequência de atualização
  priority: 1, // Prioridade padrão das páginas
  exclude: [],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/.next' }
    ]
  }
};