FROM node:18 
WORKDIR /udassi/src/app  //edit the username to yours
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3333
CMD ["node", "dist/main"]