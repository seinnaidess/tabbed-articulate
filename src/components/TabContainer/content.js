import React from 'react'
import {
  Block,
  ContentWrapper,
  HeaderText,
  ImageWrapper,
  Text,
  VideoWrapper
} from './content-styles'


const Content = ({ activeContent : { blocks = [] } }) => {
  const handleIFrame = (iFrameUrl) => {
    // this is prolly not best practice, and in the real world a
    // check on source domain (whitelist of sorts) and some santizing would probably be
    // a good idea. Additonally - though this renders fine, there are possibly some concerns
    // with it attaching to the browser `Document` rather than the react element it's in
    // (short rabbit hole I went down lol), there are more sophisticated ways to do this out there -
    // but for the sake of time, here's fast and admittedly,  *dirty*.

    return (
      <VideoWrapper>
        <iframe width="560" height="315" src={iFrameUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
      </VideoWrapper>
    )
  }

  const generateBlock = (block, index) => {
    const {
      component,
      header,
      iFrameUrl,
      img,
      imgAlt,
      text
    } = block

    return (
      <Block key={`block-${index}`}>
        { header && <HeaderText>{ header }</HeaderText> }
        { text && text.map((paragraph, index) => {
          return (
            <Text key={`block-text-${index}`}>
              { paragraph }
            </Text>
            )
          })
        }
        { img &&
          <ImageWrapper>
            <img src={img} alt={imgAlt}/>
          </ImageWrapper>
        }
        { iFrameUrl && handleIFrame(iFrameUrl) }
        { component && component }
      </Block>
    )
  }

  return(
    <ContentWrapper>
      {
        blocks.map((block, index) => {
          return generateBlock(block, index)
        })
      }
    </ContentWrapper>
  )
}

export default Content