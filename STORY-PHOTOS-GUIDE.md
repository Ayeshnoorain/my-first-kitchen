# 📸 Story Photos Guide

## 🎂 **My Story Page Photos**

Your new story page is ready! Here's how to add your personal baking journey photos:

### **Photos You'll Need:**

#### **1. Cake Photos (Main Images)**
**Folder:** `C:\projects\my-first-kitchen\public\images\story\`

**Photos needed:**
- `first-birthday-cake.jpg` - Your first birthday cake
- `moms-birthday-cake.jpg` - Cake for your mom's 50th
- `wedding-cake.jpg` - Wedding cake for your best friend
- `dads-retirement-cake.jpg` - Retirement celebration cake

**Photo requirements:**
- **Size:** 800x600px or larger
- **Style:** Clean, well-lit photos of the finished cakes
- **Background:** White or neutral background works best

#### **2. Person with Cake Photos (Small Circular)**
**Same folder:** `C:\projects\my-first-kitchen\public\images\story\`

**Photos needed:**
- `sister-with-cake.jpg` - Your sister with her birthday cake
- `mom-with-cake.jpg` - Your mom with her birthday cake
- `friend-with-cake.jpg` - Your best friend with her wedding cake
- `dad-with-cake.jpg` - Your dad with his retirement cake

**Photo requirements:**
- **Size:** 200x200px or larger (will be cropped to circle)
- **Style:** Candid moments of joy when they see the cake
- **Focus:** The person's happy reaction to your baking

### **How to Update Your Stories:**

**File:** `C:\projects\my-first-kitchen\src\app\story\page.tsx`

**Update these sections:**
```tsx
const bakingStories = [
  {
    id: 1,
    title: "Your Actual Story Title",
    date: "2020",
    story: "Your personal story about this cake...",
    cakeImage: "/images/story/your-cake-photo.jpg",
    personImage: "/images/story/person-with-cake.jpg",
    personName: "Person's Name"
  },
  // Add more stories...
]
```

### **Story Ideas to Include:**

1. **Your First Cake** - The moment you discovered your passion
2. **Family Celebrations** - Birthdays, anniversaries, holidays
3. **Special Occasions** - Weddings, graduations, retirements
4. **Learning Moments** - When a cake didn't turn out and you learned from it
5. **Breakthrough Moments** - When you felt like a real baker

### **Photo Tips:**

- **Natural lighting** works best for food photography
- **Show the emotion** - capture the joy on people's faces
- **Tell the story** - each photo should represent a milestone
- **Consistent style** - try to use similar lighting and angles
- **High quality** - clear, sharp photos look more professional

### **After Adding Photos:**

1. **Save the file** - the website will automatically update
2. **Refresh your browser** at `http://localhost:3000/story`
3. **Check the layout** - make sure photos look good on mobile and desktop

### **Example Story Structure:**

```tsx
{
  id: 1,
  title: "My Sister's Sweet 16 Cake",
  date: "2021",
  story: "My sister was turning 16 and I wanted to make something special. I spent weeks practicing the perfect chocolate cake recipe. When she walked into the room and saw the three-tier cake with her favorite flowers, she cried happy tears. That's when I knew baking was more than just cooking - it was creating memories that last forever.",
  cakeImage: "/images/story/sisters-sweet-16-cake.jpg",
  personImage: "/images/story/sister-reaction.jpg",
  personName: "My Sister Sarah"
}
```

---

🎉 **Your story page will showcase your baking journey beautifully and help customers connect with your passion for creating special moments through cake!** 