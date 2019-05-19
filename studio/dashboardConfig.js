export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce19d859744262cac1838be',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bu3cuayk',
                  apiId: '22e25a77-3af0-4df6-91dd-bd68216cc198'
                },
                {
                  buildHookId: '5ce19d8676ada74a5b3e5023',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6c3ay547',
                  apiId: '67d91681-03e2-4d90-80db-2a82f455a72a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/monstrs/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6c3ay547.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
