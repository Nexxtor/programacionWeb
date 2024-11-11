FROM node

WORKDIR /app

COPY package*.json .

RUN npm ci --only=production
COPY . .

CMD ["node", "server.js"]