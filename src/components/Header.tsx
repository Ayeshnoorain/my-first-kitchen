'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="header-elegant shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-16 h-16 relative">
              <Image
                src="/images/Logo/Logo.png"
                alt="My First Kitchen Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl font-serif text-white">My First Kitchen</h1>
              <p className="text-accent-gold text-sm font-medium tracking-wide">Handcrafted with Love</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-accent-gold transition-colors duration-300 font-medium text-sm tracking-wide">
              HOME
            </Link>
            <Link href="/recipes" className="text-white hover:text-accent-gold transition-colors duration-300 font-medium text-sm tracking-wide">
              RECIPES
            </Link>
            <Link href="/story" className="text-white hover:text-accent-gold transition-colors duration-300 font-medium text-sm tracking-wide">
              MY STORY
            </Link>
            <Link href="/shop" className="text-white hover:text-accent-gold transition-colors duration-300 font-medium text-sm tracking-wide">
              SHOP MY BAKES
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-white hover:bg-rich-maroon transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-accent-gold border-opacity-20">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-white hover:text-accent-gold transition-colors duration-300 font-medium text-sm tracking-wide py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/recipes" 
                className="text-white hover:text-accent-gold transition-colors duration-300 font-medium text-sm tracking-wide py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                RECIPES
              </Link>
              <Link 
                href="/story" 
                className="text-white hover:text-accent-gold transition-colors duration-300 font-medium text-sm tracking-wide py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                MY STORY
              </Link>
              <Link 
                href="/shop" 
                className="text-white hover:text-accent-gold transition-colors duration-300 font-medium text-sm tracking-wide py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SHOP MY BAKES
              </Link>
            </nav>
          </div>
        )}
      </div>
      
      {/* Info Bar */}
      <div className="info-bar py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-medium">Fresh baked goods available for pickup</span>
          </div>
        </div>
      </div>
    </header>
  )
} 