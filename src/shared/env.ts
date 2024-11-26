import { z } from 'zod'
import dotenv from 'dotenv'
dotenv.config()

const envSchema = z.object({
  JWT_SECRET: z.string(),
  PORT: z.coerce.number().default(5000),
  SYNC: z.coerce.boolean().default(false),
  EXPIRESIN: z.string().default('1d'),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.log(_env.error.format())
  throw new Error('Erro ao validar variáveis de ambiente')
}

export const env = _env.data
