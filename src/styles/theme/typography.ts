import config from './config'

const pixelToRem = config.pxToRem(config.fontBase)

const defaultTitleFont =
  "Playfair Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"

const defaultBodyFont =
  "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"

export const typography = {
  titleFont: {
    fontFamily: defaultTitleFont,
    light: 400,
    semiBold: 700,
    bold: 900
  },
  bodyFont: {
    fontFamily: defaultBodyFont,
    light: 400,
    normal: 500,
    semiBold: 700,
    bold: 900
  },
  sizes: {
    small: pixelToRem(12),
    normal: pixelToRem(14),
    medium: pixelToRem(16),
    large: pixelToRem(18),
    xlarge: pixelToRem(24)
  }
}

export default typography
