import { Text } from '../sign-up/styles'
import {
  Container,
  Form,
  FormControl,
  FormLabel,
  Image,
  Input,
  SubmitButton,
} from './styles'

export function SignUpSecurity() {
  return (
    <Container>
      <Form>
        <Image src="/logo.png" alt="Logo" />
        <Text>Dados Pessoais</Text>
        <FormControl>
          <FormLabel>CPF</FormLabel>
          <Input type="text" id="cpf" name="CPF" required />
        </FormControl>

        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input type="text" id="name" name="Nome" required />
        </FormControl>

        <FormControl>
          <FormLabel>Fone</FormLabel>
          <Input type="text" id="fone" name="Fone" />
        </FormControl>

        <FormControl>
          <FormLabel>E-mail Pessoal</FormLabel>
          <Input type="email" id="email" name="Email" required />
        </FormControl>

        <FormControl>
          <FormLabel>E-mail IFSP</FormLabel>
          <Input type="email" id="email" name="Email" required />
        </FormControl>

        <FormControl>
          <FormLabel>Senha</FormLabel>
          <Input type="password" id="password" name="Password" required />
        </FormControl>

        <FormControl>
          <FormLabel>Confirme Senha</FormLabel>
          <Input type="password" id="password" name="Password" required />
        </FormControl>

        <SubmitButton type="submit">Proximo</SubmitButton>
      </Form>
    </Container>
  )
}
