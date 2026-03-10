import Character from '@/components/character'
import * as S from './app-styles'

export default function App() {
  return (
    <S.Page>
      <Character
        animation={{
          path: require('../assets/character/walk.png'),
          frames: 9,
          speed: 100,
        }}
      />
    </S.Page>
  )
}
