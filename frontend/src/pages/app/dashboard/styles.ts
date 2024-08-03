import * as C from '@chakra-ui/react'
import styled from '@emotion/styled'

export const Container = styled(C.Flex)`
  padding: 16px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgba(56, 105, 0, 1) 0%,
    rgba(76, 120, 9, 1) 35%,
    rgba(93, 138, 11, 1) 100%
  );
`

export const Card = styled(C.Flex)`
  width: 100%;
  height: 96vh;
  background-color: white;
  border-radius: 24px;
  overflow: hidden;
`

export const Col = styled(C.Grid)`
  width: 100%;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  background-color: white;
`

export const Row = styled(C.Box)`
  width: 100%;
  display: flex;
  padding: 8px;
  justify-content: flex-start;
  color: #979797;
  background-color: #fafafa;
  flex-direction: column;
`

export const Name = styled(C.Box)`
  background-color: #fafafa;
  color: #979797;
  padding: 0px 8px;
`

export const Image = styled(C.Avatar)`
  height: 80px;
`
export const Logo = styled(C.Image)`
  height: 72px;
  width: 72px;
  border-radius: 16px;
`
export const Post = styled(C.Box)`
  width: 100%;
  background-color: white;
  color: #979797;
`

export const PostTitle = styled(C.Box)`
  display: flex;
  background-color: white;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  border-radius: 16px;
  color: black;
`
export const ColPost = styled(C.Grid)`
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  padding: 8px;
  display: flex;
  width: 100%;
  flex-direction: row;
  background-color: white;
`
export const ColPostTitle = styled(C.Grid)`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  color: #979797;
`
export const ColBody = styled(C.Grid)`
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
`
export const Input = styled(C.Input)`
  background-color: white;
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
