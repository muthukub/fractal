import {
  UilBars as HamburgerBarsIcon,
  UilArrowLeft as LeftIcon,
} from '@iconscout/react-unicons'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import isEmpty from 'lodash/fp/isEmpty'
import type { CSSProperties, ComponentProps } from 'react'

import { Autocomplete } from '@/components/Autocomplete'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import '@/styles/smartphones.css'

import Header from './Header'

type HeaderProps = ComponentProps<typeof Header>

const SAFE_AREAS: Record<string, string> = {
  'galaxy-s8': '',
  'google-pixel': '',
  'google-pixel-6-pro': '37px',
  'ipad-pro': '',
  'iphone-8': '',
  'iphone-14': '37px',
  'iphone-14-pro': '47px',
  'iphone-x': '37px',
  'macbook-pro': '19px',
  none: '',
  'the-iphone': '',
}

const meta: Meta<HeaderProps & { device: string }> = {
  argTypes: {
    children: {
      control: 'radio',
      mapping: {
        Nothing: false,
        'Search bar': <Autocomplete />,
        Title: 'The Empire Strikes Back',
      },
      options: ['Title', 'Search bar', 'Nothing'],
    },
    device: {
      control: 'radio',
      mapping: {
        'Google Pixel': 'google-pixel',
        'Google Pixel 6 Pro': 'google-pixel-6-pro',
        'MacBook Pro': 'macbook-pro',
        None: 'none',
        'Samsung Galaxy S8': 'galaxy-s8',
        'iPad Pro': 'ipad-pro',
        iPhone: 'the-iphone',
        'iPhone 8': 'iphone-8',
        'iPhone 14': 'iphone-14',
        'iPhone 14 Pro': 'iphone-14-pro',
        'iPhone X': 'iphone-x',
      },
      options: [
        'None',
        'iPhone 14 Pro',
        'iPhone 14',
        'Google Pixel 6 Pro',
        'iPhone X',
        'iPhone 8',
        'Google Pixel',
        'Samsung Galaxy S8',
        'iPhone',
        'iPad Pro',
        'MacBook Pro',
      ],
    },
    left: {
      control: 'radio',
      mapping: {
        Back: (
          <Button
            icon={<LeftIcon />}
            iconOnly
            label="Back"
            variant="text"
            onClick={action('onBackClick')}
          />
        ),
        Logo: <Logo />,
        Nothing: false,
      },
      options: ['Back', 'Logo', 'Nothing'],
    },
    right: {
      control: 'radio',
      mapping: {
        Avatar: <span>👤</span>,
        Hamburger: (
          <Button
            icon={<HamburgerBarsIcon />}
            iconOnly
            label="Menu"
            variant="display"
            onClick={action('onHamburgerClick')}
          />
        ),
        Nothing: false,
      },
      options: ['Avatar', 'Hamburger', 'Nothing'],
    },
  },
  args: {
    children: 'Title',
    device: 'iPhone 14',
    left: 'Back',
    right: 'Hamburger',
  },
  component: Header,

  title: 'Organisms/Header',
} satisfies Meta<HeaderProps & { device: string }>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ device, ...args }) => {
    if (device === 'none') {
      return <Header {...args} />
    }

    const style: CSSProperties = {
      borderRadius: '16px 16px 0 0',
      position: 'relative',
    }

    const safeArea = SAFE_AREAS[device]
    if (!isEmpty(safeArea)) {
      style.top = safeArea
    }

    return (
      <div className="smartphone">
        <div className={`device device-${device}`}>
          <div className="device-frame">
            <div className="device-screen">
              <Header {...args} style={style} />
            </div>
          </div>
          <div className="device-stripe"></div>
          <div className="device-header"></div>
          <div className="device-sensors"></div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
          <div className="device-home"></div>
        </div>
      </div>
    )
  },
}
