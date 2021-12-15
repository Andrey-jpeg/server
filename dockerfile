FROM node:14.17.6
COPY . .
RUN yarn set version 1.22.17
RUN yarn install
EXPOSE 5000
CMD node server.js
