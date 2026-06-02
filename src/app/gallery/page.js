export default function GalleryPage(){
  const items = [1,2,3,4,5,6]
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Galerie</h1>
      <p className="text-gray-600 mb-8">Collection d'images et de vidéos — en construction.</p>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
        {items.map((i) => (
          <div key={i} className="bg-gray-100 rounded overflow-hidden shadow-sm">
            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">Image placeholder {i}</div>
            <div className="p-4">
              <h3 className="font-semibold">Œuvre {i}</h3>
              <p className="text-sm text-gray-600">Description courte de l'œuvre {i}.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
