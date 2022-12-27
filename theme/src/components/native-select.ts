import { ComponentMultiStyle, mode } from '@yamada-ui/core'
import { getColor, isArray } from '@yamada-ui/utils'

export const NativeSelect: ComponentMultiStyle = {
  baseStyle: {
    container: {},
    field: {
      width: '100%',
      minWidth: 0,
      outline: 0,
      position: 'relative',
      appearance: 'none',
      pb: '1px',
      lineHeight: 'normal',
      bg: ['white', 'gray.700'],
      _focus: {
        zIndex: 'unset',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      '&:invalid': {
        color: ['gray.500', 'whiteAlpha.400'],
      },
      '> option:first-of-type': {
        color: ['gray.500', 'whiteAlpha.400'],
      },
      '> option, > optgroup': {
        bg: ['white', 'gray.700'],
      },
    },
    icon: {
      width: '6',
      height: '100%',
      color: ['blackAlpha.600', 'whiteAlpha.600'],
      fontSize: 'xl',
      _disabled: {
        opacity: 0.5,
      },
    },
  },

  variants: {
    outline: ({
      theme: t,
      colorScheme: s,
      focusBorderColor: fc = ['blue.500', 'blue.300'],
      errorBorderColor: ec = ['red.500', 'red.300'],
    }) => {
      const focusBorderColor = isArray(fc)
        ? mode(getColor(fc[0], fc[0])(t, s), getColor(fc[1], fc[1])(t, s))(s)
        : getColor(fc, fc)(t, s)
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, s), getColor(ec[1], ec[1])(t, s))(s)
        : getColor(ec, ec)(t, s)

      return {
        field: {
          border: '1px solid',
          borderColor: 'inherit',
          bg: 'inherit',
          _hover: {
            borderColor: ['gray.300', 'whiteAlpha.400'],
          },
          _readOnly: {
            boxShadow: 'none !important',
            userSelect: 'all',
          },
          _focus: {
            zIndex: 1,
            borderColor: focusBorderColor,
            boxShadow: `0 0 0 1px ${focusBorderColor}`,
          },
          _invalid: {
            borderColor: errorBorderColor,
            boxShadow: `0 0 0 1px ${errorBorderColor}`,
          },
          _focusVisible: {
            zIndex: 1,
            borderColor: focusBorderColor,
            boxShadow: `0 0 0 1px ${focusBorderColor}`,
          },
        },
      }
    },
    filled: ({
      theme: t,
      colorScheme: s,
      focusBorderColor: fc = ['blue.500', 'blue.300'],
      errorBorderColor: ec = ['red.500', 'red.300'],
    }) => {
      const focusBorderColor = isArray(fc)
        ? mode(getColor(fc[0], fc[0])(t, s), getColor(fc[1], fc[1])(t, s))(s)
        : getColor(fc, fc)(t, s)
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, s), getColor(ec[1], ec[1])(t, s))(s)
        : getColor(ec, ec)(t, s)

      return {
        field: {
          border: '2px solid',
          borderColor: 'transparent',
          bg: ['gray.100', 'whiteAlpha.50'],
          _hover: {
            bg: ['gray.200', 'whiteAlpha.100'],
          },
          _readOnly: {
            boxShadow: 'none !important',
            userSelect: 'all',
          },
          _focus: {
            bg: 'transparent',
            borderColor: focusBorderColor,
          },
          _invalid: {
            borderColor: errorBorderColor,
          },
          _focusVisible: {
            bg: 'transparent',
            borderColor: focusBorderColor,
          },
        },
      }
    },
    flushed: ({
      theme: t,
      colorScheme: s,
      focusBorderColor: fc = ['blue.500', 'blue.300'],
      errorBorderColor: ec = ['red.500', 'red.300'],
    }) => {
      const focusBorderColor = isArray(fc)
        ? mode(getColor(fc[0], fc[0])(t, s), getColor(fc[1], fc[1])(t, s))(s)
        : getColor(fc, fc)(t, s)
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, s), getColor(ec[1], ec[1])(t, s))(s)
        : getColor(ec, ec)(t, s)

      return {
        field: {
          borderBottom: '1px solid',
          borderColor: 'inherit',
          rounded: '0',
          px: '0',
          bg: 'transparent',
          _readOnly: {
            boxShadow: 'none !important',
            userSelect: 'all',
          },
          _focus: {
            borderColor: focusBorderColor,
            boxShadow: `0px 1px 0px 0px ${focusBorderColor}`,
          },
          _invalid: {
            borderColor: errorBorderColor,
            boxShadow: `0px 1px 0px 0px ${errorBorderColor}`,
          },
          _focusVisible: {
            borderColor: focusBorderColor,
            boxShadow: `0px 1px 0px 0px ${focusBorderColor}`,
          },
        },
      }
    },
    unstyled: {
      field: {
        bg: 'transparent',
        h: 'auto',
        px: '0',
      },
    },
  },

  sizes: {
    xs: {
      field: {
        fontSize: 'xs',
        pl: '2',
        pr: '8',
        h: '6',
        rounded: 'sm',
      },
      icon: {
        pt: '0.5',
        insetEnd: '1',
      },
    },
    sm: {
      field: {
        fontSize: 'sm',
        pl: '2',
        pr: '8',
        h: '8',
        rounded: 'sm',
      },
      icon: {
        insetEnd: '2',
      },
    },
    md: {
      field: {
        fontSize: 'md',
        pl: '3',
        pr: '8',
        h: '10',
        rounded: 'md',
      },
      icon: {
        insetEnd: '2',
      },
    },
    lg: {
      field: {
        fontSize: 'lg',
        pl: '4',
        pr: '8',
        h: '12',
        rounded: 'md',
      },
      icon: {
        insetEnd: '2',
      },
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
}