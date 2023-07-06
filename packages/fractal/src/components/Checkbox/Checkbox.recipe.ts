import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/fractal-panda/types'

import { DEFAULT_VARIANT, Variants } from './Checkbox.constants'

export const checkboxRoot: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Checkbox',
  name: 'checkboxRoot',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    alignItems: 'center',
    all: 'unset',
    backgroundColor: 'var(--color-base-white)',
    border: 'var(--size-border-2) solid var(--color-border-default)',
    cursor: 'var(--cursor-clickable)',
    display: 'flex',
    height: '24px',
    justifyContent: 'center',
    width: '24px',
  },

  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },

  jsx: ['RxCheckbox.root', 'Checkbox'],

  variants: {
    variant: Object.values(Variants).reduce(
      (variants, variantName) => ({
        ...variants,
        [variantName]: {
          '&:not(:is(:checked, [data-checked], [aria-checked=true], :disabled, [disabled], [data-disabled]))':
            {
              _groupHover: {
                backgroundColor:
                  variantName === Variants.Black
                    ? `var(--color-base-grey-50)`
                    : `var(--color-decorative-${variantName}-90, var(--color-brand-${variantName}, var(--color-base-white)))`,
              },
            },

          _checked: {
            backgroundColor: `var(--color-decorative-${variantName}-70, var(--color-brand-${variantName}, var(--color-base-${variantName}, var(--color-base-white))))`,
          },

          _disabled: {
            backgroundColor: `var(--color-background-disabled)`,
            borderColor: 'var(--color-border-disabled)',
            color: 'var(--color-text-disabled)',
            cursor: 'var(--cursor-disabled)',
          },
        },
      }),
      {} as Record<Variants, SystemStyleObject>,
    ),
  },
})

export const checkboxIndicator: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Check mark',
  name: 'checkboxIndicator',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    color: 'var(--color-text-dark)',
  },

  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },

  jsx: ['RxCheckbox.indicator'],

  variants: {
    disabled: {
      true: {
        color: 'var(--color-text-disabled)',
      },
    },

    variant: {
      ...Object.values(Variants).reduce(
        (variants, variantName) => ({
          ...variants,
          [variantName]: {
            ...(variantName === Variants.Black
              ? { color: 'var(--color-text-light)' }
              : {}),
          },
        }),
        {} as Record<Variants, SystemStyleObject>,
      ),
    },
  },
})

export const checkboxLabel: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Checkbox label',
  name: 'checkboxLabel',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    color: 'var(--color-text-dark)',
    cursor: 'var(--cursor-clickable)',
    maxWidth: '100%',
    overflow: 'auto',
    overflowWrap: 'break-word',
    py: 'var(--size-spacing-2)',
    width: '100%',
  },

  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },

  jsx: ['label'],

  variants: {
    disabled: {
      true: {
        color: 'var(--color-text-disabled)',
        cursor: 'var(--cursor-disabled)',
      },
    },

    required: {
      true: {
        '& > *': {
          _after: {
            color: 'var(--color-feedback-danger-50)',
            content: '" *"',
          },
        },
      },
    },

    variant: Object.values(Variants).reduce(
      (variants, variantName) => ({
        ...variants,
        [variantName]: {},
      }),
      {} as Record<Variants, SystemStyleObject>,
    ),
  },
})
