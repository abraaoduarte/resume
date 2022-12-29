import { MouseEvent, useEffect, useRef, useState } from 'react';

export default function useComponentVisible(isVisible: boolean) {
  const [visible, setVisible] = useState(isVisible);
  const ref = useRef<HTMLDivElement>(null);
  const refButton = useRef<HTMLButtonElement>(null);

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setVisible(false);
    }
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (refButton.current && refButton.current.contains(event.target as Node)) {
      setVisible((oldState) => !oldState);
    }
  };

  const handleClickOutside = (event: Event) => {
    if (
      ref.current &&
      !ref.current.contains(event.target as Node) &&
      refButton.current &&
      !refButton.current.contains(event.target as Node)
    ) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown, true);
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, refButton, visible, handleClick };
}
