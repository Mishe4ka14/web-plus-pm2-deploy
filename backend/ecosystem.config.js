require('dotenv').config();

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REF,
  DEPLOY_REPO = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'api-service',
    script: './dist/app.js',
  }],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      'pre-deploy-local': `scp ${__dirname}/.env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/backend`,
      'post-deploy': 'npm i && npm run build && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};
