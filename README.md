# Adonis API application
1. https://adonisjs.com/docs/4.1/installation (install adonis)
2. git clone https://github.com/udamuri/adonis.git 
3. cd adonis
4. then run `npm install`

## Setup
1. sudo cp .env.example .env
```
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=f7U3xDpTqgwEa9PwYRJGUAqeLCmCfNXn
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=123456
DB_DATABASE=adonis_tes
HASH_DRIVER=bcrypt
```
2. adonis serve --dev
3. Migrations and seeds
4. adonis test (run unit test)

### Migrationsclear
git
Run the following command to run startup migrations.

```js
adonis migration:run
```

### Postman File
adonis.postman_collection.json

