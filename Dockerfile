FROM node:17
WORKDIR /app
COPY package*.json /app
RUN npm ci --only=production
COPY . /app
EXPOSE 8080
CMD ["npm", "start"]