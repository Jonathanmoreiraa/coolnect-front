import { InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash, FaRegUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../../libs/axios'
import {
  Container,
  Form,
  FormControl,
  FormLabel,
  IconButton,
  Image,
  Input,
  InputGroup,
  Redirect,
  SubmitButton,
} from './styles'

export function SignIn() {
  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({})

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)

    await api
      .post('/sessions', data)
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
        <FormControl>
          <FormLabel htmlFor="email">Usuário</FormLabel>
          <InputGroup>
            <Input type="text" {...register('email')} />

            <InputRightElement>
              <FaRegUser color="#ccc" />
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="password">Senha</FormLabel>
          <InputGroup>
            <Input type="password" {...register('password')} />

            <InputRightElement>
              <IconButton onClick={handleClick}>
                {show ? <FaEyeSlash color="#ccc" /> : <FaEye color="#ccc" />}
              </IconButton>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <SubmitButton type="submit">Entrar</SubmitButton>

        <Redirect>
          <Link to="#">Esqueceu a senha</Link>
          <Link to="/sign-up">Primeiro acesso</Link>
        </Redirect>
      </Form>
    </Container>
  )
}
