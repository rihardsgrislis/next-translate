import { useContext, useMemo } from 'react'
import { I18n } from '.'
import wrapTWithDefaultNs from './wrapTWithDefaultNs'
import I18nContext from './_context'

export default function useTranslation(defaultNs?: string): I18n {
  const ctx = useContext(I18nContext)
  return {
    ...ctx,
    t: useMemo(() => wrapTWithDefaultNs(ctx.t, defaultNs), [
      ctx.lang,
      defaultNs,
    ]),
  }
}
