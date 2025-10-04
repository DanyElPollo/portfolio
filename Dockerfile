FROM node:24-alpine

RUN apk update && apk add --no-cache neovim bash git curl npm

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]
# CMD ["sh", "-c", "tail -f /dev/null"]
