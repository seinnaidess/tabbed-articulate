import React from 'react'

import {
  ArrowIcon,
  ArrowWrapper,
  Container
} from './arrow-styles'


const Arrow = ({position, isVisible, handleArrowClick}) => {
  const arrowVisible = isVisible ? 'visible' : 'hidden'

  return (
    <Container onClick={handleArrowClick} className={`${position} ${arrowVisible}`}>
      <ArrowWrapper>
        <ArrowIcon className={position}/>
      </ArrowWrapper>
    </Container>
  )
}

export default Arrow