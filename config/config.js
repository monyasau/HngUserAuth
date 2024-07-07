require('dotenv').config();
module.exports = {
    database: 'hngbackend2',
    username: 'postgres',
    password: 'postgres101',
    host: 'localhost',
    dialect: 'postgres',
    secret: '$g2dkssnsjye86', // Replace with a secure key
    DATABASE_URL: process.env.APP_ENV == 'test' ? 'postgres://postgres:postgres101@localhost:5432/hngbackend2' : 'postgres://postgres:postgres101@localhost:5432/hngbackend2'
};
