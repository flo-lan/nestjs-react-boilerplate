###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine As development

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN yarn install

# Use the node user from the image (instead of the root user)
USER node

CMD [ "sh", "-c", "yarn build:messages && yarn start" ]
