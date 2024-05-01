const dotenv = require('dotenv');

const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env.deploy') });
const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REF,
  DEPLOY_REPO,
} = process.env;

module.exports = {
  apps: [{
    name: 'api-service',
    script: 'dist/app.js',
  }],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      'pre-deploy-local': `bash scripts/deployEnv.sh ${DEPLOY_USER}@${DEPLOY_HOST} ${DEPLOY_PATH} ${__dirname}`,
      'post-deploy': 'cd backend && pwd && npm ci && npm run build && pm2 startOrRestart ecosystem.config.js --env production',

    },
  },
};
