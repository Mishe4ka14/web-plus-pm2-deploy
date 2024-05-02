require('dotenv').config({ path: './.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REPO, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps : [{
    name: 'frontend',
    script: 'src/index.js',
    watch: true,
    env: {
      NODE_ENV: 'production'
    }
  }],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      'post-deploy': 'cd frontend && source /home/mishechka/.nvm/nvm.sh && nvm use && npm i && npm run build'
    }
  }
};