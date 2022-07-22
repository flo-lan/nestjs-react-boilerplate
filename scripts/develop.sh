SERVICE_BACKEND=projectname.backend
SERVICE_FRONTEND=projectname.frontend
SERVICE_DB=projectname.db
COMPOSE=docker-compose.yml

# build
docker-compose -f ${COMPOSE} build ${SERVICE_BACKEND} ${SERVICE_FRONTEND}

docker-compose -f ${COMPOSE} up -d ${SERVICE_DB}
docker-compose -f ${COMPOSE} run --rm ${SERVICE_BACKEND} yarn install
docker-compose -f ${COMPOSE} run --rm ${SERVICE_FRONTEND} yarn install

docker-compose -f ${COMPOSE} run --rm ${SERVICE_BACKEND} npx mikro-orm migration:up

# start
docker-compose -f ${COMPOSE} up