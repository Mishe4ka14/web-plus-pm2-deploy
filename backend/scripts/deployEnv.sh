#!/bin/bash

USER_HOST=$1
DEPLOY_PATH=$2
PROJECT_PATH=$3

# Запускаем скрипт для копирования .env.deploy
scp $PROJECT_PATH/.env.deploy $USER_HOST:$DEPLOY_PATH/.env.deploy