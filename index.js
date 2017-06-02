import * as AudioContext from 'audio-context'

class Piano {
  constructor ({ context } = {}) {
    if (!context) context = AudioContext()
  }
}

export default Piano