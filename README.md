# Checkpoint 4: My Folio

## Start By installing Sequelize Client Globaly

```
npm i -g sequelize-cli
```

## Don't forget to configure the .env there is a sample to guide you to the config

## Run your first migration

Once the .env and sequelize-cli done you can create the database you want to use on mysql

Then run the migration with

```
sequelize db:migrate
```

and if you want to revert to the previous migration

```
sequelize db:migrate:undo
```
