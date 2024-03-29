export default () => ({
  DB: process.env.DB || 'helpdesk',
  DB_PORT: process.env.DB_PORT || 5432,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.DB_USER || 'admin',
  DB_PASS: process.env.DB_PASS || 'admin',
});
