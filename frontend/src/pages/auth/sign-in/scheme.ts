/* eslint-disable no-use-before-define */
import { z } from 'zod'

export type SignInFormData = z.infer<typeof signInSchema>

export const signInSchema = z.object({
  email: z.string().email('Formato de email inválido.'),
  password: z.string().min(6, 'A senha deve conter no mínimo 6 caracteres.'),
})
