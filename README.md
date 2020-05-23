### To run:

- install `$ yarn install` or `$ yarn`
- run in storybook: `$ yarn storybook`

  note: if anything seems janky try running `yarn build-storybook`

  Open `Tabbed Section` from left sidebar.

  Tip: Just in case you are not familiar with storybook, to see it _outside of storybook_ in a regular browser (it's hard to check responsiveness in storybook since it's kinda in a world of it's own) - click the middle icon top right.



--------------------------------------------------------------------


### Assumptions:
  - Smallest sreensize/viewport would be a iPhone5 at 320px

  - That this puppy's width get's limited at some point.
    I tone it down to `max-width: 60%` at 1200px (desktop)

  - Parent component positions tabbed container on the page,
    thus tabbedContainer only cares about it's internal styling

### approach:
 - Mobile-first CSS, using `styled-components`
 
 - I used an array of strings to seperate paragraphs of textin the `tabData` obj  - it was just  a guess of how paragraphs of user input (collected from some sort of wizywig editor) _may_ get stored in the DB and be returned to the frontend in an API response.
 
 - For 'sections' within a single tab I used the idea of data `blocks` where each block (`{}`)represents a section in which media, text, image/gifs, or other components can be passed. As many blocks as desired can be passed to a tab. 
 
 ... other than that it's all pretty striaghforward (I hope), any questions, def feel free to ask :) 

### Edgecases considered:
  - `no data passed` => uses default props promting user to create a tab
  - `empty prop array passed` => indicates user error, so overrides default props and renders hint
  - `3 or less tabs`  => no arrows on hover


### I would have liked to:
  _This could have gone on forever, because there are lots of things I would love to do with this to absolutely perfect it (and the list keeps growing)  - but at some point for the purposes of a coding challenge being returned in a timely manner, I had to allow some imperfection.  ;)_

  *Arrows:*
    - rather than decide to show the arrows based on # of tab items passed, insteads detect when the width
      of the tabPanel compared vrs width the parent container and if it's longer, use the arrows - else not.
      However tabPanel's  `.clientWidth` always came back the same width at the container most likley because I am using `overflow:hidden` on the container. I am sure there's a way to do this however.

  *Accessibility:*
    - Spent more time ensuring it is fully accessible.
      Companies are out in these streets getting sued _left and right_, lol.

  *Tests:* 
    - not a lot logic going on here, but maybe write some UI tests
  
  *Animate:*
    - I would have liked to animtate changes such as height and UI state changes when switching   tabs. I know there is a React transistions lib for this (animating between state changes) otherwise height changes, in particular, can be tricky to animate without starting off with a set `px` height. I once did it using margin (or padding or something) but it felt pretty hacky. Again, your transistions look great - what's your wizardry here?

