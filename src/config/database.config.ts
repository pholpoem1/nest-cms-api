import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  logging: true,
  logger: 'file',
  entities: ['./dist/**/*entity.{ts,js}'],
  migrationsTableName: 'migrations',
  migrations: ['dist/**/migrations/*.{ts,js}'],
}));
