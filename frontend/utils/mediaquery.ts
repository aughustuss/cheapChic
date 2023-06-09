import React from 'react';

const mediaQuery = (query: string) => {
    const [matches, setMatches] = React.useState<boolean>(false);

    React.useEffect(() => {
        const media = window.matchMedia(query);
        if(media.matches !== matches){
            setMatches(media.matches);
        };
        const listener = () => {
            setMatches(media.matches);
        };

        window.addEventListener("resize", listener);

        return () => {
            window.removeEventListener("resize", listener);
        };
    }, [matches, query]);
    return matches;
};

export default mediaQuery;