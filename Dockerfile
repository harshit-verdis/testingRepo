FROM node:latest
WORKDIR /usr/src/app
RUN rm /etc/localtime; ln -s /usr/share/zoneinfo/Asia/Kolkata /etc/localtime
COPY . .
CMD [ "node", "mocha Test/test.js" ]