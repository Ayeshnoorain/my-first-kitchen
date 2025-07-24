'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RecipeCard from '@/components/RecipeCard'
import recipesData from '../../../data/recipes.json'

const categories = ['All', 'Desserts', 'Main Dishes', 'Cakes']

export default function RecipesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Filter recipes based on selected category
  const filteredRecipes = selectedCategory === 'All' 
    ? recipesData 
    : recipesData.filter(recipe => recipe.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-soft-gray">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-serif text-header-maroon mb-4">
            My Recipe Collection
          </h1>
          <p className="text-xl text-text-light max-w-2xl mx-auto font-sans">
            Every recipe tells a story of love, celebration, and the people who make life special. 
            These are the dishes that have brought joy to my family and friends.
          </p>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 font-medium ${
                  selectedCategory === category
                    ? 'bg-accent-gold text-white'
                    : 'bg-accent-gold bg-opacity-20 text-accent-gold hover:bg-accent-gold hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Recipes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>

          {/* No recipes found message */}
          {filteredRecipes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-text-light font-sans">
                No recipes found in the "{selectedCategory}" category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
} 