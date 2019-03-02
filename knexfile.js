module.exports = {
  local: {
    client: "sqlite3",
    connection: {
      filename: "./local.sqlite3"
    }
  },
  production: {
    client: "pg",
    connection: {
      host: process.env.DATABASE_URL + "?ssl=true",
      database: "trainer"
    }
  }
};
