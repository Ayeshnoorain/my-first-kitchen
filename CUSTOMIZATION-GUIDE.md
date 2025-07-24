# 🎨 Website Customization Guide

## 📸 **Adding Your Images**

### **Step 1: Prepare Your Images**
- **Recipe photos:** 400x300px for cards, 800x600px for full pages
- **Shop item photos:** 600x400px
- **Format:** JPG or PNG
- **Quality:** High resolution, well-lit photos

### **Step 2: Add Images to Website**
1. **Copy your images** to: `C:\projects\my-first-kitchen\public\images\`
2. **Rename them** to match the recipe names (e.g., `chocolate-chip-cookies.jpg`)

### **Step 3: Update Image References**
Edit these files to match your image names:
- `data/recipes.json` - Update the `image` field for each recipe
- `data/shop-items.json` - Update the `image` field for each shop item

---

## 📝 **Adding Your Recipes**

### **Edit Recipe Data**
File: `C:\projects\my-first-kitchen\data\recipes.json`

**Recipe Structure:**
```json
{
  "id": "your-recipe-name",
  "title": "Your Recipe Title",
  "category": "Desserts/Bread/Main Dishes",
  "image": "/images/your-recipe-photo.jpg",
  "description": "Brief description of your recipe",
  "prepTime": "15 min",
  "cookTime": "30 min",
  "servings": "4 servings",
  "ingredients": [
    "2 cups flour",
    "1 cup sugar",
    "etc..."
  ],
  "instructions": [
    "Step 1: Mix ingredients",
    "Step 2: Bake at 350°F",
    "etc..."
  ],
  "story": "The story behind your recipe - why it's special to you"
}
```

---

## 🛒 **Adding Your Shop Items**

### **Edit Shop Data**
File: `C:\projects\my-first-kitchen\data\shop-items.json`

**Shop Item Structure:**
```json
{
  "id": "your-item-name",
  "title": "Your Item Name",
  "image": "/images/your-item-photo.jpg",
  "description": "Description of your baked good",
  "price": "$12.99",
  "available": true,
  "category": "Cookies/Cakes/Bread"
}
```

---

## 📞 **Updating Contact Details**

### **Edit Footer Contact Information**
File: `C:\projects\my-first-kitchen\src\components\Footer.tsx`

**Update these lines:**
```tsx
// Line 25: Instagram username
href="https://instagram.com/YOUR_USERNAME"

// Line 33: Facebook username  
href="https://facebook.com/YOUR_USERNAME"

// Line 41: YouTube channel
href="https://youtube.com/YOUR_CHANNEL"

// Line 50: Email address
href="mailto:YOUR_EMAIL@example.com"

// Line 56: Phone number
<span>YOUR_PHONE_NUMBER</span>

// Line 62: Location
<span>YOUR_CITY, STATE</span>
```

---

## 🎨 **Customizing Colors & Branding**

### **Update Website Title**
File: `C:\projects\my-first-kitchen\src\components\Header.tsx`
- Change "My First Kitchen" to your brand name

### **Update Welcome Message**
File: `C:\projects\my-first-kitchen\src\app\page.tsx`
- Edit the welcome text and description

### **Current Color Scheme:**
- **Background:** Pure white (#FFFFFF)
- **Text:** Dark gray (#1F2937)
- **Accent:** Gold (#D4AF37)
- **Footer:** Dark gray (#374151)

---

## 📱 **Social Media Links**

### **Add Your Social Media**
Update these in the Footer component:
- **Instagram:** `https://instagram.com/YOUR_USERNAME`
- **Facebook:** `https://facebook.com/YOUR_USERNAME`
- **YouTube:** `https://youtube.com/YOUR_CHANNEL`

---

## 🖼️ **Sample Image Names You'll Need**

Based on the current recipes, you'll need these images in `public/images/`:
- `chocolate-chip-cookies.jpg`
- `sourdough-bread.jpg`
- `pasta-carbonara.jpg`
- `blueberry-muffins.jpg`
- `chicken-soup.jpg`
- `chocolate-cake.jpg`
- `chocolate-cake-shop.jpg`
- `cookies-assortment.jpg`
- `sourdough-bread-shop.jpg`
- `vanilla-cupcakes.jpg`
- `chocolate-brownies.jpg`

---

## 🚀 **After Making Changes**

1. **Save all files**
2. **The website will automatically update** (hot reload)
3. **Refresh your browser** at `http://localhost:3000`

---

## 💡 **Tips for Great Photos**

- **Natural lighting** works best
- **Clean background** - white or neutral
- **Close-up shots** for details
- **Consistent style** across all photos
- **Show the finished dish** clearly

---

## 🆘 **Need Help?**

1. **Check the browser console** for any errors
2. **Make sure image paths match** exactly
3. **Verify JSON syntax** is correct
4. **Restart the server** if needed: `npm run dev`

---

🎉 **Your website is now ready to showcase your culinary creations!** 