# Jewel Front-end [![Build Status](https://travis-ci.com/ooow/jewel-f.svg?token=9FACddwEUzmJsZDJqVky&branch=master)](https://travis-ci.com/ooow/jewel-f) [![Website http://jewel-frontend.s3-website-eu-west-1.amazonaws.com](https://img.shields.io/website-up-down-green-red/http/jewel-frontend.s3-website-eu-west-1.amazonaws.com.svg)](http://jewel-frontend.s3-website-eu-west-1.amazonaws.com)

# Deployment

## Development server
### Node
```shell
npm install
npm start
```
### Docker
```shell
docker run -ti -p 3000:3000 -v /Users/nikitabelonogov/Documents/Own/jewel-f:/workspace node:8-alpine sh -c 'cd /workspace && npm install && npm start'
```
