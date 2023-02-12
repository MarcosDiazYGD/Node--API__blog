

const config = {
  db: {
    development: {
      dialect: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'root',
      database: 'posts',
      define: {
        timestamps: true, 
        underscored: true,
        underscoredAll: true
      }
    },
    test: {},
    production: {},
  },
}

module.exports = config