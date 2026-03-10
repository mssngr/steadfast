import styled from '@/utils/styled'

const size = 64

export const Container = styled.View({
  width: size,
  height: size,
  overflow: 'hidden',
})

export const Character = styled.Image<{
  direction: 'up' | 'down' | 'left' | 'right'
  frame: number
}>(({ direction, frame }) => {
  const marginLeft = frame * -size
  switch (direction) {
    case 'left':
      return {
        marginTop: -size,
        marginLeft,
      }
    case 'down':
      return {
        marginTop: size * -2,
        marginLeft,
      }
    case 'right':
      return {
        marginTop: size * -3,
        marginLeft,
      }
    default:
      return {
        marginTop: 0,
        marginLeft,
      }
  }
})
