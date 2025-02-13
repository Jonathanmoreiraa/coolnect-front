import { Text } from '../sign-up/styles'
import {
  Container,
  DataName,
  DataTitle,
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
          <FormLabel>Em qual cidade seus pais se conheceram</FormLabel>
          <Input type="text" id="question3" name="Question3" required />
        </FormControl>

        <SubmitButton type="submit">Enviar</SubmitButton>
      </Form>
    </Container>
  )
}
