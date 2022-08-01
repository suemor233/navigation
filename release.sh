#!env bash
CWD=$(pwd)
npm run build
cd .next
pwd
rm -rf cache
cp ../next.config.js ./standalone/next.config.js
cp -r ../public ./standalone/public

cd ./standalone
echo 'process.title = "navigation (NextJS)"' >>server.js
mv ../static/ ./.next/static

cd ..

zip --symlinks -r $CWD/release.zip ./*
