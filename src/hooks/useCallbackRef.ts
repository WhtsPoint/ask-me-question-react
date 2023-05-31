import { useState, useCallback } from 'react'

type TReturn<T> = [T | null, (value : T | null) => any]

function useCallbackRef<T>(initialValue: T | null): TReturn<T> {
    const [ref, setRef] = useState<T | null>(initialValue)
    const callbackRef = useCallback((value : T | null) => setRef(value), [])
    return [ref, callbackRef]
}

export default useCallbackRef