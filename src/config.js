const dev = {
  STRIPE_KEY: "pk_test_qFfa4XIFCmw1ya4GSCopC7BQ00bAc5CSe1",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-n669uuaa9ibf"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://h9dgwn3j9a.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ZUYp0DmfH",
    APP_CLIENT_ID: "7fsu2lvcca4sceepov3aratuee",
    IDENTITY_POOL_ID: "us-east-1:e36a53e2-59d0-4c02-a33f-10c8ffa21589"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_qFfa4XIFCmw1ya4GSCopC7BQ00bAc5CSe1",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-17k8l52s8j2pv"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://5t3x9dp96i.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_IReJr45XS",
    APP_CLIENT_ID: "dht8187jv0ffc100eibdjtrkf",
    IDENTITY_POOL_ID: "us-east-1:9bce259f-9a72-45fd-87ba-2c36442df027"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};