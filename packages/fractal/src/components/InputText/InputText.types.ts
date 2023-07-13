import type { AllHTMLAttributes, ChangeEvent, ReactNode } from 'react'

export interface InputTextProps
  extends Omit<AllHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /** Indicates if the text input must be focused on render. */
  autoFocus?: boolean
  /**
   * The value of the text input when it is initially rendered.
   *
   * Use this when you do not need to control its value.
   */
  defaultValue?: number | string
  /** An helpful message to describe the text input to the user. */
  description?: string
  /** Prevents the user from interacting with the text input. */
  disabled?: boolean
  /**
   * If a boolean: indicates that the field is in error.
   *
   * If a string: an error message to display below the input if there is an
   * error.
   *
   * This will also change the display of the input to give an error feedback
   * (red border and special red icon).
   *
   * Note that the description (if there is one) will be replaced by the error
   * message when provided.
   *
   * The icon (if there is one) will also be replaced  by a specific error icon.
   */
  error?: boolean | string
  /** Indicates if the text input should take all the available width. */
  fullWidth?: boolean
  /** The icon to display in the text input (if any). */
  icon?: ReactNode
  /** The position of the icon in the text input. */
  iconPosition?: 'left' | 'right'
  /**
   * A unique HTML id for the text input.
   *
   * This allows to link the text input with a label.
   *
   * If none is given, one will be generated automatically.
   */
  id?: string
  /** The label of the text input. */
  label?: string
  /**
   * The name of the text input.
   *
   * It is used to reference the text input in a form submission.
   *
   * If none is given, the ID (provided or auto-generated) will be used.
   */
  name?: string
  /**
   * Event handler called when the text input value is changed with the new
   * string value.
   */
  onChange?: (newValue: string) => void
  /**
   * Event handler called when the text input value is changed with the raw
   * event.
   */
  onRawChange?: (event: ChangeEvent<HTMLInputElement>) => void
  /** A string to display when the text input is empty. */
  placeholder?: string
  /** Prevents the user to change the value of the text input. */
  readOnly?: boolean
  /** Indicates if the text input must be filled. */
  required?: boolean
  /**
   * If a boolean: indicates that the field is in success.
   *
   * If a string: a message to display when the text input has a valid value.
   *
   * This will also change the display of the input to give an success feedback
   * (green border and special green icon).
   *
   * Note that the icon (if there is one) will be replaced by a specific success
   * icon.
   */
  success?: boolean | string
  /**
   * The type of the text input.
   *
   * Must be a valid HTML5 type for an `&lt;input /&gt;` element.
   *
   * Note that some valid HTML5 type for an `&lt;input /&gt;` element are not
   * supported in this component because they are not relevant for a text input
   * (e.g. `checkbox`, `tel`, `date`, `week`, ...).
   * If you need a specific type, please use the appropriate component instead
   * (e.g. `&lt;InputCheckbox /&gt;`, `&lt;InputTelephone /&gt;`,
   * `&lt;DatePicker /&gt;`, ...).
   */
  type?: 'email' | 'number' | 'password' | 'search' | 'text' | 'url'
  /**
   * The controlled value of the text input.
   *
   * Must be used in conjunction with `onChange`.
   */
  value?: number | string
}
