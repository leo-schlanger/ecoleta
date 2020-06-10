<div align="center">

  ![Logo](./assets/logo.svg)
  ![Ecoleta](./assets/home-background.svg)
  ### Recycle! help the environment!
</div>

---

# Índice

- [Description](#description)
- [Technologies](#technologies)
- [How to use](#how-to-use)
- [How to contribute](#how-to-contribute)
- [License](#license)

<a id="description"></a>

## :book: Description

<strong> Ecoleta </strong> is a web and mobile application to help people find collection points for recycling.

This application was built on the <strong> Booster </strong> track of <strong> Next Level Week </strong> distributed by [Rocketseat] (https://rocketseat.com.br/). The idea of ​​creating an application focused on the environment arose from the coincidence of the date of the course and the date of <strong> environment week </strong>.

<a id="technologies"></a>
## :rocket: Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [SQLite3](https://sqlite.org/index.html)
- [Expo](https://expo.io/)
- [Leaflet](https://leafletjs.com/examples/quick-start/)
- [IBGE Locate API](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet)
- [Celebrate](https://github.com/arb/celebrate)

<a id="how-to-use"></a>

## :fire: How to use

- ### **Prerequisites**

  - It is **necessary** to have **[Node.js](https://nodejs.org/en/)** installed on the machine.
  - Also, it is **necessary** to have a package manager either **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/ )**.
  - Finally, it is **essential** to have **[Expo](https://expo.io/)** globally installed on the machine.

1. Clone repository :

  Remember to change the machine's ip in the files "sevices/api.ts" in the web and mobile applications and "ItemsController.ts" on the server for your machine's ip.

```bash
  $ git clone https://github.com/leo-schlanger/ecoleta.git
```

2. Running the Application:

```bash
  # Go to the backend directory
  $ cd server

  # Installing dependencies
  $ npm install or yarn install

  # Creating database
  $ npm run knex:migrate or yarn knex:migrate
  $ npm run knex:seed or yarn knex:seed

  # Run API
  $ npm run dev or yarn dev

  # Back to the main directory
  $ cd ..

  # Go to the web directory and start application
  $ cd web
  $ npm start or yarn start

  # Back to the main directory
  $ cd ..

  # Go to the mobile directory and start application
  $ cd mobile
  $ npm start or yarn start

```

<a id="how-to-contribute"></a>

## :recycle: How to contribute

Fork this repository.

```bash
# Clone the repository
$ git clone <repository-url> && cd <repository-folder>

# Create a branch with your feature or bug fix
$ git checkout -b <my-branch>

# Commit your changes
$ git commit -m 'feature/bugfix: my changes description'

# push to your branch
$ git push origin <my-branch>
```

After the merge of your pull request is done, you can delete your branch.

<a id="license"></a>

## :memo: License

This project is under the MIT license. See the [LICENSE](./LICENSE.md) for more information.

---

Made by Leo Schlanger :wave:[Get in touch!](https://www.linkedin.com/in/leo-schlanger-226467192/)
