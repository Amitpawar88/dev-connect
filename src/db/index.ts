import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const queryClient = postgres(process.env.DATABASE_URL!);
// "postgres://postgres:devconnect@http://localhost:5432/postgres"
const db = drizzle(queryClient, { schema });

export { db };