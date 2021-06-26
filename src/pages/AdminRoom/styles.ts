import styled from 'styled-components'

export const Container = styled.div``

export const Main = styled.main`
  max-width: 880px;
  margin: 0 auto;
`

export const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: ${({ theme }) =>
      theme.title === 'light'
        ? theme.text.gray.third
        : theme.text.white.primary};
  }

  span {
    margin-left: 16px;
    background: ${({ theme }) =>
      theme.title === 'light'
        ? theme.text.pink.secondary
        : theme.text.pink.primary};
    border-radius: 9999px;
    padding: 8px 16px;
    color: ${({ theme }) => theme.text.white.primary};
    font-weight: 500;
    font-size: 14px;
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;

    h1 {
      font-size: 16px;
    }

    span {
      font-size: 12px;
    }
  }

  @media only screen and (min-width: 300px) and (max-width: 450px) {
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 16px;

    h1 {
      font-size: 14px;
    }

    span {
      font-size: 12px;
    }
  }
`

export const QuestionList = styled.div`
  margin-top: 32px;
`

export const EmptyQuestions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 164px;

  strong {
    margin-top: 16px;

    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    line-height: 28px;

    color: ${({ theme }) =>
      theme.title === 'light'
        ? theme.text.gray.secondary
        : theme.text.white.primary};
  }

  p {
    text-align: center;
    margin-top: 8px;

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 21px;
    color: ${({ theme }) =>
      theme.title === 'light'
        ? theme.text.gray.secondary
        : theme.text.white.primary};
  }

  @media only screen and (max-width: 768px) {
    margin-top: 64px;
  }

  @media only screen and (min-width: 300px) and (max-width: 450px) {
  }
`

// Modal
export const ContainerModal = styled.div`
  height: 100%;
  width: 100%;

  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    text-align: center;

    margin-top: 16px;

    h2 {
      margin-top: 24px;

      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      line-height: 34px;

      color: ${({ theme }) =>
        theme.title === 'light'
          ? theme.text.black.primary
          : theme.text.white.primary};
    }

    p {
      margin-top: 12px;

      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      line-height: 26px;
      color: ${({ theme }) =>
        theme.title === 'light'
          ? theme.text.gray.secondary
          : theme.text.white.primary};
    }
  }
`

export const Buttons = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 16px;

  margin-top: 40px;

  button {
    &:first-child {
      background: ${({ theme }) =>
        theme.title === 'light'
          ? theme.text.gray.four
          : theme.text.white.primary};
      color: ${({ theme }) =>
        theme.title === 'light'
          ? theme.text.white.primary
          : theme.text.black.primary};
    }

    &:nth-child(2) {
      background: ${({ theme }) => theme.text.red.primary};
      color: ${({ theme }) => theme.text.white.primary};
    }

    @media only screen and (min-width: 300px) and (max-width: 450px) {
      width: 100%;
    }
  }

  @media only screen and (min-width: 300px) and (max-width: 450px) {
    flex-direction: column;
    width: 100%;
  }
`
