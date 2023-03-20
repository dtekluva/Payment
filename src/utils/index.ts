import type { AxiosError } from 'axios'
import { format } from 'date-fns'
import toast from 'react-hot-toast'
import { Variants } from 'framer-motion'

import type { Notification } from '@/types'

/**
 * @param string A user's (full, first or last) name.
 * @returns The intials of the user.
 */
export const getInitials = (string: string) => {
  const names = string.split(' ')
  let initials = names[0].substring(0, 1).toUpperCase()

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase()
  }

  return initials
}

/**
 * @param string A string (in kebab or snake case) to be converted to title case.
 * @returns The input string formatted to title case.
 * transactions__today-tomorrow becomes Transactions Today Tomorrow
 * https://stackoverflow.com/a/64489760/15063835
 */
export const convertKebabAndSnakeToTitleCase = (string: string) =>
  string
    .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
    .replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase())

/**
 * @param string A string in lower or uppper case to be converted to title case.
 * @returns The input string formatted to title case.
 * KPONGETTE becomes Kpongette
 * https://stackoverflow.com/a/196991/15063835
 */
export const convertToTitleCase = (string: string) => {
  if (!string) return ''

  return string.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

export const convertToSnakeCase = (string: string) => {
  string = string.replace(/([A-Z])/g, '_$1').toLowerCase()
  string = string.replace(/[ -]/g, '_')
  return string
}

/**
 * Check if an object is empty
 * @param obj The object to check
 * @returns True if the object is empty, false otherwise
 */
export const checkIsObjectEmpty = (obj: object | null | undefined): boolean => {
  if (obj === null || obj === undefined) {
    return true
  }
  return Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype
}

/**
 * @param form An HTML form element containing a field with a value to be extracted.
 * @param valueName The name of the value to be extracted from the form.
 * @returns The value extracted from the form (input) field.
 */
export const getInputValueFromForm = (form: HTMLFormElement, valueName: string) => {
  const { value } = form.elements.namedItem(valueName) as HTMLInputElement
  return value
}

/**
 * @param string Any camelCase or PascalCase string.
 * @returns A string with separated words PascalCase becomes Pascal Case, HODBank becomes HOD Bank etc.
 */
export const insertSpacesBeforeCapitalLetters = (string: string) => {
  string = string.replace(/([a-z])([A-Z])/g, '$1 $2')
  string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
  return string
}

/**
 * @param string A string, usually completely in lowercase.
 * @returns The argument strign with its first letter capitalized.
 */
export const capitalizeFirstLetter = (string: string) => {
  const stringWithSpaces = insertSpacesBeforeCapitalLetters(string.toLowerCase())

  return (
    (stringWithSpaces && stringWithSpaces.charAt(0).toUpperCase() + stringWithSpaces.slice(1)) || ''
  )
}

/**
 * @param error An axios error instance. Usually returned by React Query.
 * @returns The error message formatted for the UI. Contents of an array are merged into a single string.
 */
export const formatAxiosErrorMessage = (
  // Typed as any because errors from server do not have a consistent shape.
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  error: AxiosError<any, any>
) => {
  const firstDigitInResponseStatus = String(error.response?.status).charAt(0)

  if (firstDigitInResponseStatus === '5') {
    return 'Server Error'
  }

  // Return default error message string if user is not connected to the internet.
  if (error.code === 'ERR_NETWORK') {
    return `${error.message}. Please check your internet connection.`
  }

  const errorMessage = Object.values(error.response?.data).flat()

  if (Array.isArray(errorMessage)) {
    const allMessages = errorMessage
      .filter((m) => isNaN(m) && typeof m === 'string')
      .map((m) => capitalizeFirstLetter(m))
      .join('. ')

    return `${allMessages}`
  }
}

/**
 * @param date The date to be formatted.
 * @param withTime A boolean determining whether or not the date is returned with a time value.
 * @returns The time (or time and date) formatted akin to 0/09/2021, 6 AM.
 */
export const formatShortDate = (date: string | Date, withTime: boolean): string => {
  if (withTime) {
    return format(new Date(date), 'dd/MM/yyyy, h aaa')
  }

  return format(new Date(date), 'dd/MM/yyyy')
}

const getNotificationColor = (notificationType: Notification) => {
  switch (notificationType) {
    case 'success': {
      return '#065f46'
    }

    case 'error': {
      return '#b91c1c'
    }

    case 'neutral': {
      return '#2B0E44'
    }

    default: {
      throw new Error(`Unsupported notification type: ${notificationType}`)
    }
  }
}

export const launchNotification = (type: Notification, text: string) => {
  toast(text, {
    style: {
      padding: '8px 20px',
      backgroundColor: getNotificationColor(type),
      color: '#ffffff',
      textAlign: 'center',
      overflowWrap: 'break-word',
      overflow: 'auto',
      bottom: '32px',
    },
  })
}

export const addCommasToNumber = (number: number) => {
  return (
    Boolean(number) &&
    parseFloat(number.toString()).toLocaleString('en-US', {
      maximumFractionDigits: 2,
    })
  )
}

export const withoutFirstAndLast = (str: string) => str.slice(1, -1)

export const clampNumber = (number: number, min: number, max: number) => {
  return Math.max(min, Math.min(number, max))
}

/**
 * @param date The date to be formatted.
 * @param withTime A boolean determining whether or not the date is returned with a time value.
 * @returns The time (or time and date) formatted akin to 0/09/2021, 6 AM.
 */
export const formatShortDateTime = (date: string, withTime: boolean): string => {
  if (withTime) {
    return format(new Date(date), 'dd/MM/yyyy, h aaa')
  }

  return format(new Date(date), 'dd/MM/yyyy')
}

// FRAMER MOTION page transitions
export const pageAnimation: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.4,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.4,
    transition: {
      duration: 0.2,
    },
  },
}

