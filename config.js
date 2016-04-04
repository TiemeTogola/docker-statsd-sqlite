{
  port: 8125
, backends: [ "../statsd-sqlite-backend/lib/sqlite.js" ]
, debug: true

, sqlite: {
    sqliteFile: "/test.sqlite"
  }
}
