import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.fullScreen}>
      <div className="relative w-[100px] h-[75px]">
        <Image src="/images/mainloader.gif" alt="Task Follow Loader" width={500} height={500} />
      </div>
    </div>
  );
};

export { Loader };
