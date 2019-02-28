# home-api

rest api with useful connectors for home labs

## setup

1. create `.env` file in project root
2. add `API_KEY=some_random_passphrase` to `.env` file
3. setup configuration by editing `config/default.json`
4. `npm install`

## development

```
npm install -g nodemon
npm start
```

## deployment

```
npm install -g pm2
npm run production
```

## api

downloads youtube video
 
`GET /y2mp4?apikey=[api_key]&id=[youtube_id]`


more apis coming soon...