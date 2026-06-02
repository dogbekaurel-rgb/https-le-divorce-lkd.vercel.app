export default function ContactPage(){
  return (
    <section className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="text-gray-600 mb-6">Pour demandes professionnelles, presse ou festivals — utilisez le formulaire ci‑dessous.</p>

      <form className="space-y-4" action="#" onSubmit={(e)=>{e.preventDefault(); alert('Formulaire de contact en local — configurez un endpoint ou utilisez mailto.')}}>
        <div>
          <label className="block text-sm font-medium mb-1">Nom</label>
          <input className="w-full border rounded px-3 py-2" placeholder="Votre nom" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" placeholder="votre@exemple.com" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea className="w-full border rounded px-3 py-2" rows="6" placeholder="Votre message"></textarea>
        </div>
        <div>
          <button className="inline-block bg-accent text-white px-4 py-2 rounded">Envoyer</button>
        </div>
      </form>
    </section>
  )
}
