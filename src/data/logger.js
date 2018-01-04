import * as winston from 'winston';

const { combine, printf } = winston.format;

const tsFormat = () =>
  `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;

const myFormat = printf(info => `[${tsFormat()}] ${info.message}`);

const logger = winston.createLogger({
  level: 'info',
  format: combine(myFormat),
  transports: [
    new winston.transports.File({
      filename: 'info.log',
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console());
}

export default logger;
