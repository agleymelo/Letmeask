import { ReactNode } from 'react'
import { Container, Footer, UserInfo, ContentIcon } from './styles'

type QuestionProps = {
  children?: ReactNode
  content: string
  author: {
    name: string
    avatar: string
  }
  isAnswered?: boolean
  isHighlighted?: boolean
}

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false
}: QuestionProps): JSX.Element {
  return (
    <Container
      isAnswered={isAnswered}
      isHighlighted={isHighlighted && !isAnswered}
    >
      <p>{content}</p>

      <Footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>

        <ContentIcon>
          <div>{children}</div>
        </ContentIcon>
      </Footer>
    </Container>
  )
}
