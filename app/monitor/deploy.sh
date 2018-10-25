BUCKET=water-monitor

ng build --prod

cd ./dist/monitor
aws s3 sync . s3://${BUCKET} --delete
