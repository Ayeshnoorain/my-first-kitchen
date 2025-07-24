import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import recipesData from '../../../../data/recipes.json'

interface Recipe {
  id: string
  title: string
  category: string
  image: string
  description: string
  prepTime: string
  cookTime: string
  servings: string
  ingredients: string[]
  story: string
}

// Add this function to generate static params for all recipes
export async function generateStaticParams() {
  const recipes = recipesData as Recipe[]
  return recipes.map((recipe) => ({
    id: recipe.id,
  }))
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = (recipesData as Recipe[]).find((r: Recipe) => r.id === params.id)

  if (!recipe) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-serif text-header-maroon mb-4">Recipe Not Found</h1>
          <p className="text-text-light mb-8 font-sans">Sorry, this recipe doesn't exist yet.</p>
          <Link href="/recipes" className="btn-primary">
            Back to Recipes
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Recipe Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-soft-gray">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-accent-gold bg-opacity-20 text-accent-gold px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                {recipe.category}
              </span>
              <h1 className="text-4xl font-serif text-header-maroon mb-4">
                {recipe.title}
              </h1>
              <p className="text-xl text-text-light mb-6 font-sans">
                {recipe.description}
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm text-text-light">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Prep: {recipe.prepTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Cook: {recipe.cookTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Serves: {recipe.servings}</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ingredients */}
            <div>
              <h2 className="text-2xl font-serif text-header-maroon mb-6">Ingredients</h2>
              <div className="bg-soft-gray p-6 rounded-xl">
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-accent-gold rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-text-dark font-sans">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Story */}
            <div>
              <h2 className="text-2xl font-serif text-header-maroon mb-6">The Story Behind This Recipe</h2>
              <div className="bg-soft-gray p-6 rounded-xl">
                <p className="text-text-dark leading-relaxed font-sans">
                  {recipe.story}
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 p-8 bg-accent-gold bg-opacity-10 rounded-xl text-center">
            <h3 className="text-xl font-serif text-header-maroon mb-4">
              Love this recipe? Want me to make it for you?
            </h3>
            <p className="text-text-light mb-6 font-sans">
              I'd be happy to bake this for your special occasion! 
              Message me on Instagram or email me to place your order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://instagram.com/my.first.kitchen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Order on Instagram
              </a>
              <a 
                href="mailto:myfirstkitchenden@gmail.com?subject=Order Request - My First Kitchen"
                className="btn-secondary"
              >
                Order via Email
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/recipes" className="btn-secondary">
              Back to All Recipes
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 