###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine As development

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN mkdir /usr/src/app/src/shared
COPY ../src/shared /usr/src/app/src/shared

RUN yarn install

# Use the node user from the image (instead of the root user)
USER node

CMD [ "sh", "-c", "yarn start:dev" ]
