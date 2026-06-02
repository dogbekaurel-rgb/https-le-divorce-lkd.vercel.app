export default function VideoPlayer({ src, poster, tracks = [] }){
  return (
    <div className="video-player">
      <video controls poster={poster} className="w-full rounded-md bg-black">
        {tracks.map((t, i) => (
          <track key={i} src={t.src} kind={t.kind || 'subtitles'} srcLang={t.srcLang} label={t.label} />
        ))}
        <source src={src} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>
    </div>
  )
}
