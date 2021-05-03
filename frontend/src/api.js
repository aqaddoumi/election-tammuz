const prod = (route) => {
    return 'https://api.election-tammuz.org' + route;
  };
  
const dev = (route) => {
return 'http://localhost:1337' + route;
};

export const api = process.env.NODE_ENV === 'production' ? prod : dev;
  