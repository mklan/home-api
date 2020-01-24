# home-api

rest api with useful connectors for home labs

## setup

3. setup configuration by editing `config/default.json`
4. `npm install`

## development

```
npm start
```

## deployment

```
npm install -g pm2
npm run production
```

## api

download youtube video

`post('/y2mp4', { apikey: 'userApiKey', id: youtubeId })`

send sms via educom

`post('/sms', { apikey: 'userApiKey', recipient: 'int. phone Number', text: 'some message' })`

more apis coming soon...

## Ideas / TODO

- headless whatsapp (bot system)
- notes api
- oAuth
