// const dotenv = require('dotenv');

// dotenv.config();

// const  { MONGODB_URI } = process.env;

// module.exports = {
//     mongodb: {
//         url: MONGODB_URI,
//         options: {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//           autoIndex: true,
//         },
//       },
//     swagger: {
//         swaggerDefinition: {
//           info: {
//             title: 'Survey Project API',
//             description: 'Survey Project API Information',
//           },
//           host: process.env.SWAGGER_API_URL,
//           basePath: '/',
//           produces: ['application/json', 'application/xml'],
//           schemes: ['http', 'https'],
//         },
//         basedir: __dirname,
//         files: [ './src/Routes/**/*.js' ]
//     }
// }