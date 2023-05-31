import { useEffect, useState } from 'react'
import useCallbackRef from './useCallbackRef'

type TReturn = [(node : HTMLElement | null) => any, IntersectionObserverEntry | undefined]

function useObserver({ threshold = 0, root = null, rootMargin = '0%' }: IntersectionObserverInit): TReturn {
    const [entry, setEntry] = useState<IntersectionObserverEntry>()
    const [ref, outsideRef] = useCallbackRef<HTMLElement>(null)

    useEffect(() => {
        if (ref) {
            const observer = new IntersectionObserver(([entry]) => setEntry(entry), { threshold, root, rootMargin })
            observer.observe(ref)
            return () => observer.disconnect()
        }
    }, [ref, threshold, root, rootMargin])

    return [outsideRef, entry]
}

export default useObserver