var log4js = require('log4js'); // include log4js
var logger = require('../lib/logger');

// log4js.configure({ // configure to use all types in different files.
//     appenders: [
//         {   type: 'file',
//             filename: "/var/log/ExMiddle/error.log", // specify the path where u want logs folder error.log
//             category: 'error',
//             maxLogSize: 20480,
//             backups: 10
//         },
//         {   type: "file",
//             filename: "/var/log/ExMiddle/info.log", // specify the path where u want logs folder info.log
//             category: 'info',
//             maxLogSize: 20480,
//             backups: 10
//         },
//         {   type: 'file',
//             filename: "/var/log/ExMiddle/debug.log", // specify the path where u want logs folder debug.log
//             category: 'debug',
//             maxLogSize: 2000480,
//             backups: 10
//         }
//     ]
// });

// CONFIG CHANGE ON log4js v 2
log4js.configure({ 
  appenders: {
    out: { type: 'console' }, 
    default: { type: 'dateFile', filename: 'logs/default', "pattern":"-dd.log",alwaysIncludePattern:true}, 
    error: { type: 'dateFile', filename: 'logs/error', "pattern":"-dd.log",alwaysIncludePattern:true}, 
    info: { type: 'dateFile', filename: 'logs/info', "pattern":"-dd.log",alwaysIncludePattern:true},
    debug: { type: 'dateFile', filename: 'logs/debug', "pattern":"-dd.log",alwaysIncludePattern:true} 
  },
  categories: {
    default: { appenders: ['out','default'], level: 'info' },
    info: { appenders: ['info','out'], level: 'info' },
    error: { appenders: ['debug','error','out'], level: 'error' },
    debug: { appenders: ['debug','out'], level: 'info' }
  }
});
logger.setLoggerDebug(log4js.getLogger('debug'));
logger.setLoggerError(log4js.getLogger('error'));
logger.setLoggerInfo(log4js.getLogger('info'));
