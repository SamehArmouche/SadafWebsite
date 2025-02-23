import * as React from 'react';

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = React.useState(false);

    React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>{
      setTimeout(() => {
        setIntersecting(entry.isIntersecting);
      }, "0");

    }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}