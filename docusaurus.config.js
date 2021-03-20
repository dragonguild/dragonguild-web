/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'DragonGuild',
  tagline: 'Fight for Web3',
  url: 'https://dragonguild.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dragonguild', // Usually your GitHub org/user name.
  projectName: 'dragonguild-web', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'DragonGuild',
      logo: {
        alt: 'DragonGuild Logo',
        src: 'img/logo.svg',
      },
      items: [
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/xwUUXQV',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/DragonGuildDAO',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/dragonguild',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DragonGuild,DAO.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/dragonguild/dragonguild-web/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
