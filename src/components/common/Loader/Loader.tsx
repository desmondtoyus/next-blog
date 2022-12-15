import React, { FC } from 'react';
import Image from 'next/image';
import style from './Loader.module.scss';
import { LOADING_GIF_SRC } from '../../../constants';

export interface Props {
  loading: boolean;
  text?: string;
  className?: string;
  loadingIconURL?: string;
}

export const Loader: FC<Props> = ({
  loading = false,
  text = `Loading`,
  className = ``,
  loadingIconURL = LOADING_GIF_SRC,
}) => {
  if (!loading) {
    return null;
  }

  return (
    <div
      className={`${style.loadingWrapper} 
      ${className}`}
      data-testid="loading"
    >
      <Image src={loadingIconURL} alt={text} width={100} height={100} />
      <p>{text}</p>
    </div>
  );
};

export default React.memo(Loader);
