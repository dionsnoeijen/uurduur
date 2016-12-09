FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app && mkdir -p /usr/src/app/node_modules
#
WORKDIR /usr/src/app/

# Install app dependencies
COPY ./app /usr/src/app

# Bundle app source
RUN npm install && \
    npm install -g pm2 && \
    npm install mocha -g

ENV DEBUG=*

EXPOSE 8090

CMD ["pm2", "start", "--no-daemon", "npm", "--", "start", "--watch"]
