FROM node:18-slim
WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY . . 
ENV VITE_CURRENCY_API_URL=https://example.com/api
EXPOSE 5173
CMD ["npm", "run", "dev-exposed"]