module.exports = {
  local: {
    client: "sqlite3",
    connection: {
      filename: "./local.sqlite3"
    }
  },
  production: {
    client: "postgres",
    connection: {
      host: process.env.DATABASE_URL,
      database: "trainer"
    }
  }
};
