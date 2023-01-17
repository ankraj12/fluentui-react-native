import {
  AvatarName,
  AvatarTokens,
  AvatarConfigurableProps,
  AvatarSlotProps,
  AvatarProps,
  AvatarColors,
  AvatarSizesForTokens,
  AvatarNamedColor,
  ColorSchemes,
  AvatarColorSchemes,
  RingConfig
} from './Avatar.types';
import { Theme, UseStylingOptions, buildProps } from '@fluentui-react-native/framework';
import { defaultAvatarTokens } from './AvatarTokens';
import { borderStyles, fontStyles } from '@fluentui-react-native/tokens';
import { globalTokens } from '@fluentui-react-native/theme-tokens';

export const avatarStates: (keyof AvatarTokens)[] = [
  ...AvatarColors,
  ...AvatarSizesForTokens,
  'neutral',
  'brand',
  'brandInverted',
  'accent',
  'circular',
  'square',
  'inactive',
  'iconColor',
  'iconSize',
  'size',
];

const tokensThatAreAlsoProps: (keyof AvatarConfigurableProps)[] = [
  'active',
  'avatarColor',
  'badgeStatus',
  'initialsColor',
  'outOfOffice',
  'ringBackgroundColor',
  'ringColor',
  'ringInnerGap',
  'ringThickness',
];

export const stylingSettings: UseStylingOptions<AvatarProps, AvatarSlotProps, AvatarTokens> = {
  tokens: [defaultAvatarTokens, AvatarName],
  tokensThatAreAlsoProps,
  states: avatarStates,
  slotProps: {
    root: buildProps(
      (tokens: AvatarTokens) => {
        const { size, active, avatarOpacity } = tokens;
        const ringConfig = getRingConfig(tokens);
        const avatarSize = active === 'active' ? ringConfig.size : size;

        return {
          style: {
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            alignSelf: 'flex-start',
            minWidth: avatarSize,
            minHeight: avatarSize,
            opacity: avatarOpacity,
            aspectRatio: 1,
          },
        };
      },
      ['avatarOpacity', 'size'],
    ),
    initials: buildProps(
      (tokens: AvatarTokens, theme: Theme) => {
        return {
          style: {
            ...fontStyles.from(tokens, theme),
            color: tokens.initialsColor || tokens.color,
            textAlign: 'center',
          },
        };
      },
      ['color', 'initialsColor', ...fontStyles.keys],
    ),
    initialsBackground: buildProps(
      // Inner most box styling comes from size here.
      (tokens: AvatarTokens, theme: Theme) => {
        const { backgroundColor, size, avatarColor } = tokens;
        const _avatarColor =
          !avatarColor || AvatarColors.includes(avatarColor as AvatarNamedColor) || ColorSchemes.includes(avatarColor as AvatarColorSchemes)
            ? backgroundColor
            : avatarColor;

        return {
          style: {
            ...borderStyles.from(tokens, theme),
            minWidth: size,
            minHeight: size,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: _avatarColor,
            borderWidth: tokens.borderWidth,
            borderColor: tokens.borderColor,
            ...getRingSpacing(tokens),
            aspectRatio: 1,
          },
        };
      },
      ['avatarColor', 'backgroundColor', 'size', 'borderColor', 'borderWidth', 'ringThickness', ...borderStyles.keys],
    ),
    image: buildProps(
      (tokens: AvatarTokens) => {
        const { borderRadius, size, borderWidth, borderColor } = tokens;
        return {
          style: {
            borderRadius: borderRadius,
            minWidth: size,
            minHeight: size,
            borderWidth: borderWidth,
            borderColor: borderColor,
            ...getRingSpacing(tokens),
            aspectRatio: 1,
          },
        };
      },
      ['borderRadius', 'size', 'borderColor', 'borderWidth', 'ringThickness'],
    ),
    icon: buildProps(
      (tokens: AvatarTokens) => {
        return {
          style: {
            position: 'absolute',
            fontSize: tokens.iconSize || tokens.fontSize,
          },
          ...getIconStyles(tokens),
        };
      },
      ['iconSize', 'iconColor'],
    ),
    fallbackIcon: buildProps(
      (tokens: AvatarTokens) => {
        return getIconStyles(tokens);
      },
      ['iconSize', 'iconColor'],
    ),

    // ankraj - can we create a 3 layer effect using this.
    // see how is the inner and outer pasrts coming.
    // question comes down to how can we create 3 circles from RCTVIEw.
    // Current implementation create the 2 rings from this RCTVIEW - using a border effect for outer ring.
    // The inner colored circle comes via margin - have another view outside it, that styles as per background of inner view.
    ring: buildProps(


      (tokens: AvatarTokens, theme: Theme) => {
        const { ringColor, ringBackgroundColor } = tokens;
        const ringConfig = getRingConfig(tokens);
        return {
          style: {
            borderStyle: 'solid',
            minWidth: ringConfig.size,
            minHeight: ringConfig.size,
            ...borderStyles.from(tokens, theme),
            // borderWidth: ringConfig.ringThickness,
            // glow ring for android.
            borderWidth: ringConfig.ringThickness,

            // borderColor: ringColor,
            borderColor: 'green',


            // Inner most ring for android
            // backgroundColor: ringBackgroundColor || 'transparent',
            backgroundColor: 'red',

            // Outermost - 3rd ring of android. Deefine one common
            // token that defines the size of this as well as 1st ting.
            // margin: ringConfig.ringThickness,
            ...getRingSpacing(tokens),

            // margin: 4,
            aspectRatio: 1,
          },
        };
      },
      ['size', 'ringColor', 'ringBackgroundColor', 'ringThickness', ...borderStyles.keys],
    ),
    outerRing: buildProps(

      // This expnads outside ferom inner mosr toot.
      (tokens: AvatarTokens, theme: Theme) => {
        const { ringColor, ringBackgroundColor } = tokens;
        const ringConfig = getRingConfig(tokens);
        return {
          style: {
            borderStyle: 'solid',
            minWidth: ringConfig.size,
            minHeight: ringConfig.size,
            ...borderStyles.from(tokens, theme),

            // backgroundColor: ringBackgroundColor || 'transparent',
            backgroundColor: 'red',
          },
        };
      },
      ['size', 'ringColor', 'ringBackgroundColor', 'ringThickness', ...borderStyles.keys],
    ),

    badge: buildProps(
      (tokens: AvatarTokens) => {
        return {
          size: tokens.badgeSize,
          status: tokens.badgeStatus,
          position: 'absolute',
          outOfOffice: tokens.outOfOffice,
        };
      },
      ['badgeSize', 'badgeStatus'],
    ),
  },
};




