#!/usr/bin/env bash
# Redirect output to stderr.
exec 1>&2
# enable user input
exec < /dev/tty

RED='\033[0;31m'
NC='\033[0m' # No Color
NOCOLOR='\033[0m'
RED='\033[0;31m'
GREEN='\033[0;32m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
LIGHTGRAY='\033[0;37m'
DARKGRAY='\033[1;30m'
LIGHTRED='\033[1;31m'
LIGHTGREEN='\033[1;32m'
YELLOW='\033[1;33m'
LIGHTBLUE='\033[1;34m'
LIGHTPURPLE='\033[1;35m'
LIGHTCYAN='\033[1;36m'
WHITE='\033[1;37m'

function prompt_and_run_npm_ci () {
  echo -e "$GREEN"
  read -p " 🤓 Do you want me to run the npm ci now (y/n)?" yn
  case $yn in
      [Yy]* ) echo " 🥸  Running npm ci:" && npm ci;;
      [Nn]* ) exit;;
  esac
}


function check_package_changes () {
  if git diff --cached --name-only | grep -E '^package(-lock)?\.json$' > /dev/null; then
  echo "🔧 Changes detected in package.json or package-lock.json. Make sure you ran 'npm install'."
  prompt_and_run_npm_ci
fi
}

echo -e "$YELLOW"
echo " 🥸  Checking for package changes..."
check_package_changes
