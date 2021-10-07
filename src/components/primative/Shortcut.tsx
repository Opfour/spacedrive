import clsx from 'clsx';
import React from 'react';
import { DefaultProps } from './types';

export interface ShortcutProps extends DefaultProps {
  chars: string;
}

export const Shortcut: React.FC<ShortcutProps> = (props) => {
  return (
    <span
      className={clsx(
        `
  px-1
  py-0.5
  text-xs
  font-bold
  text-gray-400
  bg-gray-200
  border-gray-300
  dark:text-gray-300
  dark:bg-gray-700
  dark:border-gray-600
  border-t-2
  rounded-md
  `,
        props.className
      )}
    >
      {props.chars}
    </span>
  );
};
