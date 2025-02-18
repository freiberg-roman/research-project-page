export const BREAKPOINTS = {
  phoneMax: 550,
  tabletMax: 1100,
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const SIZES = {
  4: `4px`,
  8: `8px`,
  12: `12px`,
  14: `14px`,
  16: `16px`,
  18: `18px`,
  20: `20px`,
  24: `24px`,
  30: `30px`,
  36: `36px`,
  48: `48px`,
  60: `60px`,
  72: `72px`,
};

// Converted to rems:
export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
};

export const FONT = {
  size: {
    12: `${12 / 16}rem`,
    14: `${14 / 16}rem`,
    16: `${16 / 16}rem`,
    18: `${18 / 16}rem`,
    20: `${20 / 16}rem`,
    24: `${24 / 16}rem`,
    30: `${30 / 16}rem`,
    36: `${36 / 16}rem`,
    48: `${48 / 16}rem`,
    60: `${60 / 16}rem`,
    72: `${72 / 16}rem`,
  },
};

export const ELEVATIONS = {
  small: `
      0.5px 1px 1px hsl(var(--shadow-color) / 0.7)
    `,
  medium: `
      1px 2px 2px hsl(var(--shadow-color) / 0.333),
      2px 4px 4px hsl(var(--shadow-color) / 0.333),
      3px 6px 6px hsl(var(--shadow-color) / 0.333)
    `,
  large: `
      1px 2px 2px hsl(var(--shadow-color) / 0.2),
      2px 4px 4px hsl(var(--shadow-color) / 0.2),
      4px 8px 8px hsl(var(--shadow-color) / 0.2),
      8px 16px 16px hsl(var(--shadow-color) / 0.2),
      16px 32px 32px hsl(var(--shadow-color) / 0.2)
    `,
};
