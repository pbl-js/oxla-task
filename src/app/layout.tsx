import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Oxla | recruitment task',
  description: 'Created by pbl-js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full flex flex-col items-center p-4 ">
          <ToastContainer />
          <div className="flex flex-col gap-6 min-w-[240px] max-w-[540px] w-full">
            <header className="flex w-full gap-4">
              <Link href="/" className="bg-actionSecondary py-2 px-6 rounded-md font-semibold">
                Home page
              </Link>
              <Link
                href="/favorites"
                className="bg-actionSecondary py-2 px-6 rounded-md font-semibold"
              >
                Favorites
              </Link>
            </header>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
