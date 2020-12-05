FROM node

WORKDIR /wt

ENV PORT=5000


COPY ./lerna.json .
COPY ./package.json .
COPY ./packages/server ./packages/server

RUN yarn install
RUN yarn build:server

WORKDIR /wt/packages/server

ENV NODE_ENV production
EXPOSE 5000
CMD ["node", "dist/src/index.js"]