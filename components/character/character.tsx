import React from 'react'
import type { ImageSourcePropType } from 'react-native'
import * as S from './character-styles'

export default function Character({
  animation,
}: {
  animation: ImageSourcePropType
}) {
  const [frame, setFrame] = React.useState(0)
  const [direction, setDirection] = React.useState<
    'up' | 'down' | 'left' | 'right'
  >('down')
  const [isMovingUp, setIsMovingUp] = React.useState(false)
  const [isMovingDown, setIsMovingDown] = React.useState(false)
  const [isMovingLeft, setIsMovingLeft] = React.useState(false)
  const [isMovingRight, setIsMovingRight] = React.useState(false)

  React.useEffect(() => {
    if ((isMovingLeft && isMovingRight) || (isMovingUp && isMovingDown)) {
      return
    }
    if (isMovingLeft) {
      setDirection('left')
    } else if (isMovingRight) {
      setDirection('right')
    } else if (isMovingUp) {
      setDirection('up')
    } else if (isMovingDown) {
      setDirection('down')
    }
  }, [isMovingUp, isMovingDown, isMovingLeft, isMovingRight])

  React.useEffect(() => {
    if (isMovingUp || isMovingDown || isMovingLeft || isMovingRight) {
      const animation = setInterval(
        () => setFrame((prevFrame) => (prevFrame === 8 ? 0 : prevFrame + 1)),
        100,
      )
      return () => clearInterval(animation)
    } else {
      setFrame(0)
    }
  }, [isMovingUp, isMovingDown, isMovingLeft, isMovingRight])

  React.useEffect(() => {
    function keyDownHandler(e: KeyboardEvent) {
      if (e.repeat) return
      switch (e.key) {
        case 'ArrowUp':
          setIsMovingUp(true)
          break
        case 'ArrowDown':
          setIsMovingDown(true)
          break
        case 'ArrowLeft':
          setIsMovingLeft(true)
          break
        case 'ArrowRight':
          setIsMovingRight(true)
          break
      }
    }
    document.addEventListener('keydown', keyDownHandler)
    return () => document.removeEventListener('keydown', keyDownHandler)
  })

  React.useEffect(() => {
    function keyUpHandler(e: KeyboardEvent) {
      switch (e.key) {
        case 'ArrowUp':
          setIsMovingUp(false)
          break
        case 'ArrowDown':
          setIsMovingDown(false)
          break
        case 'ArrowLeft':
          setIsMovingLeft(false)
          break
        case 'ArrowRight':
          setIsMovingRight(false)
          break
      }
    }
    document.addEventListener('keyup', keyUpHandler)
    return () => document.removeEventListener('keyup', keyUpHandler)
  })

  return (
    <S.Container>
      <S.Character source={animation} direction={direction} frame={frame} />
    </S.Container>
  )
}
