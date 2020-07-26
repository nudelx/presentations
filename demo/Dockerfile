FROM node:latest
RUN mkdir -p /usr/src/app 
WORKDIR /usr/src/app
EXPOSE 8080
COPY . /usr/src/app 
CMD ["yarn"]
CMD ["node", "run.js"]
