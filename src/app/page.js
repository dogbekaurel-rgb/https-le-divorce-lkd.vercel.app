export default function Home() {
  return (
    <section className="container mx-auto px-4 py-16">
      <header className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Le Divorce – LKD</h1>
        <p className="text-lg md:text-xl text-gray-600">Projet artistique, cinématographique et numérique mêlant cinéma, poésie, spiritualité et expérience immersive.</p>
      </header>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <article className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Galerie</h2>
          <p className="text-sm text-gray-600">Placeholder pour la galerie d&apos;images et vidéos.</p>
        </article>

        <article className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Bande-annonce</h2>
          <p className="text-sm text-gray-600">Placeholder pour le lecteur vidéo et la bande-annonce intégrée.</p>
        </article>

        <article className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Portfolio</h2>
          <p className="text-sm text-gray-600">Placeholder pour le portfolio LKD.</p>
        </article>
      </div>

      <section className="mt-12 max-w-2xl mx-auto text-center text-gray-700">
        <p>Le site est en construction — utilisez les issues et projets pour suivre l&apos;avancement.</p>
      </section>
    </section>
  )
}
