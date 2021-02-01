const config = {
  fontBase: 16,
  pxToRem: (fontBase: number) => (pixel: number): string => {
    const rem = pixel / fontBase
    return `${rem}rem`
  }
}

export default config
