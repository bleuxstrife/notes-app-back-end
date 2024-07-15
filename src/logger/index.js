// const path = require('path');
// const {
// //   createLogger, format, transports, winston,
// } = require('winston');
const winston = require('winston');
const WinstonCloudWatch = require('winston-cloudwatch');
require('winston-daily-rotate-file');

const cloudWatchConfig = {
  logGroupName: 'Application-Log-Group',
  logStreamName: 'Application-Log-Stream',
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
  awsRegion: process.env.AWS_REGION,
  messageFormatter: ({ level, message }) => `[${level}] : ${message}}}`,
};

// const transport = new transports.DailyRotateFile({
//   filename: path.join(__dirname, 'application-%DATE%.log'),
//   datePattern: 'YYYY-MM-DD-HH',
//   zippedArchive: true,
//   maxSize: '20m',
//   maxFiles: '7d',
// });

// const logger = createLogger({
//   level: 'info',
//   format: format.combine(
//     format.timestamp({
//       format: 'YYYY-MM-DD HH:mm:ss',
//     }),
//     format.errors({ stack: true }),
//     format.splat(),
//     format.json(),
//     format.splat(),
//   ),
//   transports: [
//     transport,
//   ],
// });

winston.add(new WinstonCloudWatch(cloudWatchConfig));
// module.exports = logger;
module.exports = winston;
