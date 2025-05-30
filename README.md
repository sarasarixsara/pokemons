
# Pokemons

Se realiza una única carga inicial de la lista de Pokemones con paginación controlada manualmente, concatenando los resultados. Los detalles individuales de cada Pokémon se cargan bajo demanda y se cachean en Pinia, previniendo llamadas redundantes.

MainLayout.vue define el esqueleto general con componentes reusables como SearchBar, y un <slot> permite inyectar vistas como List.

Durante el desarrollo se priorizaron principios de diseño como KISS, DRY y SOLID para mantener la base de código limpia, modular y extensible. Se evitó sobreoptimizar al principio, pero se anticiparon posibles escenarios de escalado, como múltiples consultas simultáneas, rutas dinámicas y almacenamiento de favoritos.

Este enfoque permite no solo cumplir con los requisitos funcionales, sino también garantizar una experiencia fluida y robusta en escenarios reales con grandes volúmenes de datos.

Las clases de estilo de los componentes se encuentran en main.css para poder aplicarlas de forma global.
## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```



## Tech Stack

**Client:** Vue, Vite
**Storage:** Pinia

Vue router, Tailwind CSS, Fetch API, localStorage

