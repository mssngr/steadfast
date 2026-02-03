import styled from '@/utils/styled'

export const Container = styled.View({
  width: 64,
  height: 64,
  overflow: 'hidden',
})

export const Character = styled.Image<{
  direction: 'up' | 'down' | 'left' | 'right'
  frame: number
}>(({ direction, frame }) => {
  const marginLeft = frame * -64
  switch (direction) {
    case 'left':
      return {
        marginTop: -64,
        marginLeft,
      }
    case 'down':
      return {
        marginTop: -128,
        marginLeft,
      }
    case 'right':
      return {
        marginTop: -192,
        marginLeft,
      }
    default:
      return {
        marginTop: 0,
        marginLeft,
      }
  }
})
