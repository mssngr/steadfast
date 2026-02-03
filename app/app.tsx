import Character from '@/components/character'
import * as S from './app-styles'

export default function App() {
  return (
    <S.Page>
      <Character animation={require('../assets/character/walk.png')} />
    </S.Page>
  )
}
