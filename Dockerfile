FROM node:18-alpine
WORKDIR /app
RUN npm install -g @nestjs/cli
COPY package*.json ./
# Install dependencies + explicit TypeORM and MySQL drivers
RUN npm install && npm install typeorm @nestjs/typeorm mysql2
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/main"]
