import { ReactNode } from 'react';
import * as styles from './Container.css';

export function Container({ children }: { children: ReactNode }) {
  return <main className={styles.container}>{children}</main>;
}
