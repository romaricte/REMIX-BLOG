# Remix Indie Stack

```sh
npx create-remix@latest --template remix-run/indie-stack
```


- Initial setup:

  ```sh
  npm run setup
  ```

- Start dev server:

  ```sh
  npm run dev
  ```

This starts your app in development mode, rebuilding assets on file changes.

The database seed script creates a new user with some data you can use to get started:

- Email: `rachel@remix.run`
- Password: `racheliscool`


J'ai ajouté cross-env au début de la commande dev:serve. Cette modification permettra à la commande de fonctionner correctement sous Windows.
La raison de cette erreur est que :
Sous Windows, la syntaxe pour définir des variables d'environnement est différente
cross-env est un outil qui permet d'utiliser la même syntaxe pour définir des variables d'environnement sur tous les systèmes d'exploitation
Vous pouvez maintenant réessayer d'exécuter la commande npm run dev et elle devrait fonctionner correctement.