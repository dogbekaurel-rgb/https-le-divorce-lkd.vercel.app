export default function Header(){
  return (
    <header className="w-full bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-lg font-bold">Le Divorce – LKD</div>
        <nav className="space-x-4 text-sm text-gray-600">
          <a href="#" className="hover:text-black">Accueil</a>
          <a href="#" className="hover:text-black">Galerie</a>
          <a href="#" className="hover:text-black">Portfolio</a>
          <a href="#" className="hover:text-black">Contact</a>
        </nav>
      </div>
    </header>
  )
}
