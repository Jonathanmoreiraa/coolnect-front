import { Button, Text } from '../sign-up/styles'
import {
  Container,
  DataName,
  DataTitle,
  Form,
  FormControl,
  FormLabel,
  Image,
  Input,
  Redirect,
} from './styles'

export function ResetPassword() {
  return (
    <Container>
      <Form>
        <DataTitle>
          <Image src="/logo.png" alt="Logo" />
          <DataName>
            <Text>Nome:</Text>
            <Text>Fulano de tal</Text>
          </DataName>
        </DataTitle>

        <Text>Dados Segurança</Text>
        <FormControl>
          <FormLabel>Qual o nome do seu primeiro animal de estimação</FormLabel>
          <Input type="text" id="question1" name="Question1" required />
        </FormControl>

        <FormControl>
          <FormLabel>Qual o nome da sua primeira professora?</FormLabel>
          <Input type="text" id="question2" name="Question2" required />
        </FormControl>

        <FormControl>
          <FormLabel>Senha</FormLabel>
          <Input type="password" id="password" name="Password" required />
        </FormControl>

        <FormControl>
          <FormLabel>Confirme Senha</FormLabel>
          <Input type="password" id="password" name="Password" required />
        </FormControl>

        <Redirect>
          <Button type="submit">Enviar</Button>
        </Redirect>
      </Form>
    </Container>
  )
}
