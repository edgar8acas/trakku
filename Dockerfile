FROM node

WORKDIR /wt

ENV PORT=5000

COPY ./package.json .
COPY ./packages/server/package.json ./packages/server/

RUN yarn install

COPY ./packages/server/dist ./packages/server/dist

WORKDIR /wt/packages/server

EXPOSE 5000
CMD ["node", "dist/src/index.js"]