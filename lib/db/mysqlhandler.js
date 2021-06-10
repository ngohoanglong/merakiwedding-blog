import mysql from 'serverless-mysql'

export const mysqlHandler = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: parseInt(process.env.MYSQL_PORT),
  },
})

export async function query(
  q,
  values
) {
  try {
    const results = await mysqlHandler.query(q, values)
    await mysqlHandler.end()
    return results
  } catch (e) {
    throw Error(e.message)
  }
}
