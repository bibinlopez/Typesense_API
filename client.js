const Typesense = require('typesense');

const client = new Typesense.Client({
  nodes: [
    {
      host: 'ec2-65-1-108-183.ap-south-1.compute.amazonaws.com',
      port: '8108',
      protocol: 'http',
    },
  ],
  apiKey: 'vaqcyr27eJ',
  connectionTimeoutSeconds: 5,
});

module.exports = client;
