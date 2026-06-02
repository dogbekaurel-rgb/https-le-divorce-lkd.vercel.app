export default function PortfolioPage(){
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <p className="text-gray-600 mb-8">Sélection d'œuvres, projets et collaborations de LKD.</p>

      <div className="space-y-6">
        <article className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Projet A</h2>
          <p className="text-sm text-gray-600">Description courte du projet A.</p>
        </article>

        <article className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Projet B</h2>
          <p className="text-sm text-gray-600">Description courte du projet B.</p>
        </article>
      </div>
    </section>
  )
}
