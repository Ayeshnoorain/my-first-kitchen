import Image from 'next/image'

interface ShopItemProps {
  id: string
  name: string
  description: string
  price: string
  image: string
  available: boolean
}

export default function ShopItem({ id, name, description, price, image, available }: ShopItemProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      <div className="relative h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        {!available && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-medium text-lg">Currently Unavailable</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif text-text-dark mb-2">{name}</h3>
        <p className="text-text-light mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-text-dark">{price}</span>
          
          {available ? (
            <a
              href="mailto:myfirstkitchenden@gmail.com?subject=Order Request - My First Kitchen"
              className="btn-primary"
            >
              Order Now
            </a>
          ) : (
            <button disabled className="bg-gray-300 text-gray-500 px-6 py-3 rounded-lg font-medium cursor-not-allowed">
              Unavailable
            </button>
          )}
        </div>
      </div>
    </div>
  )
} 