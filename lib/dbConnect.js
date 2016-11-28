/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const pg       = require('pg-promise')({});

const pgConfig = {  host:     process.env.PG_HOST,
                    port:     process.env.PG_PORT,
                    database: process.env.PG_DATABASE,
                    user:     process.env.PG_USER,
                    password: process.env.PG_PASSWORD };

const db = pgp(process.env.DATABASE_URL || 'postgres://alextong@localhost:5432/PBandJAMD');

module.exports = db;
