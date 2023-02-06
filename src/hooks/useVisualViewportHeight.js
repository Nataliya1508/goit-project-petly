import { useEffect, useState } from 'react';

const getVisualViewportHeight = () => window.visualViewport.height;

const useVisualViewportHeight = () => {
    const [viewportHeight, setViewportHeight] = useState(getVisualViewportHeight);

    useEffect(() => {
        const handleResize = () => setViewportHeight(getVisualViewportHeight)
        window.visualViewport.addEventListener('resize', handleResize)
        return () =>
            window.visualViewport.removeEventListener('resize', handleResize)
    }, [])
    return viewportHeight;
}

export default useVisualViewportHeight;