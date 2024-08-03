import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Center,
  Text,
} from '@chakra-ui/react'

import {
  Card,
  Col,
  ColBody,
  ColPost,
  ColPostTitle,
  Container,
  Input,
  Logo,
  Name,
  Post,
  PostTitle,
  Row,
  SubmitButton,
} from './styles'

export function Dashboard() {
  return (
    <>
      <Container>
        <Card>
          <Col
            style={{
              width: '35%',
              maxWidth: '304px',
              height: '100vh',
              backgroundColor: '#fafafa',
            }}
          >
            <Row
              style={{
                justifyContent: 'center',
              }}
            >
              <Center>
                <Avatar
                  alignContent="center"
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />
              </Center>
              <Name>
                <Text fontSize="20px">Fulano de Tal</Text>
              </Name>
              <Name>
                <Text fontSize="12px">Engenheiro da computação</Text>
              </Name>
            </Row>
            <Row>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Grupos
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} backgroundColor="white">
                    <Text>Grupo 1</Text>
                    <Text>Grupo 2</Text>
                    <Text>Grupo 3</Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Row>

            <Row>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Eventos
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} backgroundColor="white">
                    <Text>Evento 1</Text>
                    <Text>Evento 2</Text>
                    <Text>Evento 3</Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Row>
          </Col>
          <Col
            style={{
              overflowY: 'auto',
              height: 'calc(100% - 32px)',
            }}
          >
            <Row
              style={{
                backgroundColor: 'white',
                padding: '16px',
              }}
            >
              <Logo src="./logo.png" alt="Logo" />
            </Row>
            <Row>
              <Input placeholder="Faça seu post" />
            </Row>
            <Row
              style={{
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <SubmitButton
                style={{
                  width: '80px',
                }}
                type="submit"
              >
                Postar
              </SubmitButton>
            </Row>
            <Post>
              <Row
                style={{
                  padding: '8px 16px',
                }}
              >
                <PostTitle>
                  <ColPost>
                    <Avatar
                      alignContent="center"
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                    />
                    <ColPostTitle>
                      <Text fontSize="16px">Fulano de tal</Text>
                      <Text fontSize="10px">Engenheiro da computação</Text>
                    </ColPostTitle>
                  </ColPost>
                  <ColBody>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </Text>
                  </ColBody>
                </PostTitle>
              </Row>
              <Row
                style={{
                  padding: '8px 16px',
                }}
              >
                <PostTitle>
                  <ColPost>
                    <Avatar
                      alignContent="center"
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                    />
                    <ColPostTitle>
                      <Text fontSize="16px">Fulano de tal</Text>
                      <Text fontSize="10px">Engenheiro da computação</Text>
                    </ColPostTitle>
                  </ColPost>
                  <ColBody>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </Text>
                  </ColBody>
                </PostTitle>
              </Row>
              <Row
                style={{
                  padding: '8px 16px',
                }}
              >
                <PostTitle>
                  <ColPost>
                    <Avatar
                      alignContent="center"
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                    />
                    <ColPostTitle>
                      <Text fontSize="16px">Fulano de tal</Text>
                      <Text fontSize="10px">Engenheiro da computação</Text>
                    </ColPostTitle>
                  </ColPost>
                  <ColBody>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </Text>
                  </ColBody>
                </PostTitle>
              </Row>
            </Post>
          </Col>
        </Card>
      </Container>
    </>
  )
}
