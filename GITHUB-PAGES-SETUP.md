# 🚀 Deploy on GitHub Pages - FREE Forever!

## 📋 **Prerequisites (5 minutes)**

### Step 1: Install Git
1. **Download Git:** https://git-scm.com/download/win
2. **Install Git:** Run the installer (use default settings)
3. **Restart PowerShell** after installation

### Step 2: Create GitHub Account
1. **Go to:** https://github.com
2. **Sign up** for a free account
3. **Verify your email**

## 🔧 **Setup Your Repository (10 minutes)**

### Step 1: Create New Repository
1. **Go to GitHub.com**
2. **Click "New repository"**
3. **Repository name:** `my-first-kitchen`
4. **Make it Public** (required for free GitHub Pages)
5. **Don't initialize** with README (we'll upload existing files)
6. **Click "Create repository"**

### Step 2: Upload Your Files
1. **In your new repository, click "uploading an existing file"**
2. **Drag and drop ALL files** from `C:\projects\my-first-kitchen\`
3. **Click "Commit changes"**

## ⚙️ **Configure for GitHub Pages (5 minutes)**

### Step 1: Update package.json
Add this to your `package.json`:

```json
{
  "scripts": {
    "build": "next build && next export",
    "export": "next export"
  }
}
```

### Step 2: Update next.config.js
Replace your `next.config.js` with:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### Step 3: Create .github/workflows/deploy.yml
Create this file in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build project
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

## 🌐 **Enable GitHub Pages (2 minutes)**

### Step 1: Go to Settings
1. **In your repository, click "Settings"**
2. **Scroll down to "Pages"** (left sidebar)

### Step 2: Configure Pages
1. **Source:** Select "Deploy from a branch"
2. **Branch:** Select "gh-pages" (will be created by the workflow)
3. **Folder:** Leave as "/ (root)"
4. **Click "Save"**

## 🎉 **Your Website is Live!**

### Your URL will be:
- **https://yourusername.github.io/my-first-kitchen**

### What You Get:
- ✅ **Completely FREE** hosting
- ✅ **Custom domain** support (optional)
- ✅ **SSL certificate** (https://)
- ✅ **Automatic updates** when you push changes
- ✅ **Professional URL**

## 🔄 **Updating Your Website**

### Method 1: GitHub Web Interface
1. **Go to your repository**
2. **Click on any file**
3. **Click the pencil icon** to edit
4. **Make your changes**
5. **Click "Commit changes"**
6. **Wait 2-3 minutes** for automatic deployment

### Method 2: Git Commands (Advanced)
```bash
git add .
git commit -m "Update website"
git push origin main
```

## 🎯 **Your Beautiful Website Features:**
- **Elegant maroon/gold design**
- **Mobile-friendly navigation**
- **All your beautiful cake recipes**
- **Personal story page**
- **Shop page with ordering**
- **Contact links to Instagram/email**

## 🆘 **Troubleshooting**

### If build fails:
1. **Check the Actions tab** in your repository
2. **Look for error messages**
3. **Make sure all files are uploaded**

### If images don't load:
1. **Check image paths** in your code
2. **Make sure images are in the `public` folder**
3. **Use relative paths** starting with `/`

### If styling is broken:
1. **Check that Tailwind CSS is included**
2. **Verify `globals.css` is imported**
3. **Check browser console for errors**

---
**Your beautiful baking website will be live in 20 minutes! 🍰✨** 