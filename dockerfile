FROM node
WORKDIR /usr/src/app
COPY . .
# RUN npm install
# RUN npm install
# RUN npm install && npm run build

# If you are building your code for production
# RUN npm ci --only=production

#EXPOSE 80
#CMD [ "node", "app.js" ]
