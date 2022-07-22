## Installation

frontend/src/shared directory is copied to backend (make sure to add needed dependencies to backend)

```bash
# development
$ scripts/develop.sh
```

## Running the app

```bash
# development
$ docker-compose up
```

## Test

```bash
# unit tests

```

## Create DB migration

[https://mikro-orm.io/docs/migrations](https://mikro-orm.io/docs/migrations)

Create schema diff migration:

```bash
docker exec -it projectname.backend npx mikro-orm migration:create
```

Create blank migration:

```bash
docker exec -it projectname.backend npx mikro-orm migration:create --blank
```

Migrate:

```bash
docker exec -it projectname.backend npx mikro-orm migration:up
```

# Technology

## Frontend

React

[vite.js](https://vitejs.dev/) (faster webpack alternative)

Redux

- [redux-persist](https://github.com/rt2zz/redux-persist) (store specific states in local storage)
- [redux-saga](https://redux-saga.js.org/) (side effect management)

CSS

- [SASS] (https://sass-lang.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/) (tailwind components)

i18n

- react-intl
- extract-react-intl-messages

## Backend

[nest.js](https://nestjs.com/)

[MikroORM](https://mikro-orm.io/)
