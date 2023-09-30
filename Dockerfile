### Base Node APP#
FROM node:16.16-alpine

### Create app directory
WORKDIR /app

### Copy the package.json file to Container
COPY package*.json ./

#RUN npm update
RUN npm i

### Copy entire Source Code Local to Container
COPY . .

### Creates a "dist" folder with the production build
RUN npm run build

EXPOSE 3000

### Start the server using the production build
CMD ["npm", "run", "start"]
