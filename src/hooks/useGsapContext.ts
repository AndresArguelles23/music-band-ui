import { useLayoutEffect, useRef, type MutableRefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { GSAPTimeline, TweenTarget, TweenVars } from 'gsap'
import type { ScrollTrigger as ScrollTriggerClass } from 'gsap/ScrollTrigger'

import { shouldReduceMotion } from '../utils/motion'

const hasWindow = typeof window !== 'undefined'

const ensureScrollTriggerRegistered = () => {
  if (!gsap.core.globals().ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger)
  }
}

type GsapContextCallback = (gsapInstance: typeof gsap, scrollTrigger: typeof ScrollTrigger) => void

export const useGsapContext = <T extends Element>(
  callback: GsapContextCallback
): MutableRefObject<T | null> => {
  const scope = useRef<T | null>(null)

  useLayoutEffect(() => {
    if (!hasWindow || shouldReduceMotion()) return

    ensureScrollTriggerRegistered()

    const ctx = gsap.context(() => callback(gsap, ScrollTrigger), scope)

    return () => ctx.revert()
  }, [callback])

  return scope
}

type ScrollTriggerVars = ScrollTriggerClass['vars']

type FadeUpOptions = TweenVars

type StaggerListOptions = TweenVars & { stagger?: number }

type ParallaxOptions = TweenVars & {
  yPercent?: number
  scrollTrigger?: ScrollTriggerVars
}

export const fadeUp = (target: TweenTarget, options: FadeUpOptions = {}): GSAPTimeline | undefined => {
  if (shouldReduceMotion()) return undefined

  return gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.6 } }).from(target, {
    y: 24,
    autoAlpha: 0,
    ...options,
  })
}

export const staggerList = (
  target: TweenTarget,
  options: StaggerListOptions = {}
): GSAPTimeline | undefined => {
  if (shouldReduceMotion()) return undefined

  const { stagger = 0.08, ...rest } = options

  return gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.45 } }).from(target, {
    y: 12,
    autoAlpha: 0,
    stagger,
    ...rest,
  })
}

export const parallaxY = (
  target: TweenTarget,
  { yPercent = 20, scrollTrigger, ...vars }: ParallaxOptions = {}
): GSAPTimeline | undefined => {
  if (shouldReduceMotion()) return undefined

  ensureScrollTriggerRegistered()

  return gsap
    .timeline({ defaults: { ease: 'none' } })
    .to(target, {
      yPercent,
      scrollTrigger: {
        trigger: target,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        ...scrollTrigger,
      },
      ...vars,
    })
}
