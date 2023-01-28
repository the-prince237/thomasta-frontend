#!/usr/bin/env sh
# abort on errors
set -e
# build
yarn run build

# add, commit and push main branch
git add -A
git commit -m "update distant main branch"
git push -u origin main

# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git branch -M main
git push -f git@github.com:the-prince237/thomasta-frontend.git main:gh-pages
cd -