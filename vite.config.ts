    // vite.config.ts
    import { vitePlugin as remix } from "@remix-run/dev";
    import { defineConfig } from "vite";

    export default defineConfig({
      plugins: [
        remix({
          // Supprimez ou commentez la configuration par défaut si elle existe
          // appDirectory: "app",
          // routes(defineRoutes) { ... } // par défaut basé sur app/routes

          // Définissez vos routes manuellement
          routes(defineRoutes) {
            return defineRoutes((route) => {
              // Route racine (optionnel, dépend de votre root.tsx)
              // route("root", "root.tsx", () => { ... });

              // Définir la route /parent qui utilise le layout parent/route.tsx
              // et a des enfants qui utiliseront son Outlet
              route("parent", "routes/parent/route.tsx", () => {
                // Cet enfant /parent/enfant utilisera l'Outlet de parent/route.tsx
                route("enfant", "routes/parent/enfant.tsx");
                // Ajoutez ici d'autres enfants qui DOIVENT utiliser le layout parent
                // route("", "routes/parent/index.tsx", { index: true }); // Si vous avez un index pour /parent
              });

              // Définir la route /parent/petitenfant INDÉPENDAMMENT
              // Elle pointe vers son propre fichier et N'EST PAS imbriquée
              // dans la définition de la route "parent" ci-dessus.
              route("parent/petitenfant", "routes/petitenfant.tsx");

              // Ajoutez ici vos autres routes de premier niveau
              // route("about", "routes/about.tsx");
              // route("/", "routes/_index.tsx", { index: true });
            });
          },
        }),
        // autres plugins...
      ],
    });