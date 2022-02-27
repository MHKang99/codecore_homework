// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'express-rest-cohorts',
      username: 'minkang',
      password: 'fungee99'
    }
  },
  migrations: {
    tableName: "migrations",
    directory: "./db/migrations",
  }, 
    
};
