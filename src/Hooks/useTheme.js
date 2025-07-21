import { useEffect, useState } from "react"


const useTheme = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const prepareDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
        setTheme(prepareDark ? 'dark' : 'light');
    }, [])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme, setTheme])

    return [theme, setTheme]
}

export default useTheme;