# LEAD-A-THON Assessment

## Tech stack: 
- Nodejs
- Express
- Web Scrapping using `cheerio`

Live preview: https://lead-a-thon-ng.herokuapp.com/  
Code: https://github.com/NandKumarGangai/hackerearth-assessments/tree/master/lead-a-thon-assessment  

## Steps to install and run at local machine

```sh
# Clone the repository
# Navigate to lead-a-thon-assessment repository
cd lead-a-thon-assessment
# install dependencies
npm i
# run the app in local env
npm run dev
```

## Available API's
```js
---- ---- ---- ---- ----
title: Gets all data in HTML format
---- ---- ---- ---- ----
/**
 * @route GET /api
 * @desc: Fetches all data in HTML format and returns to client
 * @access: public
 * /

---- ---- ---- ---- ----
title: Gets specific data in HTML format
---- ---- ---- ---- ----
/**
 * @route GET /api/:code
 * @desc: Fetches specific data based on query param in HTML format and returns to client
 * @access: public
 * /

---- ---- ---- ---- ----
title: Gets all data in JSON format
---- ---- ---- ---- ----
/**
 * @route GET /api/json
 * @desc: Fetches all data in JSON format and returns to client
 * @access: public
 * /

---- ---- ---- ---- ----
title: Gets specific data in JSON format
---- ---- ---- ---- ----
/**
 * @route GET /api/json/:code
 * @desc: Fetches specific data based on query param in JSON format and returns to client
 * @access: public
 * /
```