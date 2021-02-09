# Zemoga test ui

Test ui repository >>> https://github.com/zemoga/ui-test

Markup page >>> https://s3-us-west-2.amazonaws.com/zemoga-files/ui/candidates-test/test-ui-v2.png

DEMO URL >>> https://zemoga-test-ui.wisigonzalez.vercel.app/

## Stack

- Frontend
  - [React.js](https://es.reactjs.org/)
  - [Next.js](https://nextjs.org/)
  - [Styled-components](https://styled-components.com/)
  - [Jest](https://jestjs.io/)
- Backend
  - [GraphQL](https://firebase.google.com/docs)
  - [GraphCMS](https://graphcms.com/)
- Infrastructure
  - [Vercel](https://vercel.com/dashboard)

## Highlights

- Theme friendly
- Internationalization (translates on CMS)
- SSR (Server side rendering)
- Unit testing
- GraphQL

## Requeriments

- Node >= 12.0.0

## Local configuration

1. yarn install
2. yarn dev
3. go to `http://localhost:3000/`
4. see my work

## Folder structure

Explanation of hierarchies in files and layers.

    zemoga-test-ui/
      ├── public/
      │   ├── fonts/                       # Fonts asset folder
      │   ├── icons/                       # Icons asset folder
      └── src/
          ├── __mocks__/                   # Mock data for testing or markup page without integrations 
          ├── __tests__/                   # Tests folder
          ├── assets/                      # Core assets folder
          |   ├── styles/                  
          │       ├── core/                # Core utils folder
          |       ├── themes/              # Core styles folder
          ├── components/                  # Components folder
          ├── config/
          |   ├── boot-loaders/            # Boot loaders folder
          |   ├── constants/               # Constants folder
          ├── constants/                   # General constants folder
          ├── graphql/                     # GraphQL folder
          ├── hooks/                       # Custom hooks folder
          ├── mixins/                      # Mixins folder
          ├── pages/                       # Pages folder
          └── utils/                       # General utils folder

## Branches

- `master`
- `develop`
- `feature/markup-page` >>> only markup
- `feature/add-interactions` >>> with interactions

# License

MIT
