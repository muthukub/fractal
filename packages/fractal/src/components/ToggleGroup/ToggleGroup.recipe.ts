/* eslint-disable no-underscore-dangle */

import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'toggle-group'

export const toggleGroup: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Toggle group',
  name: 'toggleGroup',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['TOggleGroup'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '&[data-orientation="horizontal"]': {
      flexDirection: 'row',
    },

    _fullWidth: {
      width: '100%',
    },

    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--size-spacing-3)',
    width: 'fit-content',
  },
})
