import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.typography.sizes.xxxlarge};
    font-weight: ${theme.typography.titleFont.semiBold};
    font-family: ${theme.typography.titleFont.fontFamily};
    margin-bottom: ${theme.spacing.medium};
  `}
`

export const Text = styled.p`
  line-height: 1.65;
  font-family: ${({ theme }) => theme.typography.bodyFont.fontFamily};
  font-weight: ${({ theme }) => theme.typography.bodyFont.light};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
`
export const MainContent = styled.div`
  flex-basis: 100%;
  ${media.greaterThan('medium')`
    flex-basis: 65%;
  `}
`
export const PersonalInfoContent = styled.div`
  flex-basis: 100%;
  ${media.greaterThan('medium')`
    flex-basis: 35%;
  `}
  padding: 0 ${({ theme }) => theme.spacing.medium};
`

export const PersonalInfoList = styled.ul``
export const PersonalInfoItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.small};
`

type PersonalInfoTextProps = {
  subTitle?: boolean
}

const PersonalInfoTextModifiers = {
  subTitle: (theme: DefaultTheme) => css`
    font-weight: ${theme.typography.titleFont.semiBold};

    letter-spacing: 0.5px;
    border-bottom: 2px solid ${theme.pallete.primary.main};
    position: relative;
    display: inline-block;
    margin-right: 15px;
    &::after {
      content: ':';
      position: absolute;
      right: -10px;
    }
  `
}

export const PersonalInfoText = styled.span<PersonalInfoTextProps>`
  ${({ theme, subTitle }) => css`
    color: #fff;
    font-size: ${theme.typography.sizes.medium};
    line-height: calc(${theme.typography.sizes.medium} + 2px);
    font-family: ${theme.typography.titleFont.fontFamily};
    font-weight: ${theme.typography.titleFont.light};
    ${subTitle && PersonalInfoTextModifiers.subTitle(theme)}
  `}
`

export const ButtonDownload = styled.button`
  ${({ theme }) => css`
    font-family: ${theme.typography.bodyFont.fontFamily};
    margin-top: ${theme.spacing.xlarge};
    font-weight: ${theme.typography.bodyFont.normal};
    border: 2px solid ${theme.pallete.primary.main};
    color: ${theme.pallete.primary.main};
    padding: 10px 20px;
    background-color: transparent;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: ${theme.typography.sizes.normal};
    position: relative;
    line-height: 100%;
    letter-spacing: 1px;
    overflow: hidden;
    z-index: 1;
    &::after {
      position: absolute;
      content: '';
      width: 30%;
      height: 100%;
      top: 0;
      left: 35%;
      opacity: 0;
      transition: all 0.3s ease;
      background-color: ${theme.pallete.primary.main};
      z-index: -1;
    }
    &:hover {
      color: #000;
      &:after {
        opacity: 1;
        left: 0;
        width: 100%;
      }
    }
  `}
`
