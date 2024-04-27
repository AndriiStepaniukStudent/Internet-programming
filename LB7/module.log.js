export default class Logger {
  static LogLevel = {
    DEBUG: 0,
    INFO: 1,
    WARNING: 2,
    ERROR: 3
  };

  constructor() {
    this.logLevelThreshold = Logger.LogLevel.INFO;
  }

  setLogLevelThreshold(level) {
    this.logLevelThreshold = level;
  }

  log(message, level) {
    if (level >= this.logLevelThreshold) {
      console.log(message);
    }
  }
}
