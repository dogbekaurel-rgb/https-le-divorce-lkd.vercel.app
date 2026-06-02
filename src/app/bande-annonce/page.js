import VideoPlayer from '@/components/VideoPlayer'

export default function TrailerPage(){
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Bande‑annonce</h1>
      <p className="text-gray-600 mb-8">Visionnez la bande‑annonce officielle ici.</p>

      <div className="max-w-4xl mx-auto">
        <VideoPlayer src="/videos/sample.mp4" poster="/images/trailer-poster.jpg" tracks={[{src:'/videos/subtitles.vtt', srcLang:'fr', label:'Français'}]} />
      </div>

      <div className="mt-8 text-center text-sm text-gray-600">Remplacez <code>/videos/sample.mp4</code> par vos médias réels dans <code>public/videos</code>.</div>
    </section>
  )
}
