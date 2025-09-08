// Custom logger middleware
export const logger = {
  info: (message, data = {}) => {
    const log = { level: "INFO", message, data, time: new Date().toISOString() };
    localStorage.setItem(`log-${Date.now()}`, JSON.stringify(log));
  },
  error: (message, data = {}) => {
    const log = { level: "ERROR", message, data, time: new Date().toISOString() };
    localStorage.setItem(`log-${Date.now()}`, JSON.stringify(log));
  }
};
