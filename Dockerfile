#using node for base image
FROM node:22

#set directory
WORKDIR /app

#copy dependenices first to prevent redundant package downloads from changed code
COPY package*.json ./

#download packages
RUN npm install

#download rest of repo
COPY . .

#declare port
ENV PORT=9000

#expose declared port
EXPOSE 9000

#start command
CMD ["npm", "start"]
