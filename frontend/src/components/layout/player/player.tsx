export default function Player() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <video
        className="w-full max-w-4xl rounded-2xl bg-black"
        controls
        preload="metadata"
      >
        <source src="/example.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
    </div>
  );
}