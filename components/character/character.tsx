import React from 'react'
import type { ImageSourcePropType } from 'react-native'
import * as S from './character-styles'

export default function Character({
  animation,
}: {
  animation: {
    path: ImageSourcePropType
    frames: number
    speed: number
  }
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
      const animationInterval = setInterval(
        () =>
          setFrame((prevFrame) =>
            prevFrame === animation.frames - 1 ? 0 : prevFrame + 1,
          ),
        animation.speed,
      )
      return () => clearInterval(animationInterval)
    } else {
      setFrame(0)
    }
  }, [
    isMovingUp,
    isMovingDown,
    isMovingLeft,
    isMovingRight,
    animation.frames,
    animation.speed,
  ])

  React.useEffect(() => {
    function keyDownHandler(e: KeyboardEvent) {
      if (e.repeat) return
      switch (e.key) {
        case 'w':
        case 'ArrowUp':
          setIsMovingUp(true)
          break
        case 's':
        case 'ArrowDown':
          setIsMovingDown(true)
          break
        case 'a':
        case 'ArrowLeft':
          setIsMovingLeft(true)
          break
        case 'd':
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
        case 'w':
        case 'ArrowUp':
          setIsMovingUp(false)
          break
        case 's':
        case 'ArrowDown':
          setIsMovingDown(false)
          break
        case 'a':
        case 'ArrowLeft':
          setIsMovingLeft(false)
          break
        case 'd':
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
      <S.Character
        source={animation.path}
        direction={direction}
        frame={frame}
      />
    </S.Container>
  )
}
