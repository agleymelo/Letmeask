import toast from 'react-hot-toast'

import copyImg from '../../assets/images/copy.svg'

import { Container } from './styles'

type RoomCodeProps = {
  code: string
}

export function RoomCode(props: RoomCodeProps): JSX.Element {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)

    toast.success('Code copied')
  }

  return (
    <Container onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala {props.code}</span>
    </Container>
  )
}
