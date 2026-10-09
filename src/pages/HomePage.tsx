import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#111111]">
      <div className="bg-[#0B0B0B] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 text-center text-xs uppercase tracking-[0.25em] text-[#E2D5AF]">
          Découvrez votre prochaine signature olfactive.
        </div>
      </div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
