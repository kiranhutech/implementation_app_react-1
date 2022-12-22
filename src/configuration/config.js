const configurations = {
  development: {
    SERVER_HOST: "http://localhost:3001", // "https://aqueous-falls-36359.herokuapp.com/", //"http://localhost:3200", // "192.168.0.105:3001", //
    APP_HOST: "http://localhost:3000", // "https://learn-with-kiran.herokuapp.com/", //"192.168.0.102:3001",
  },
  production: {
    SERVER_HOST: "https://aqueous-falls-36359.herokuapp.com/", //"http://localhost:3001",  //"http://localhost:3200", // "192.168.0.105:3001", //
    APP_HOST: "https://learn-with-kiran.herokuapp.com/", // "http://localhost:3000",  //"192.168.0.102:3001",
  },
};

function getConfig() {
  let domain = document.domain;
  let env = "development";
  switch (domain) {
    case "localhost":
      env = "development";
      break;
    case "hutech":
      env = "production";
      break;
    default:
      env = "production";
  }
  return configurations?.[env] || null;
}

export default getConfig();
