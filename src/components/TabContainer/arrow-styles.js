import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  transition: 0.3s;
  width: 4rem;
  z-index: 1;

  &.hidden {
    opacity: 0;
  }

  &.visible,  &:hover {
    opacity: 1;
  }

  &.next {
    background: linear-gradient(90deg, rgba(255,255,255,0.11948529411764708) 0%, rgba(255,255,255,0.5144432773109244) 50%, rgba(255,255,255,1) 100%);
    right: 0;
  }

  &.prev {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5144432773109244) 50%, rgba(255,255,255,0.11948529411764708) 100%);
    left: 0;
  }
`

export const ArrowWrapper = styled.button`
  align-items: center;
  background: #6d6d6dcc;
  border-radius: 4px;
  border: none;
  display: flex;
  height: 80%;
  justify-content: center;
  outline: 0;
  width: 3rem;

  &:hover {
    background: #787878;
  }
`

export const ArrowIcon = styled.div`
  border-width: 0 0 .5rem .5rem;
  border: solid transparent;
  box-shadow: 2px -2px 0 -1px #fbfeff inset; //safari, chrome
  padding: 10px;
  position: relative;
  transition: 0.2s;


  @-moz-document url-prefix() {
    box-shadow: 1px -1px 0 1px #dcdedf inset; // firefox
  }

  &.next {
    right: 15%;
    transform: rotate(225deg);
  }
  &.prev {
    left: 15%;
    transform: rotate(45deg);
  }
`