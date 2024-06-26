/* eslint-disable sort-keys */
export const sizes = {
  xsmall: 1,
  small: 375,
  medium: 768,
  large: 992,
  xlarge: 1200,
  xxlarge: 1440,
  xxxlarge: 1920,
};

export const mq = {
  small: `screen and (min-width: ${sizes.small}px)`,
  medium: `screen and (min-width: ${sizes.medium}px)`,
  large: `screen and (min-width: ${sizes.large}px)`,
  xlarge: `screen and (min-width: ${sizes.xlarge}px)`,
  xxlarge: `screen and (min-width: ${sizes.xxlarge}px)`,
  xxxlarge: `screen and (min-width: ${sizes.xxxlarge}px)`,
};
