import * as C from '@chakra-ui/react'
import styled from '@emotion/styled'

export const Container = styled(C.Flex)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(56, 105, 0, 1) 0%,
    rgba(76, 120, 9, 1) 35%,
    rgba(93, 138, 11, 1) 100%
  );

  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Form = styled(C.Flex)`
  width: 340px;
  height: auto;
  padding: 3rem 1rem;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  border-radius: 8px;
`
export const FormControl = styled(C.FormControl)`
  border: 1px solid transparent;
  border-bottom: 1px solid #ccc;
`

export const FormLabel = styled(C.Flex)`
  color: #ccc;
`

export const Input = styled(C.Input)`
  width: 100%;
`

export const SubmitButton = styled(C.Button)`
  align-items: center;
  justify-content: center;
  background-color: #1c1c1c;
  color: #fff;
  margin-top: 16px;

  &:hover {
    background-color: #1c1c1c;
    opacity: 0.9;
  }
`

export const Redirect = styled(C.Flex)`
  flex-direction: column;

  > a {
    font-weight: 900;
    color: #1c1c1c;
    text-decoration: none;
  }
`

export const Image = styled(C.Image)`
  width: 100%;
  height: auto;
  max-width: 80px;
  margin: 0 auto;
  border-radius: 8px;
`

export const Icon = styled(C.Icon)`
  width: 100%;
  height: auto;
`

export const Text = styled(C.Text)`
  font-weight: 500;
  font-size: larger;
  text-align: center;
  color: #c1c1c1;
`
