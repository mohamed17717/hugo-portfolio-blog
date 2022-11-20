# Hugo Portfolio & Blog

Blog and portfolio for a programmer to show out your skills.

## Installation

(https://gohugo.io/installation/)[https://gohugo.io/installation/]


## Development

```bash

# Server up
hugo server -D

# new blog post
hugo new posts/post_name.md

```

## deploy

```bash

# install netlify
npm install netlify-cli -g

# build hugo
hugo

# deploy a test
netlify deploy
# deploy a production to netlify
netlify deploy --prod

```

## Editing

### Projects

update the file of `data/projects.json` with your projects & group them with the categories which works as a tabs

### Style

update `layouts` folder that should follow `themes/layouts` so hugo can override it



