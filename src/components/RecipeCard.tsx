import Link from 'next/link'
import Image from 'next/image'

interface RecipeCardProps {
  id: string
  title: string
  category: string
  image: string
  description: string
  prepTime: string
  cookTime: string
}

export default function RecipeCard({ id, title, category, image, description, prepTime, cookTime }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${id}`} className="block">
      <div className="recipe-card group">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-accent-gold bg-opacity-90 text-white px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-serif text-text-dark mb-2 group-hover:text-accent-gold transition-colors duration-300">
            {title}
          </h3>
          <p className="text-text-light text-sm mb-4 line-clamp-2 font-sans">
            {description}
          </p>
          
          <div className="flex items-center justify-between text-sm text-text-light">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Prep: {prepTime}</span>
              </span>
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Cook: {cookTime}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
} 