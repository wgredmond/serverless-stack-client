export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "wgr-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://97bb2nb8i3.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_27Raner16",
    APP_CLIENT_ID: "6avindhccdh62r54i4mm6kuisp",
    IDENTITY_POOL_ID: "us-east-1:20592a37-cfa3-4c0e-96be-403e638dfc25"
  },
  STRIPE_KEY: "pk_test_qFfa4XIFCmw1ya4GSCopC7BQ00bAc5CSe1"
};