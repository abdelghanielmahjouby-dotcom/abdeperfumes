import { useEffect } from 'react';

function StoryPage() {
  useEffect(() => {
    document.title = 'Notre histoire | AbdePerfumes';
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
      <div className="rounded-[28px] border border-neutral-200 bg-white p-8 shadow-luxe md:p-12">
        <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96A]">Maison</p>
        <h1 className="mt-3 font-display text-5xl text-[#111111]">Le parfum, une signature personnelle.</h1>
        <p className="mt-6 text-base leading-8 text-neutral-700">
          Chez AbdePerfumes, chaque fragrance est une invitation à exprimer votre style, votre personnalité et vos émotions.
        </p>
        <p className="mt-4 text-base leading-8 text-neutral-700">
          Nous croyons que le parfum doit être à la fois élégant, inspirant et accessible. Chaque création est choisie pour offrir une présence raffinée, mémorable et fidèle à une image de luxe moderne.
        </p>
      </div>
    </div>
  );
}

export default StoryPage;
