import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.medium};
  ${media.greaterThan('medium')`
    grid-template-columns: repeat(2, 1fr);
  `}
`

type ContentProps = {
  fullWidth?: boolean
}
const ContentModifiers = {
  fullWidth: () => css`
    width: 100%;
    display: block;
  `
}

export const Content = styled.div<ContentProps>`
  ${({ fullWidth = false }) => css`
    text-align: center;
    ${!!fullWidth && ContentModifiers.fullWidth}
  `}
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

export const ContentSkill = styled.ul`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.xxxlarge};
    position: relative;
    display: flex;
    flex-wrap: wrap;
  `}
`
export const SkillItem = styled.li`
  ${({ theme }) => css`
    padding: 0 ${theme.spacing.large};
    position: relative;
    flex-basis: 100%;
  `}
  ${media.greaterThan('medium')`
    flex-basis: 50%;
  `}
`
export const SkillText = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.typography.sizes.medium};
    font-weight: ${theme.typography.titleFont.light};
    margin: 0 0 ${theme.spacing.medium};
    text-transform: uppercase;
    font-family: ${theme.typography.titleFont.fontFamily};
  `}
`

export const SkillProgress = styled.div`
  ${({ theme }) => css`
    display: flex;
    font-size: ${theme.spacing.small};
    height: ${theme.spacing.small};
    width: 100%;
    background-color: #404144;
    border-radius: 0;
    box-shadow: none;
    margin-bottom: ${theme.spacing.large};
    overflow: visible;
  `}
`

type SkillProgressBarProps = {
  progressValue?: number
}

export const SkillProgressBar = styled.div<SkillProgressBarProps>`
  ${({ theme, progressValue = 100 }) => css`
    background-color: ${theme.pallete.primary.main};
    width: ${`${progressValue}%`};
    box-shadow: none;
    position: relative;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    &::after {
      content: '';
      box-sizing: border-box;
      display: block;
      border: 15px solid transparent;
      border-bottom: 21px solid transparent;
      border-bottom-color: ${theme.pallete.primary.main};
      position: absolute;
      top: -28px;
      right: -12px;
    }
  `}
`

export const SkillProgressBarValue = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.typography.sizes.medium};
    font-weight: bold;
    color: #fff;
    position: absolute;
    top: -36px;
    right: 0;
  `}
`
