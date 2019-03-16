# run npm build
npm run build

# add and commit dist
git add dist
git commit -m 'deploy dist to github pages'

#push dist to gh-pages
git subtree push --prefix dist origin gh-pages
