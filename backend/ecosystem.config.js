require('dotenv').config({ path: './.env.deploy' });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REPO,
  DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'app',
    script: 'dist/app.js',
  }],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      'pre-deploy-local': `scp .env.deploy ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`,
      'post-deploy': 'cd backend && source ~/.nvm/nvm.sh && nvm use 16 && npm ci && npm run build && pm2 reload app',
    },
  },
};
