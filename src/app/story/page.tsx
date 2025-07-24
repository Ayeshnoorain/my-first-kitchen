import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

// Story data based on your actual photos - all birthday celebrations
const bakingStories = [
  {
    id: 1,
    title: "My Dad's Birthday Cake",
    date: "2025",
    story: "My dad has always supported and inspired me, both in life and in my creative passions. For his birthday, I wanted to honor him with a cake that reflected his strength, kindness, and everything he means to me. I carefully chose the flavors and design to tell a story—his story. When he saw the cake, his proud smile meant everything. That moment reminded me how powerful baking can be when it's filled with love and gratitude.",
    personImage: "/images/story/Dad.jpg",
    personName: "My Dad"
  },
  {
    id: 2,
    title: "My Husband's Birthday Cake",
    date: "2024",
    story: "My husband has been my biggest cheerleader throughout my baking journey. For his birthday, I wanted to make something meaningful that reflected his unwavering support. I baked his favorite chocolate cake with a heartfelt surprise inside—layers inspired by his childhood memories and our love story. When he took his first bite, his eyes lit up with joy. That moment reminded me why I fell in love with baking: to create happiness for the people I cherish most.",
    personImage: "/images/story/Husband.jpg",
    personName: "My Husband"
  },
  {
    id: 3,
    title: "My Cousin's Birthday Cakes",
    date: "2023",
    story: "For my cousin's birthday, I decided to go all out and baked not one, but two cakes to make the celebration extra special. All our cousins gathered to celebrate, and the energy in the room was filled with laughter, joy, and love. I designed each cake with a unique flavor and theme to reflect different sides of his personality. Seeing his reaction—and the excitement of everyone else—was such a rewarding moment. It reminded me how food can bring people together and turn memories into something truly sweet.",
    personImage: "/images/story/Cousin.JPG",
    personName: "My Cousin"
  }
];

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-soft-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-serif text-header-maroon mb-6">
            My Baking Journey
          </h1>
          <p className="text-xl text-text-light leading-relaxed max-w-3xl mx-auto font-sans">
            Every cake tells a story, and every story is about love. 
            This is how I discovered my passion for baking - one birthday celebration at a time, 
            one smile at a time, one loved one at a time.
          </p>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-20">
            {bakingStories.map((story, index) => (
              <div key={story.id} className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                
                {/* Story Content */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-5xl font-serif text-accent-gold">{story.date}</span>
                      <div className="h-px flex-1 bg-accent-gold bg-opacity-30"></div>
                    </div>
                    <h2 className="text-4xl font-serif text-header-maroon">{story.title}</h2>
                    <p className="text-lg text-text-light leading-relaxed font-sans">{story.story}</p>
                  </div>
                  
                  {/* Person with Cake */}
                  <div className="bg-soft-gray p-6 rounded-xl border border-accent-gold border-opacity-20">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent-gold">
                        <Image
                          src={story.personImage}
                          alt={story.personName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-text-light font-sans">Made with love for</p>
                        <p className="text-lg font-medium text-header-maroon font-serif">{story.personName}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cake Image - Using person image as placeholder since we don't have separate cake images */}
                <div className="flex-1">
                  <div className="relative h-96 rounded-xl overflow-hidden shadow-lg border border-accent-gold border-opacity-20">
                    <Image
                      src={story.personImage}
                      alt={`Birthday cake for ${story.personName}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-soft-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-header-maroon mb-6">
            Ready to Create Your Own Birthday Story?
          </h2>
          <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto font-sans">
            Every birthday deserves a special cake. Let me help you create 
            unforgettable birthday moments for your loved ones, just like I did for mine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/shop" 
              className="btn-primary"
            >
              Browse My Cakes
            </a>
            <a 
              href="https://instagram.com/my.first.kitchen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Follow My Journey
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 