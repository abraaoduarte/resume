import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.medium};
  ${media.greaterThan('medium')`
    grid-template-columns: repeat(2, 1fr);
  `}
`

export const Content = styled.div`
  text-align: center;
`

export const Timeline = styled.ul`
  padding: 0;
  margin: 20px 0 50px;
  list-style: none;
  position: relative;
  width: 100%;
  ${media.greaterThan('medium')`
    padding-left: 30px;
  `}
`

export const LineLeft = styled.span`
  ${({ theme }) => css`
    width: 2px;
    height: 100%;
    left: -10px;
    top: 0;
    position: absolute;
    background-color: ${theme.pallete.primary.main};
    &::before {
      box-sizing: border-box;
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid ${theme.pallete.primary.main};
      position: absolute;
      left: -4px;
      top: -10px;
    }
    &::after {
      box-sizing: border-box;
      content: '';
      top: 100%;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid ${theme.pallete.primary.main};
      position: absolute;
      left: -4px;
    }
  `}
`

export const TimelineItem = styled.li`
  ${({ theme }) => css`
    display: block;
    text-align: left;
    position: relative;
    margin-left: ${theme.spacing.large};
    padding: ${theme.spacing.large};
    margin-bottom: ${theme.spacing.xxxlarge};
  `}
`
export const TimelineTitle = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.typography.sizes.large};
    font-family: ${theme.typography.bodyFont.fontFamily};
    font-weight: ${theme.typography.bodyFont.light};
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 26px;
    margin: 0;
    text-transform: uppercase;
  `}
`
export const TimelineSubTitle = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.typography.sizes.small};
    font-family: ${theme.typography.bodyFont.fontFamily};
    font-weight: ${theme.typography.bodyFont.semiBold};
    text-transform: uppercase;
    color: ${theme.pallete.primary.main};
  `}
`
export const TimelineText = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.medium};
  margin-bottom: 0px;
  line-height: 1.65;
`

export const YearInfo = styled.div`
  left: 42px;
  height: 100%;
  position: absolute;
  top: 0;
  ${media.greaterThan('medium')`
    left: -10px;
  `}
`

export const YearTo = styled.span`
  transform: translateX(-120%);
  color: #fff;
  position: absolute;
  top: -18px;
`
export const YearFrom = styled.span`
  transform: translateX(-120%);
  color: #fff;
  position: absolute;
  bottom: -18px;
`