export const navVariants: Variants = {
  hidden: {
    x: '-100vw',
    opacity: 0,
  },
  show: {
    x: '0',
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
}

export const navLinkVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
}

export const movingVerticallyAnimOne: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    y: [-10, 0, -10],
    opacity: 1,
    transition: {
      y: {
        duration: 5,
        repeat: Infinity,
      },
      delay: 0.2,
    },
  },
}

export const movingVerticallyAnimTwo: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    y: [-8, 0, -8],
    opacity: 1,
    transition: {
      y: {
        duration: 6,
        repeat: Infinity,
      },
      delay: 1,
    },
  },
}

export const movingVerticallyAnimThree: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    y: [-8, 0, -8],
    opacity: 1,
    transition: {
      y: {
        duration: 6,
        repeat: Infinity,
      },
      delay: 1,
    },
  },
}

export const movingVerticallyAnimFour: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    y: [-8, 0, -8],
    opacity: 1,
    transition: {
      y: {
        duration: 4,
        repeat: Infinity,
      },
      delay: 1,
    },
  },
}

export const scaleUpAndDownAnim: Variants = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: [1.05, 0.9, 1.05],
    transition: {
      scale: {
        duration: 4,
        repeat: Infinity,
      },
      delay: 1,
    },
  },
}

export const scaleUpAndDownAnimTwo: Variants = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: [1.05, 0.95, 1.05],
    transition: {
      scale: {
        duration: 4,
        repeat: Infinity,
      },
      delay: 1,
    },
  },
}
// END PAGE TRANSITIONS

// IMAGES
export const PARTNERS_IMAGES = [
  {
    name: 'aficas talking',
    url: 'africas-talking.png',
  },
  {
    name: 'coralpay',
    url: 'coralpay.png',
  },
  {
    name: 'cyberpay',
    url: 'cyberpay.png',
  },
  {
    name: 'enolith',
    url: 'enolith.png',
  },
  {
    name: 'heritage-bank',
    url: 'heritage-bank.png',
  },
  {
    name: 'horizonpay',
    url: 'horizonpay.png',
  },
  {
    name: 'parallex',
    url: 'parallex.png',
  },
  {
    name: 'terragon',
    url: 'terragon.png',
  },
  {
    name: 'unity-bank',
    url: 'unity-bank.png',
  },
  {
    name: 'vfd',
    url: 'vfd.png',
  },
  {
    name: 'woven',
    url: 'woven.png',
  },
  {
    name: 'xpress',
    url: 'xpress.png',
  },
]
// END IMAGES
