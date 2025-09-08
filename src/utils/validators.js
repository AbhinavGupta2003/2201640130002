export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isValidMinutes = (value) => {
  const num = parseInt(value, 10);
  return !isNaN(num) && num > 0;
};

export const isValidShortcode = (code) => /^[a-zA-Z0-9_-]{3,15}$/.test(code);
