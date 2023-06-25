// import { createPool } from "mysql2/promise";

// export const pool = createPool({
//   host: "database-1.cmqannzlyiat.us-east-1.rds.amazonaws.com",
//   user: "admin",
//   password: "tecsup00",
//   port: 3306,
//   database: "database-1",
// });
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'AKIAXMUMJEP7533TJWOQ',
  secretAccessKey: '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',
  region: 'us-east-1',
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export default dynamoDB;