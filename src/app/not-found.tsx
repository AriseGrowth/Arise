import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-arise-black flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-light tracking-ultra-tight text-arise-white/10 mb-8">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-light tracking-editorial text-arise-white mb-4">
          This link has fallen through the cracks.
        </p>
        <p className="text-lg text-arise-white/40 font-light mb-12">
          Let&apos;s fix your broken systems instead.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 text-sm font-medium tracking-wide text-arise-black bg-arise-white rounded-full transition-all duration-300 hover:bg-white hover:scale-105"
        >
          Return to Arise
        </Link>
      </div>
    </div>
  )
}
