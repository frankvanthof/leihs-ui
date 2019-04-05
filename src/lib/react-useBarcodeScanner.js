import { useEffect } from 'react'

const DELAY = 100

export const useBarcodeScanner = () => {
  let buffer = ''
  let lastInputAt = null

  useEffect(() => {
    function handleKeypress(event) {
      const charCode =
        typeof event.which == 'number' ? event.which : event.keyCode

      const char = String.fromCharCode(charCode)

      // eslint-disable-next-line no-console
      console.log({ charCode, char })

      if (charCode === 13) return event.preventDefault()
      else handleCharacterInput(char)
    }

    function handleCharacterInput(char) {
      if (hasTimedOut(lastInputAt)) {
        buffer = ''
        lastInputAt = null
      } else {
        buffer = buffer + char
        lastInputAt = Date.now()
      }

      // eslint-disable-next-line no-console
      console.log({
        char,
        buffer,
        lastInputAt,
        hasTimedOut: hasTimedOut(lastInputAt)
      })
    }

    window.addEventListener('keypress', handleKeypress)
    return () => {
      window.removeEventListener('keypress', handleKeypress)
    }
  }, [])

  return buffer
}

function hasTimedOut(lastInputAt) {
  return lastInputAt && Date.now() - lastInputAt >= DELAY
}
