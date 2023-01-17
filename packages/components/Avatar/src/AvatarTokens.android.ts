import { Theme } from '@fluentui-react-native/framework';
import { TokenSettings } from '@fluentui-react-native/use-styling';
import { AvatarTokens } from '.';
import { globalTokens } from '@fluentui-react-native/theme-tokens';

export const defaultAvatarTokens: TokenSettings<AvatarTokens, Theme> = (t: Theme) =>
({
  color: t.colors.neutralForeground3,
  backgroundColor: t.colors.neutralBackground5,
  avatarOpacity: 1,
  fontFamily: t.typography.variants.body1.face,
  fontWeight: globalTokens.font.weight.semibold,
  fontSize: globalTokens.font.size200,
  size: 56,
  iconSize: 16,
  iconColor: t.colors.neutralForeground3,

  // the inner and outer ring colors.
  ringBackgroundColor: t.colors.neutralBackground1,

  // this is the inner colored ring.
  ringColor: t.colors.neutralBackground,

  // glow ring color.
  borderColor: t.colors.neutralStroke1,

  borderWidth: t.host.appearance === 'highContrast' ? 1 : 0,
  circular: {
    borderRadius: globalTokens.corner.radiusCircular,
  },
  square: {
    // borderRadius: globalTokens.corner.radius40,
  },
  inactive: {
    avatarOpacity: 0.8,
  },
  size16: {
    size: 16,
    badgeSize: 'small',
    iconSize: 12,
    fontSize: globalTokens.font.size100,
    fontWeight: globalTokens.font.weight.regular
  },
  size20: {
    size: 20,
    badgeSize: 'small',

    // ankraj - replace with a token for icon size if exists?
    iconSize: 16,
    fontSize: globalTokens.font.size100,
    fontWeight: globalTokens.font.weight.regular
  },
  size24: {
    size: 24,
    badgeSize: 'small',
    iconSize: 16,
    fontSize: globalTokens.font.size100,
    fontWeight: globalTokens.font.weight.regular
  },
  size32: {
    size: 32,
    badgeSize: 'small',
    iconSize: 20,
    fontSize: globalTokens.font.size200,
    fontWeight: globalTokens.font.weight.regular
  },
  size40: {
    size: 40,
    badgeSize: 'medium',
    iconSize: 24,
    fontSize: globalTokens.font.size300,
    fontWeight: globalTokens.font.weight.regular
  },
  size56: {
    size: 56,
    badgeSize: 'medium',
    iconSize: 32,
    fontSize: globalTokens.font.size500,
    fontWeight: globalTokens.font.weight.medium,
  },
  size72: {
    // ankraj - is there a token that works for this?
    size: 72,
    badgeSize: 'large', // Presence Badge
    iconSize: 48,
    fontSize: globalTokens.font.size700,
    fontWeight: globalTokens.font.weight.medium,


  },
  neutral: {
    color: t.colors.neutralForeground3,
    iconColor: t.colors.neutralForeground3,
    ringColor: t.colors.transparentStroke,
  },
  brand: {
    backgroundColor: t.colors.brandBackground,
    color: t.colors.neutralForegroundOnColor,
    iconColor: t.colors.neutralForegroundOnBrand,
    ringColor: t.colors.brandStroke1,
  },
  brandInverted: {
    backgroundColor: t.colors.neutralBackground1,
    iconColor: t.colors.brandForeground1,
    ringColor: t.colors.brandStroke1,
  },
  accent: {
    backgroundColor: t.colors.brandBackgroundTint,
    iconColor: t.colors.brandForegroundTint,
    ringColor: t.colors.brandStroke1,
  },
  darkRed: getColorProps('darkRed', t),
  cranberry: getColorProps('cranberry', t),
  red: getColorProps('red', t),
  pumpkin: getColorProps('pumpkin', t),
  peach: getColorProps('peach', t),
  marigold: getColorProps('marigold', t),
  gold: getColorProps('gold', t),
  brass: getColorProps('brass', t),
  brown: getColorProps('brown', t),
  forest: getColorProps('forest', t),
  seafoam: getColorProps('seafoam', t),
  darkGreen: getColorProps('darkGreen', t),
  lightTeal: getColorProps('lightTeal', t),
  teal: getColorProps('teal', t),
  steel: getColorProps('steel', t),
  blue: getColorProps('blue', t),
  royalBlue: getColorProps('royalBlue', t),
  cornflower: getColorProps('cornflower', t),
  navy: getColorProps('navy', t),
  lavender: getColorProps('lavender', t),
  purple: getColorProps('purple', t),
  grape: getColorProps('grape', t),
  lilac: getColorProps('lilac', t),
  pink: getColorProps('pink', t),
  magenta: getColorProps('magenta', t),
  plum: getColorProps('plum', t),
  beige: getColorProps('beige', t),
  mink: getColorProps('mink', t),
  platinum: getColorProps('platinum', t),
  anchor: getColorProps('anchor', t),
} as AvatarTokens);

/**
 * A function which returns object of props depending on color and theme.
 * @param color
 * @param theme
 * @returns object of props - backgroundColor, color and ringColor
 */
function getColorProps(color: string, theme: Theme) {
  const themeAppearance = theme.host.appearance;
  switch (themeAppearance) {
    case 'light':
    default:
      return {
        backgroundColor: globalTokens.color[color].tint40,
        color: globalTokens.color[color].shade30,
        iconColor: globalTokens.color[color].shade30,
        ringColor: globalTokens.color[color].primary,
      };
    case 'dark':
      return {
        backgroundColor: globalTokens.color[color].shade30,
        color: globalTokens.color[color].tint40,
        iconColor: globalTokens.color[color].tint40,
        ringColor: globalTokens.color[color].tint30,
      };
  }
}
