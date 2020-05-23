import styled from 'styled-components'
import { breakpoints } from './variables'

export const Wrapper = styled.div`
  border: 1px solid #ddd;
  overflow: hidden;
  max-width: 95%;
  box-shadow: 0 0.4rem 1.2rem 0.2rem rgba(0,0,0,.05);
  position: relative;

  @media(min-width: ${breakpoints.largePhone}) {
    max-width: 80%;
  }

  ${props => props.wrapperStyles ? props.wrapperStyles : ''}
`

export const TabList = styled.div`
  align-items: center;
  background: #f5f5f5;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  position: relative;
  width: 100%;
  scroll-behavior: smooth;
`

export const Tab = styled.button`
  align-items: center;
  align-self: stretch;
  background: #f5f5f5;
  border: none; // reset
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  color: #313537;
  display: flex;
  flex: 0 1 100%;
  font-family: 'Lato';
  font-size: 16px;
  justify-content: center;
  margin: 0;
  min-width: 50%;
  padding: 1rem 2rem;
  transition: background .5s;
  font-family: 'Lato', sans-serif;

  &.last {
    border-right: none;
  }

  @media(min-width: ${breakpoints.largePhone}) {
    min-width: 40%;
  }

  @media(min-width: ${breakpoints.tablet}) {
    max-width: 50%;
    min-width: 30%;
  }

  &.active {
    background: #fff;
    border-bottom: none;
    color: #747a7e;
  }

  &:hover {
    background: #efefef;
    transition: background .5s;

    &.active {
      background: #fff;
      border-bottom: none;
      color: #747a7e;
    }
  }

  &:focus {outline:0;}
`