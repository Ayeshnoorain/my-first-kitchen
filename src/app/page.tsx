import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RecipeCard from '@/components/RecipeCard'
import Link from 'next/link'
import recipesData from '../../data/recipes.json'

// Get only featured recipes for homepage
const featuredRecipes = recipesData.filter(recipe => recipe.featured)

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-soft-gray">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-header-maroon mb-6">
            Welcome to My First Kitchen
          </h1>
          <p className="text-xl text-text-light mb-8 max-w-3xl mx-auto font-sans">
            Where home-cooked meals and baked treats come to life. 
            Join me on this delicious journey as I share my favorite recipes, 
            kitchen adventures, and the joy of creating something special from scratch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/recipes" className="btn-primary">
              Explore Recipes
            </Link>
            <Link href="/shop" className="btn-secondary">
              Shop My Bakes
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-header-maroon mb-4">
              Featured Recipes
            </h2>
            <p className="text-text-light max-w-2xl mx-auto font-sans">
              Here are some of my most-loved recipes that I've perfected over time. 
              Each one has a special story and lots of love baked right in.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/recipes" className="btn-secondary">
              View All Recipes
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-soft-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-header-maroon mb-6">
            About My Kitchen
          </h2>
          <p className="text-lg text-text-light leading-relaxed mb-8 font-sans">
            My kitchen is where magic happens - where simple ingredients transform into 
            comforting meals and delightful treats. I believe that cooking and baking 
            are acts of love, and every recipe I share has been tested, tasted, and 
            perfected with care. From family favorites to new discoveries, 
            each dish tells a story of tradition, innovation, and pure joy.
          </p>
          <Link href="/story" className="btn-primary">
            Read My Story
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-header-maroon mb-6">
            Ready to Taste Something Special?
          </h2>
          <p className="text-lg text-text-light mb-8 font-sans">
            Let me bake something wonderful for your next celebration. 
            Every cake is made with love and the finest ingredients.
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
              href="mailto:myfirstkitchenden@gmail.com"
              className="btn-secondary"
            >
              Order via Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 