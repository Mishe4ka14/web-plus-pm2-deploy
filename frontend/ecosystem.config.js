const dotenv = require('dotenv');

dotenv.config({ path: './.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF, DEPLOY_REPO,
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      "post-deploy":
          `cd ~/web-plus-pm2-deploy-frontend/current/frontend/ && /home/mishechka/.nvm/versions/node/v20.12.2/bin/npm i && /home/mishechka/.nvm/versions/node/v20.12.2/bin/npm run build`,
    },
  },
};