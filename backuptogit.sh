#!/usr/bin/env bash
# backuptogit.sh

BASEDIR_RELATIVE=$(dirname "$0")
cd $BASEDIR_RELATIVE

git add .
git commit -m "Update"
git push

echo "Working directory : $(pwd)"

