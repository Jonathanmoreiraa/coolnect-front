import { InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'
import { FaEye, FaEyeSlash, FaRegUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

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

  return (
    <Container>
      <Form>
        <Image src="/logo.png" alt="Logo" />
        <FormControl>
          <InputGroup>
            <FormLabel htmlFor="email">Usuário</FormLabel>
            <Input type="email" id="email" name="email" required />

            <InputRightElement>
              <FaRegUser color="#ccc" />
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl>
          <InputGroup>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input type="password" id="password" name="password" required />

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
