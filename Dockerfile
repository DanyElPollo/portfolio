FROM node:24-alpine

RUN apk update && apk add --no-cache git neovim

WORKDIR /usr/src/app

COPY . .

RUN npm cache clean --force

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]
# CMD ["sh", "-c", "tail -f /dev/null"]
