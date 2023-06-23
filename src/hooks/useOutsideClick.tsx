import { Dispatch, RefObject, SetStateAction, useEffect } from 'react';

export default function useOutsideClick(
  isDropdownOpen: boolean,
  ref: RefObject<HTMLDivElement>,
  setDropdownOpen: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (isDropdownOpen && !ref.current?.contains(e.target as HTMLElement)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [isDropdownOpen, ref, setDropdownOpen]);
}
