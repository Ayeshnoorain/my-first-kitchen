# 🖼️ Image Loading Fix Guide

## Why Images Aren't Loading:

### ❌ **HEIC Files Problem**
- HEIC files (like `Mango moose.HEIC`) don't work in web browsers
- Web browsers only support JPG, PNG, WebP formats

### ❌ **File Names with Spaces**
- File names like `Mango moose.jpg` can cause issues
- Better to use: `mango-mousse.jpg`

## 🛠️ **Quick Fixes:**

### **Option 1: Convert HEIC to JPG (Recommended)**
1. **Open Photos app** on your computer
2. **Select all HEIC files** in your recipes folder
3. **Export as JPG**: File → Export → JPG
4. **Replace HEIC files** with JPG versions

### **Option 2: Rename Files (Remove Spaces)**
Rename these files:
- `Mango moose.jpg` → `mango-mousse.jpg`
- `Carror Walnet cake.jpg` → `carrot-walnut-cake.jpg`
- `Strawberry Cheese cake.jpg` → `strawberry-cheesecake.jpg`
- `Bluberry and nuts cake.jpg` → `blueberry-nuts-cake.jpg`
- `Carror Cake.jpg` → `carrot-cake.jpg`
- `Chocolatecrumble cake.jpg` → `chocolate-crumble-cake.jpg`
- `Vanilla Cake.jpg` → `vanilla-cake.jpg`

### **Option 3: Use Only Working Images**
I've updated the website to use only the JPG images that work:
- ✅ Pancake.jpg
- ✅ Mango moose.jpg  
- ✅ Carror Walnet cake.jpg
- ✅ Strawberry Cheese cake.jpg
- ✅ Bluberry and nuts cake.jpg
- ✅ Carror Cake.jpg
- ✅ Chocolatecrumble cake.jpg
- ✅ Vanilla Cake.jpg

## 🚀 **To Test:**
1. **Start the website:**
   ```powershell
   cd C:\projects\my-first-kitchen
   npm run dev
   ```

2. **Go to:** `http://localhost:3000`

3. **Check:** Homepage and Recipes page

## 📝 **Current Working Images:**
- **Homepage:** Pancakes, Mango Mousse, Carrot Walnut Cake
- **All Recipes:** 9 recipes with working JPG images

**Which option would you like to try first?** 