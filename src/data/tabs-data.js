import TabContainer from '../components/TabContainer/index'
import React from 'react' // so I can pass a componet as a property value
import { breakpoints } from '../components/TabContainer/variables'

const tabData = new Array(10)
  .fill()
  .map((item, index) => {
    const title = !!(index % 2) ? `${index + 1} short title` : `${index + 1} a wee bit bit bit longer`
    return {
      title: title,
      blocks: [
        {
          text: [`Content for tab ${index + 1}`]
        }
      ]
    }
  })

const wrapperStyles = `
  max-width: 100%;

  @media(min-width: ${breakpoints.largePhone}) {
    min-width: 100%;
  }
`

export const data = [
  {
    title: 'Dating Ipsum',
    blocks: [
      {
        header: 'Larger blocks of text',
        text:  [
          `If you dress up like a pin-up doll for me P90X when I get drunk a fairly successful career in sports. I do well dating staying up late that just proves my point I have an IQ of 140, which means organized chaos, there's no such thing as a typical Friday night I'm really good at P90X if I make fun of you it's because I like you giving massages. Years ago I discovered pics on request I know shirtless pics are a no-no, but if you have a BMI under 25 that was a joke, by the way you will love it.`,
          `If you have a BMI under 25 be my partner in crime I'm an enormous man-child everything destructive that I do. I starred in my own reality show I attract girls who are very good-looking that was a joke, by the way Libertarian on the first date, females ages 18 - 22 skydiving my last partner told me the fact that you are even considering schooling me. Other shenanigans finishing my novel I attract girls who are very good-looking be my partner in crime my deep, manly voice really only soft drugs.`,
          `I'm the last of a dying breed that just proves my point no crazy chicks you should message me. Staying up late no robots posing as real people on my fetish list looking for adventure with morals, crying in my bathtub I did a lot of modeling work in the mid-80s but I only smoke when drinking I don't really keep a budget playing devil's advocate. Years ago I discovered years ago I discovered it's huge ask your mother clubbing at least once a day.`,
          `I should have grown up in the 40s I may be somewhat jaded I despise other shenanigans. My lizard tongue no robots posing as real people if you have an innie belly button I live in constant amazement of nature and the universe it's huge, one time in middle school friendzone it's huge I despise I am oddly aroused by. Skydiving I grow a creepy mustache every February my lizard tongue if you like my profile you could say I'm old-fashioned I do well dating.`
        ]
      }
    ]
  },
  {
    title: 'Animals are people too',
    blocks: [
      {
        header: 'iFrame/media',
        text:['(or maybe this could be a html5 player with that plays video uploaded by user for non-public media)'],
        iFrameUrl: 'https://www.youtube.com/embed/CEHKRXgHseU',
      },
      {
        header: 'Multiple Blocks of content',
        text:['This is a second content block'],
        iFrameUrl: 'https://www.youtube.com/embed/Oy',
      }
    ]
  },
  {
    title: "Inception",
    blocks: [
      {
        header: 'Pass another component as a child',
        text: [
          'A tabbed section in a tabbed section ...what the heck!',
          'Note: The inner scroll arrows here actually scroll the parent container, this is because it hooks into the  tabList id and both have the same id'
        ],
        component: <TabContainer tabData={tabData} wrapperStyles={wrapperStyles} customId={'inner'}/>
      }
    ]
  },
  {
    title: "It's the simple things",
    blocks: [
      {
        header: 'You can pass images and gifs 👀',
        text: ['EX: Image types, Multiple seperate data blocks'],
        img: 'https://www.pblworks.org/sites/default/files/inline-images/celebration.jpg',
        imgAlt: 'celebrate'
      },
      {
        img: 'https://media.giphy.com/media/RX7N03MEUafW8/source.gif',
        imgAlt: 'celebrate'
      },
      {
        text: [`And that's all folks!!!`],
      }
    ]
  }
]
