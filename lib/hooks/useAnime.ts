import anime, { AnimeParams, AnimeInstance } from 'animejs';
import { useRef, useEffect } from 'react';

export const useAnime = (props: AnimeParams = {}) => {
  const animateTargetRef = useRef<any>();
  const animationRef = useRef<AnimeInstance>();

  useEffect(() => {
    if (!animateTargetRef.current) {
      console.warn('please bind the anime ref while useAnime');
      return;
    }
    // console.log(animateTargetRef.current);
    animationRef.current = anime({
      ...props,
      targets: [animateTargetRef.current],
    });
  }, []);

  return { animateTargetRef, animationRef };
};