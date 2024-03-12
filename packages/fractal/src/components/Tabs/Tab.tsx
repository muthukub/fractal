import * as RxTabs from '@radix-ui/react-tabs'
import isEmpty from 'lodash/fp/isEmpty'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef } from 'react'

import { Typography } from '@/components/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import {
  DEFAULT_ORIENTATION,
  DEFAULT_POSITION,
  GROUP_NAME,
  Orientations,
  Positions,
} from './Tabs.constants'
import type { TabProps } from './Tabs.types'

/**
 * `Tab` component is used to display a tab inside of a `Tabs` component.
 *
 * See https://www.radix-ui.com/primitives/docs/components/tabs#trigger for more
 * information.
 */
export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  (
    {
      children,
      disabled = false,
      icon,
      label,
      large = false,
      name,
      orientation = DEFAULT_ORIENTATION,
      tabsPosition = DEFAULT_POSITION,
      ...props
    }: TabProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const hasChildren = Boolean(children)
    if (!hasChildren && isEmpty(label)) {
      console.warn(
        'You must provide a `label` or `children` to the `Tab` component',
      )
    }

    const hasIcon = Boolean(icon)

    const isDisabled = disabled
    const isLarge = large || (hasIcon && !isEmpty(label))

    let indicatorClassNames =
      'after:left-1/2 after:h-quarter after:w-0 after:-translate-x-1/2 after:transition-[width] '
    indicatorClassNames +=
      tabsPosition === Positions.Start ? 'after:-bottom-px' : 'after:-top-px'

    let activeIndicatorClassNames = 'aria-selected:after:w-3/4'

    if (orientation === Orientations.Vertical) {
      indicatorClassNames =
        'after:top-1/2 after:w-quarter after:h-0 after:-translate-y-1/2 after:transition-[height] '
      indicatorClassNames +=
        tabsPosition === Positions.Start ? 'after:-right-px' : 'after:-left-px'

      activeIndicatorClassNames = 'aria-selected:after:h-3/4'
    }

    return (
      <RxTabs.Trigger
        ref={ref}
        aria-label={label}
        className={cn(
          `${PREFIX}-${GROUP_NAME}__tab`,
          'cursor-pointer border-0 bg-[unset] px-0 py-0 text-left',
          'relative h-full flex-1 self-end text-center text-grey-30',
          isLarge ? 'min-h-10' : 'min-h-6',
          'after:absolute after:block after:bg-primary after:duration-300 after:content-empty',
          indicatorClassNames,
          'aria-selected:text-black',
          activeIndicatorClassNames,
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__tab--disabled cursor-not-allowed text-grey-70`
            : 'hover:text-black',
          orientation === Orientations.Vertical ? 'w-full px-3' : 'h-full',
          props.className,
        )}
        disabled={isDisabled}
        title={label}
        value={name}
        {...omit(['className', 'value'], props)}
      >
        <Typography
          className={cj(
            'flex h-full items-center justify-center gap-1 p-1',
            orientation === Orientations.Horizontal ? 'flex-col' : '',
          )}
          element="div"
          variant="caption-median"
        >
          {icon}
          {hasChildren ? children : label}
        </Typography>
      </RxTabs.Trigger>
    )
  },
)
Tab.displayName = 'Tab'

export default Tab
