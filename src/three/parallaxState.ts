export const parallaxEnabled = {
  value: true,
}

const flags = {
  heroVisible: true,
  userEnabled: true,
}

function emitParallaxToggle() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('parallax-toggle', { detail: parallaxEnabled.value }))
  }
}

function syncParallaxEnabled() {
  parallaxEnabled.value = flags.heroVisible && flags.userEnabled
  emitParallaxToggle()
}

/**
 * Backwards-compatible state bridge used by existing hero text code.
 */
export const parallaxState = {
  get enabled() {
    return parallaxEnabled.value
  },
  set enabled(next: boolean) {
    setParallaxEnabled(next)
  },
}

export function setParallaxEnabled(enabled: boolean) {
  flags.userEnabled = enabled
  syncParallaxEnabled()
}

export function setHeroParallaxVisibility(visible: boolean) {
  flags.heroVisible = visible
  syncParallaxEnabled()
}

