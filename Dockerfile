FROM node:8
WORKDIR /Depthcharge.Render
ADD package.json /Depthcharge.Render
RUN npm install
COPY /Depthcharge.Render /Depthcharge.Render
CMD node app.js