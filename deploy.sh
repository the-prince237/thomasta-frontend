#!/usr/bin/env sh
# abort on errors
set -e

git add .

if git diff-index --quiet HEAD --; 
    then   echo WORK TREE VERY VERY CLEAN ":)"
    else   echo commiting changes ... 
            git commit -m "Deploy"
            echo WORK TREE MORE THANT CLEAN ";)"
fi

# build
yarn build

# create and checkout to gh-pages branch
git checkout --orphan gh-pages

# navigate into the build output directory, add and commit changes
git --work-tree dist add --all
git --work-tree dist commit -m "Deploy"

# push build 
git push github HEAD:gh-pages --force

# remove build folder : dist and gh-pages branch
# rm -r dist
git checkout -f main
git branch -D gh-pages