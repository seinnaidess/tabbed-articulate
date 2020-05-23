import styled from 'styled-components'

const commonStyles = `
  width: 100%;
`

export const Block = styled.div`
  margin-bottom: 6rem;
`

export const ContentWrapper = styled.div`
  padding: 2rem 4rem;
`

export const ImageWrapper = styled.div`
  & img {
    ${commonStyles}
    height: auto;
    object-fit: cover;
  }
`

export const VideoWrapper = styled.div`
  ${commonStyles}
  & iframe, & object, & embed {
    left: 0;
    max-width: 100%; // contain to parent width (mostely for smaller viewports)
    position: relative;
    top: 0;
  }
`

export const HeaderText = styled.h2`
  color: #565657;
  font-family: 'Lato', sans-serif;
  margin: 0 0 1rem;
`

export const Text = styled.p`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  line-height: 1.5;
`
