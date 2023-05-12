# fetching the latest node version
FROM node:alpine AS builder

# decalre the enviroment
ENV NODE_ENV production

# setting the working dir
WORKDIR /app

# Installing packages
COPY package.json .
RUN npm install

# copy all the files in our project
COPY . .

# expose the port on which app runs
EXPOSE 8080

# run application
CMD ["npm", "run", "dev"]

