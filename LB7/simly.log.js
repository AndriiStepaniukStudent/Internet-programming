export const LogLevel = {
    DEBUG: 0,
    INFO: 1,
    WARNING: 2,
    ERROR: 3
  };
  
  let logLevelThreshold = LogLevel.INFO;
  
  export function setLogLevelThreshold(level) {
    logLevelThreshold = level;
  }
  
  export function log(message, level) {
    if (level >= logLevelThreshold) {
      console.log(message);
    }
  }
  