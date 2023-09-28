import { useCallback, useEffect, useRef } from "react";




export function useTimeout(callback, delay){

    const callBackRef = useRef(callback);
    const timeOutRef = useRef();
 
    useEffect(() => {
        callBackRef.current = callback;
    },[callback]);

    const set = useCallback(() => {
        timeOutRef.current = setTimeout(() => callBackRef.current(),delay);
    }, [delay]);

    const clear = useCallback(() => {
        if (timeOutRef.current) {
            clearInterval(timeOutRef.current);
        }
    }, []);

    useEffect(() => {
        set()
        return clear; 
    },[delay,set,clear]);

    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set])

    return {
        reset,
        clear
    }
}