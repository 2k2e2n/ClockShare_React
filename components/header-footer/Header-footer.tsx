'use client';
import Image from 'next/image';
import { useEffect, useState, useRef, FC, useCallback } from 'react';
import styles from './header_footer.module.css';
import { useRouter } from 'next/navigation';
import landscape_screen from '@/assets/images/landscape-screen.gif';

export default function Page() {
  const router = useRouter();
  const link_top: string = '/';
  const link_todo: string = '/todo';
  const link_whatstudy: string = '/whatstudy';
  
  let [theme_Bool, settheme_Bool] = useState<boolean>(false);
  const theme_localkeyname_Str: string = 'dark-theme';

  function top_link() {
    router.push(link_top);
  }
  function todo_link() {
    router.push(link_todo);
  }
  function whatstudy_link() {
    router.push(link_whatstudy);
  }

  //ダークモード切り替え
  function toggleDarkMode() {
    settheme_Bool(!theme_Bool);
    //theme_Bool = !theme_Bool;
    localStorage.setItem(theme_localkeyname_Str, String(theme_Bool));
  }


  return (
    <main>
      <div>
        <header className={styles.header}>
          <div className={styles['header-left']}>
            <h1 className={styles['header-text']}>タイマーテスト</h1>
          </div>
          <div className={styles['header-right']}>
            <div className={styles['header-btn']}>
              <div>
                <button onClick={top_link} className={styles.button}>
                  <span className={styles.lable}>TOP</span>
                </button>
              </div>

              <div>
                <button onClick={todo_link} className={styles.button}>
                  <span className={styles.lable}>TODO</span>
                </button>
              </div>

              <div>
                <button onClick={whatstudy_link} className={styles.button}>
                  <span className={styles.lable}>What study?</span>
                </button>
              </div>

              <button className={styles.button} onClick={toggleDarkMode}>
                <span className={styles.lable}>
                  {theme_Bool ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>
            </div>
            <div className={styles.overlay}>
              <Image src={landscape_screen.src} layout="responsive" width={1} height={1} alt="" loading="lazy" className={styles.landscape_screen} />
            </div>
          </div>
        </header>
      </div>
    </main>
  );
}
