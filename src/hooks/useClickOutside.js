import { useRef, useState, useEffect } from "react";

export function useOutsideClick(initialValue) {
    const wrapperRef = useRef(null);
    const [isVisible, setIsVisible] = useState(initialValue);
    const handleOutsideClick = (e) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
            setIsVisible(false);
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleOutsideClick, true);
        return () => {
            document.removeEventListener('click', handleOutsideClick, true);
        }
    }, [wrapperRef])

    return { isVisible, setIsVisible, wrapperRef }
}