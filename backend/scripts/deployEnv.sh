#!/bin/bash

USER_HOST=$1
DEPLOY_PATH=$2

scp ${DEPLOY_PATH}/.env.deploy $USER_HOST:$DEPLOY_PATH/.env