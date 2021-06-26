import { ReactNode, useState } from 'react'
import { useHistory } from 'react-router-dom'
import toast from 'react-hot-toast'

import logoImg from '../../assets/images/logo.svg'
import logoDarkImg from '../../assets/images/logo-dark.svg'

import sunImg from '../../assets/images/sun.svg'
import moonImg from '../../assets/images/moon.svg'

import { useTheme } from '../../hooks/useTheme'

import { useAuth } from '../../context/Auth'

import {
  Container,
  HeaderContainer,
  HeaderContent,
  ButtonSignOut,
  ContainerMobile,
  Burger
} from './styles'

interface HeaderProps {
  children?: ReactNode
}

export function Header({ children }: HeaderProps): JSX.Element {
  const [open, setOpen] = useState(false)

  const { toggleTheme, theme } = useTheme()

  const { signOut } = useAuth()

  const history = useHistory()

  async function handleSignOut() {
    await signOut()

    toast.success('successfully logged out')

    history.push('/')
  }

  return (
    <Container>
      <HeaderContainer>
        <img
          src={`${theme.title === 'light' ? logoImg : logoDarkImg}`}
          alt="Letmeask"
        />

        <ContainerMobile>
          <div onClick={toggleTheme}>
            {theme.title === 'light' ? (
              <img src={sunImg} alt="Icone do Tema Claro" />
            ) : (
              <img src={moonImg} alt="Icone do Tema Escuro" />
            )}
          </div>

          <Burger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </Burger>
        </ContainerMobile>

        <HeaderContent open={open}>
          {children}

          <ButtonSignOut onClick={handleSignOut}>
            Sair da Aplicação
          </ButtonSignOut>

          <div className="switch-theme" onClick={toggleTheme}>
            {theme.title === 'light' ? (
              <img src={sunImg} alt="Icone do Tema Claro" />
            ) : (
              <img src={moonImg} alt="Icone do Tema Escuro" />
            )}
          </div>
        </HeaderContent>
      </HeaderContainer>
    </Container>
  )
}
