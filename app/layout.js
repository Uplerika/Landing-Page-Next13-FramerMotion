import '../styles/globals.css';
import { Eudoxus } from 'next/font/google';

const eudoxus = Eudoxus({ subsets: ['latin'] });

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={eudoxus.className}>{children}</body>
  </html>
);

export default RootLayout;
