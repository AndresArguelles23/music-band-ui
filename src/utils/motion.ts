const hasWindow = typeof window !== 'undefined'

export const shouldReduceMotion = () =>
  hasWindow && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const isCoarseMotionDevice = () =>
  hasWindow && window.matchMedia('(pointer: coarse) and (max-width: 768px)').matches

export const canUseMotion = () => !shouldReduceMotion() && !isCoarseMotionDevice()
