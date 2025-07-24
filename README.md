# My First Kitchen 🍳

A beautiful, personal cooking website where you can share your home-cooked meals and baked recipes. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏠 **Homepage** with welcome message and featured recipes
- 📖 **Recipes Section** with recipe cards and individual recipe pages
- 🛍️ **Shop My Bakes** section for selling baked goods
- 📱 **Mobile-responsive** design
- 🎨 **Warm, cozy design** with custom color palette
- ⚡ **Fast and optimized** with Next.js

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel/Netlify ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download** this project to your local machine

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Project Structure

```
my-first-kitchen/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── recipes/            # Recipes pages
│   │   └── shop/               # Shop pages
│   └── components/             # React components
│       ├── Header.tsx          # Navigation header
│       ├── Footer.tsx          # Footer with social links
│       ├── RecipeCard.tsx      # Recipe card component
│       └── ShopItem.tsx        # Shop item component
├── data/                       # JSON data files
│   ├── recipes.json            # Recipe data
│   └── shop-items.json         # Shop items data
├── public/                     # Static assets
│   └── images/                 # Recipe and shop images
└── package.json                # Dependencies and scripts
```

## Customization

### 1. Update Your Information

**Header & Footer** (`src/components/Header.tsx` and `src/components/Footer.tsx`):
- Update your name/brand
- Change Instagram username
- Update email address

### 2. Add Your Recipes

**Option A: JSON Files** (Recommended)
- Edit `data/recipes.json` to add your recipes
- Follow the existing structure for consistency

**Option B: Markdown Files**
- Create `.md` files in a `content/recipes/` folder
- Use frontmatter for metadata
- Add markdown content for ingredients, instructions, and story

### 3. Add Your Shop Items

Edit `data/shop-items.json` to:
- Add your baked goods
- Set prices and availability
- Include allergen information
- Add serving sizes

### 4. Add Images

1. Create a `public/images/` folder
2. Add your recipe and shop images
3. Update image paths in your data files
4. Recommended image sizes:
   - Recipe cards: 400x300px
   - Recipe pages: 800x600px
   - Shop items: 600x400px

### 5. Customize Colors

Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  'creamy': '#FDF8F3',        // Background
  'warm-white': '#FEFCF8',    // Cards
  'light-brown': '#D4B996',   // Primary buttons
  'blush-pink': '#F4E4E1',    // Secondary buttons
  'warm-gray': '#8B7355',     // Text
  'deep-brown': '#5D4E37',    // Headings
}
```

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/my-first-kitchen.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

### Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Drag and drop the `.next` folder to Netlify
   - Or connect your GitHub repository

## Content Management

### Adding New Recipes

1. **Add to JSON file**:
   ```json
   {
     "id": "your-recipe-slug",
     "title": "Your Recipe Title",
     "category": "Category",
     "image": "/images/your-image.jpg",
     "description": "Brief description",
     "prepTime": "15 min",
     "cookTime": "30 min",
     "servings": "4 servings",
     "ingredients": ["ingredient 1", "ingredient 2"],
     "instructions": ["step 1", "step 2"],
     "story": "Your recipe story..."
   }
   ```

2. **Add the image** to `public/images/`

3. **Update the recipes page** to include your new recipe

### Adding Shop Items

1. **Add to shop JSON file**:
   ```json
   {
     "id": "your-item-slug",
     "name": "Item Name",
     "description": "Detailed description",
     "price": "$25",
     "image": "/images/your-image.jpg",
     "available": true,
     "servingSize": "Serves 4",
     "allergens": ["Gluten", "Dairy"],
     "prepTime": "24 hours notice"
   }
   ```

## Features to Add

- [ ] Recipe search functionality
- [ ] Recipe categories filter
- [ ] Contact form
- [ ] Newsletter signup
- [ ] Recipe ratings and reviews
- [ ] Print-friendly recipe pages
- [ ] Recipe sharing on social media
- [ ] Admin panel for content management

## Support

If you need help customizing your website:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Look at the existing code structure for examples

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ and lots of butter by [Your Name] 