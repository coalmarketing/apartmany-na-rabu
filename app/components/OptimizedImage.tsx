import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
  unoptimized?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  unoptimized = false,
}: OptimizedImageProps) {
  if (!src) return null;
  
  // Automaticky nastav unoptimized pro SVG soubory
  const isSvg = src.endsWith('.svg');
  const shouldUnoptimize = unoptimized || isSvg;
  
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      quality={90}
      unoptimized={shouldUnoptimize}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  )
} 