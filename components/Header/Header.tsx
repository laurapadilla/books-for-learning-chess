import { getSiteSettings } from '@/sanity/cms';
import Link from 'next/link';
import * as styles from './Header.css';

export async function Header() {
  const siteSettings = await getSiteSettings();
  return (
    <header className={styles.header}>
      <Link className={styles.title} href="/">
        <h1>{siteSettings.title}</h1>
      </Link>
      <nav className={styles.nav}>
        {siteSettings.navLinks.map((link) => (
          <Link className={styles.navLink} href={link.url} key={link.url}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