function getRingConfig(tokens: AvatarTokens): RingConfig {
  const { size, ringThickness } = tokens;
  // const SMALL_SIZE = 48;
  const MEDIUM_SIZE = 56;

  // Inner gap is the inner most ring for avatar.
  const innerGap = tokens.ringInnerGap || ringThickness;
  // const innerGap = 5;

  const strokeSize = {
    small: globalTokens.stroke.width15,
    medium: globalTokens.stroke.width20,
    large: globalTokens.stroke.width40,
  };
  if (ringThickness) {
    return {
      size: size + ringThickness * 2 + innerGap * 2,
      ringThickness,
      innerGap,
    };
  } else {
    if (size == 16) {
      return {
        size: size + strokeSize.small * 4,
        ringThickness: strokeSize.small,
        innerGap: strokeSize.small,
      };
    }
    if (size == 20) {
      return {
        size: size + strokeSize.small * 4,
        ringThickness: strokeSize.small,
        innerGap: strokeSize.medium,
      };
    }
    if (size <= MEDIUM_SIZE) {
      return {
        size: size + strokeSize.medium * 4,
        ringThickness: strokeSize.medium,
        innerGap: strokeSize.medium,
      };
    }
    return {
      size: size + strokeSize.large * 4,
      ringThickness: strokeSize.large,
      innerGap: strokeSize.large,
    };
  }
}

function getIconStyles(tokens: AvatarTokens) {
  return {
    color: tokens.iconColor || tokens.color,
    width: tokens.iconSize,
    height: tokens.iconSize,
  };
}

function getRingSpacing(tokens: AvatarTokens) {
  const ringConfig = getRingConfig(tokens);
  return tokens.active === 'active'
    ? {
      // marginTop: ringConfig.innerGap,
      // marginLeft: ringConfig.innerGap,
      // the innermost - 1st ring ring comes from here.
      // marginTop: 4,
      // marginLeft: 4,
      margin: ringConfig.innerGap


    }
    : {};
}
