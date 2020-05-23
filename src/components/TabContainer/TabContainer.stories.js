import React from 'react'
import { storiesOf } from '@storybook/react'

import TabContainer from './index'
import { data } from '../../data/tabs-data'

// export default {
//   title: 'TabContainer',
//   component: TabContainer,
// };



storiesOf('TabContainer', module)
  .add('Basic', () => <TabContainer tabData={data} customId={'test'}/>)
  .add('Empty props array', () => (<TabContainer tabData={[]} />))
  .add('Init state - no tabData prop passed', () => (<TabContainer />))


// just a lil generic dummy data generator
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


export const Basic = () => <TabContainer tabData={data} />