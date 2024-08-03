import { useForm } from 'react-hook-form'

import { api } from '../../../libs/axios'
import { Button, Redirect, Text } from '../sign-up/styles'
import { Container, Form, FormControl, FormLabel, Image, Input } from './styles'

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({})
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)

    await api
      .post('/users', data)
      .then((response) => {
        console.log('CREATED', response)
        navigate('/')
      })
      .catch((error) => {
        console.log('CREATED ERROR: ', error)
      })
  })

  return (
    <Container>
      <Form as={'form'} onSubmit={onSubmit}>
        <Image src="/logo.png" alt="Logo" />
        <Text>Dados Pessoais</Text>
        <FormLabel>CPF</FormLabel>
        <FormControl>
          <Input type="text" disabled />
        </FormControl>

        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input type="text" {...register('name')} />
        </FormControl>

        <FormControl>
          <FormLabel>Fone</FormLabel>
          <Input type="text" {...register('phone')} />
        </FormControl>

        <FormControl>
          <FormLabel>E-mail Pessoal</FormLabel>
          <Input type="email" {...register('email')} />
        </FormControl>

        <FormControl>
          <FormLabel>E-mail IFSP</FormLabel>
          <Input type="email" disabled />
        </FormControl>

        <FormControl>
          <FormLabel>Senha</FormLabel>
          <Input type="password" {...register('password')} />
        </FormControl>

        <FormControl>
          <FormLabel>Confirme Senha</FormLabel>
          <Input type="password" disabled />
        </FormControl>

        <Redirect>
          <Button type="submit">Proximo</Button>
        </Redirect>
      </Form>
    </Container>
  )
}
