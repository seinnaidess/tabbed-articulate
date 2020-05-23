import React, { useState, useEffect } from 'react'

import Arrow from './arrow'
import Content from './content'

import { Wrapper, TabList, Tab } from './tabbed-container-styles'


const TabContainer = ({ customId, tabData, wrapperStyles }) => {

  // defaultProp protects against a tabData prop not being passed, but not against it being passed
  // with an empty array. I could totally return null here, however for clarity to the user I am rendering
  // a pro tip ;)
  const data = tabData.length ?
    tabData :
    [
      {
        title: 'Bloop!',
        blocks: [
          {
            text: ['You are seeing this because you passed empty data :( '],
            img: 'https://media.giphy.com/media/MXApm8NraO5Jm/source.gif',
            imgAlt: 'bangs head. fml',
          }
        ]
      }
    ]

  const [activeTab, setActiveTab] = useState(data[0].title)
  const [activeContent, setActiveContent] = useState(data[0])
  const [arrowIsVisible, setArrowIsVisible] = useState(false)

  const makeActive = (item) => {
    setActiveTab(item.title)
    setActiveContent(item)
  }

  const toggleArrowVisibility = () => {
    if(data.length < 3) return
    setArrowIsVisible(!arrowIsVisible)
  }

  const scrollTabs = (direction) => {
    // I literally just did this `customId` for my 'inception'
    // tab so that the inner tabContainer could have a unique id
    // and not scroll the outer tabContainer. Only a crazy person
    // would put a tabContainer in a tabContainer tho. Call me crazy ;)
    const el = customId ?
      document.getElementById(customId) :
      document.getElementById('tabPanel')

    el.scrollLeft = direction === 'prev' ? 0 : 10000
  }

  return (
    <Wrapper id='tabs-wrapper' wrapperStyles={wrapperStyles} >
      <div style={{width: '100%', position: 'relative'}}>
        <Arrow
          handleArrowClick={() => scrollTabs('prev')}
          isVisible={arrowIsVisible}
          position={'prev'}/>
        <TabList id={customId ? customId : `tabPanel`}
          onMouseEnter={toggleArrowVisibility}
          onMouseLeave={toggleArrowVisibility}>
            {data.map((item, index) => {
              const activeClass = activeTab === item.title ? 'active' : 'inactive'
              const applyLastClass = index === tabData.length - 1 && tabData.length > 1
              const ifLastClass =  applyLastClass ? 'last' : ''
              return (
                <Tab
                  key={`tab-${index}`}
                  role="tab"
                  aria-selected={activeTab === item.title}
                  aria-controls="tabPanel"
                  id={item.title}
                  onClick={ () => makeActive(item)}
                  className={`${activeClass} ${ifLastClass}`}
                >
                  { item.title }
                </Tab>
              )
            })}
        </TabList>
        <Arrow
          handleArrowClick={() => scrollTabs('next')}
          isVisible={arrowIsVisible}
          position={'next'}/>
      </div>
      <Content activeContent={activeContent} />
    </Wrapper>
  )
}

TabContainer.defaultProps = {
  tabData: [
    {
      title: 'Your first tab',
      blocks: [
        {
          header: null,
          text: ['Your first content! Woot!'],
          iFrameUrl: null,
          img: null,
          imgAlt: null,
          component: null
        }
      ]
    }
  ],
  customId: ''
}

export default TabContainer
