import React from 'react'
import ProductContext from './ProductContext'
import { filter } from 'motion/react-client';
import { useState } from 'react';


const ProductState = (props) => {
    const products = [
        {
          id: 1,
          category:'bracelets',
          title: "Classic Gold Chain Bracelet",
          rating: 2.5,
          description: "A timeless gold chain bracelet for everyday wear.",
          availability: "Low Stock",
          price: 149.99,
          colorOptions: ["Gold"],
          quantity: 15,
          discount: 10,
          thumbnail: '../assets/products/rings/ring1.webp'
        },
        {
          id: 2,
          category:'bracelets',
          title: "Silver Beaded Bracelet",
          rating: 4.7,
          description: "Elegant silver beaded bracelet with a sleek design.",
          availability: "Low Stock",
          price: 89.99,
          colorOptions: ["Silver"],
          quantity: 20,
          discount: 5,
          thumbnail: "https://example.com/images/silver-beaded-bracelet.jpg"
        },
        {
          id: 3,
          category:'bracelets',
          title: "Gold and Silver Cuff Bracelet",
          rating: 1.8,
          description: "A bold cuff bracelet combining gold and silver.",
          availability: "Low Stock",
          price: 199.99,
          colorOptions: ["Gold", "Silver"],
          quantity: 8,
          discount: 15,
          thumbnail: "https://example.com/images/gold-silver-cuff-bracelet.jpg"
        },
        {
          id: 4,
          category:'bracelets',
          title: "Rose Gold Charm Bracelet",
          rating: 3.6,
          description: "A delicate rose gold bracelet with charming details.",
          availability: "Out of Stock",
          price: 129.99,
          colorOptions: ["Gold"],
          quantity: 0,
          discount: 0,
          thumbnail: "https://example.com/images/rose-gold-charm-bracelet.jpg"
        },
        {
          id: 5,
          category:'bracelets',
          title: "Silver Link Bracelet",
          rating: 2.4,
          description: "A modern silver link bracelet for a stylish look.",
          availability: "Low Stock",
          price: 109.99,
          colorOptions: ["Silver"],
          quantity: 12,
          discount: 10,
          thumbnail: "https://example.com/images/silver-link-bracelet.jpg"
        },
        {
          id: 6,
          category:'bracelets',
          title: "Gold Bangle Bracelet",
          rating: 1.9,
          description: "A classic gold bangle bracelet for formal occasions.",
          availability: "Low Stock",
          price: 249.99,
          colorOptions: ["Gold"],
          quantity: 5,
          discount: 20,
          thumbnail: "https://example.com/images/gold-bangle-bracelet.jpg"
        },
        {
          id: 7,
          category:'bracelets',
          title: "Silver Infinity Bracelet",
          rating: 3.7,
          description: "A symbolic silver infinity bracelet representing eternity.",
          availability: "Low Stock",
          price: 79.99,
          colorOptions: ["Silver"],
          quantity: 18,
          discount: 0,
          thumbnail: "https://example.com/images/silver-infinity-bracelet.jpg"
        },
        {
          id: 8,
          category:'bracelets',
          title: "Gold Tennis Bracelet",
          rating: 2.8,
          description: "A luxurious gold tennis bracelet with sparkling details.",
          availability: "Low Stock",
          price: 399.99,
          colorOptions: ["Gold"],
          quantity: 3,
          discount: 12,
          thumbnail: "https://example.com/images/gold-tennis-bracelet.jpg"
        },
        {
          id: 9,
          category:'bracelets',
          title: "Silver Adjustable Bracelet",
          rating: 4.3,
          description: "A versatile silver bracelet with an adjustable fit.",
          availability: "Low Stock",
          price: 59.99,
          colorOptions: ["Silver"],
          quantity: 25,
          discount: 5,
          thumbnail: "https://example.com/images/silver-adjustable-bracelet.jpg"
        },
        {
          id: 10,
          category:'bracelets',
          title: "Gold and Silver Friendship Bracelet",
          rating: 4.5,
          description: "A meaningful friendship bracelet in gold and silver.",
          availability: "Low Stock",
          price: 99.99,
          colorOptions: ["Gold", "Silver"],
          quantity: 10,
          discount: 10,
          thumbnail: "https://example.com/images/friendship-bracelet.jpg"
        },
        {
            id: 11,
            category:'rings',
            title: "Classic Gold Band Ring",
            rating: 4.6,
            description: "A simple and elegant gold band ring for everyday wear.",
            availability: "Low Stock",
            price: 129.99,
            colorOptions: ["Gold"],
            quantity: 20,
            discount: 10,
            thumbnail: '/src/assets/products/rings/ring1.webp',
            brandLogo:'/src/assets/products/brandLogo1.png'
         
          },
          {
            id: 12,
            category:'rings',
            title: "Silver Diamond Ring",
            rating: 1.8,
            description: "A stunning silver ring with a sparkling diamond.",
            availability: "In Stock",
            price: 299.99,
            colorOptions: ["Silver"],
            quantity: 8,
            discount: 15,
            thumbnail:   '/src/assets/products/rings/ring2.webp',
            brandLogo:'/src/assets/products/brandLogo3.png'
          },
          {
            id: 13,
            category:'rings',
            title: "Rose Gold Engagement Ring",
            rating: 4.9,
            description: "A beautiful rose gold engagement ring with intricate details.",
            availability: "Low Stock",
            price: 499.99,
            colorOptions: ["Gold"],
            quantity: 5,
            discount: 20,
            thumbnail:  '/src/assets/products/rings/ring3.webp',
            brandLogo:'/src/assets/products/brandLogo2.png'
          },
          {
            id: 14,
            category:'rings',
            title: "Silver Gemstone Ring",
            rating: 4.5,
            description: "A unique silver ring featuring a vibrant gemstone.",
            availability: "Out of Stock",
            price: 89.99,
            colorOptions: ["Silver"],
            quantity: 0,
            discount: 0,
            thumbnail:  '/src/assets/products/rings/ring4.webp',
            brandLogo:'/src/assets/products/brandLogo1.png'
          },
          {
            id: 15,
            category:'rings',
            title: "Gold and Silver Stackable Ring",
            rating: 4.7,
            description: "A modern stackable ring combining gold and silver.",
            availability: "In Stock",
            price: 149.99,
            colorOptions: ["Gold", "Silver"],
            quantity: 12,
            discount: 10,
            thumbnail: '/src/assets/products/rings/ring5.webp',
            brandLogo:'/src/assets/products/brandLogo3.png'
          },
          {
            id: 16,
            category:'rings',
            title: "Gold Eternity Ring",
            rating: 3.8,
            description: "A luxurious gold eternity ring symbolizing never-ending love.",
            availability: "Low Stock",
            price: 399.99,
            colorOptions: ["Gold"],
            quantity: 6,
            discount: 12,
            thumbnail: '/src/assets/products/rings/ring6.webp',
            brandLogo:'/src/assets/products/brandLogo2.png'
          },
          {
            id: 17,
            category:'rings',
            title: "Silver Minimalist Ring",
            rating: 2.4,
            description: "A sleek and minimalist silver ring for a modern look.",
            availability: "Low Stock",
            price: 69.99,
            colorOptions: ["Silver"],
            quantity: 18,
            discount: 5,
            thumbnail: '/src/assets/products/rings/ring7.webp',
            brandLogo:'/src/assets/products/brandLogo3.png'
          },
          {
            id: 18,
            category:'rings',
            title: "Gold Claddagh Ring",
            rating: 4.7,
            description: "A traditional gold Claddagh ring representing love, loyalty, and friendship.",
            availability: "Low Stock",
            price: 179.99,
            colorOptions: ["Gold"],
            quantity: 10,
            discount: 10,
            thumbnail:'/src/assets/products/rings/ring8.webp',
            brandLogo:'/src/assets/products/brandLogo1.png'
          },
          {
            id: 19,
            category:'rings',
            title: "Silver Celestial Ring",
            rating: 1.6,
            description: "A mystical silver ring featuring celestial designs.",
            availability: "Low Stock",
            price: 99.99,
            colorOptions: ["Silver"],
            quantity: 15,
            discount: 0,
            thumbnail: '/src/assets/products/rings/ring9.webp',
            brandLogo:'/src/assets/products/brandLogo3.png'
          },
          {
            id: 20,
            category:'rings',
            title: "Gold Signet Ring",
            rating: 4.5,
            description: "A classic gold signet ring for a timeless look.",
            availability: "Low Stock",
            price: 199.99,
            colorOptions: ["Gold"],
            quantity: 7,
            discount: 8,
            thumbnail: '/src/assets/products/rings/ring10.webp',
            brandLogo:'/src/assets/products/brandLogo1.png'
          },
          {
            id: 21,
            category:'necklaces',
            title: "Classic Gold Chain Necklace",
            rating: 3.6,
            description: "A timeless gold chain necklace for everyday elegance.",
            availability: "Low Stock",
            price: 149.99,
            colorOptions: ["Gold"],
            quantity: 15,
            discount: 10,
            thumbnail: '/src/assets/products/necklaces/neck1.webp',
             brandLogo:'/src/assets/products/brandLogo2.png'
          },
          {
            id: 22,
            category:'necklaces',
            title: "Silver Pendant Necklace",
            rating: 4.7,
            description: "A delicate silver necklace with a beautiful pendant.",
            availability: "Low Stock",
            price: 99.99,
            colorOptions: ["Silver"],
            quantity: 20,
            discount: 5,
            thumbnail: '/src/assets/products/necklaces/neck2.webp',
             brandLogo:'/src/assets/products/brandLogo3.png'
          },
          {
            id: 23,
            category:'necklaces',
            title: "Gold and Silver Layered Necklace",
            rating: 4.8,
            description: "A trendy layered necklace combining gold and silver.",
            availability: "Low Stock",
            price: 199.99,
            colorOptions: ["Gold", "Silver"],
            quantity: 8,
            discount: 15,
            thumbnail: '/src/assets/products/necklaces/neck3.webp',
             brandLogo:'/src/assets/products/brandLogo1.png'
          },
          {
            id: 24,
            category:'necklaces',
            title: "Rose Gold Heart Necklace",
            rating: 1.9,
            description: "A romantic rose gold necklace with a heart-shaped pendant.",
            availability: "Out of Stock",
            price: 129.99,
            colorOptions: ["Gold"],
            quantity: 0,
            discount: 0,
            thumbnail: '/src/assets/products/necklaces/neck4.webp',
             brandLogo:'/src/assets/products/brandLogo2.png'
          },
          {
            id: 25,
            category:'necklaces',
            title: "Silver Choker Necklace",
            rating: 4.5,
            description: "A sleek silver choker necklace for a modern look.",
            availability: "Low Stock",
            price: 79.99,
            colorOptions: ["Silver"],
            quantity: 12,
            discount: 10,
            thumbnail: '/src/assets/products/necklaces/neck5.webp',
             brandLogo:'/src/assets/products/brandLogo2.png'
          },
          {
            id: 26,
            category:'necklaces',
            title: "Gold Locket Necklace",
            rating: 4.7,
            description: "A vintage-inspired gold locket necklace.",
            availability: "Low Stock",
            price: 249.99,
            colorOptions: ["Gold"],
            quantity: 5,
            discount: 20,
            thumbnail: '/src/assets/products/necklaces/neck6.webp',
             brandLogo:'/src/assets/products/brandLogo3.png'
          },
          {
            id: 27,
            category:'necklaces',
            title: "Silver Moon and Star Necklace",
            rating: 3.6,
            description: "A mystical silver necklace featuring moon and star designs.",
            availability: "Low Stock",
            price: 89.99,
            colorOptions: ["Silver"],
            quantity: 18,
            discount: 5,
            thumbnail: '/src/assets/products/necklaces/neck7.webp',
             brandLogo:'/src/assets/products/brandLogo2.png'
          },
          {
            id: 28,
            category:'necklaces',
            title: "Gold Pearl Necklace",
            rating: 4.8,
            description: "A luxurious gold necklace with elegant pearls.",
            availability: "In Stock",
            price: 349.99,
            colorOptions: ["Gold"],
            quantity: 3,
            discount: 12,
            thumbnail: '/src/assets/products/necklaces/neck8.webp',
             brandLogo:'/src/assets/products/brandLogo1.png'
          },
          {
            id: 29,
            category:'necklaces',
            title: "Silver Minimalist Necklace",
            rating: 1.4,
            description: "A simple and elegant silver minimalist necklace.",
            availability: "Low Stock",
            price: 59.99,
            colorOptions: ["Silver"],
            quantity: 25,
            discount: 0,
            thumbnail: '/src/assets/products/necklaces/neck9.webp',
             brandLogo:'/src/assets/products/brandLogo3.png'
          },
          {
            id: 30,
            category:'necklaces',
            title: "Gold Nameplate Necklace",
            rating: 4.5,
            description: "A personalized gold nameplate necklace.",
            availability: "In Stock",
            price: 199.99,
            colorOptions: ["Gold"],
            quantity: 10,
            discount: 10,
            thumbnail: '/src/assets/products/necklaces/neck10.webp',
             brandLogo:'/src/assets/products/brandLogo1.png'
          },
          {
            id: 31,
            category:'earrings',
            title: "Classic Gold Hoop Earrings",
            rating: 4.7,
            description: "Timeless gold hoop earrings for a chic look.",
            availability: "In Stock",
            price: 79.99,
            colorOptions: ["Gold"],
            quantity: 20,
            discount: 10,
            thumbnail: '/src/assets/products/earrings/ear1.webp',
            brandLogo:'/src/assets/products/brandLogo1.png'
          },
          {
            id: 32,
            category:'earrings',
            title: "Silver Stud Earrings",
            rating: 4.6,
            description: "Simple and elegant silver stud earrings.",
            availability: "In Stock",
            price: 49.99,
            colorOptions: ["Silver"],
            quantity: 25,
            discount: 5,
            thumbnail: '/src/assets/products/earrings/ear2.webp',
            brandLogo:'/src/assets/products/brandLogo2.png'
          },
          {
            id: 33,
            category:'earrings',
            title: "Gold and Silver Drop Earrings",
            rating: 2.8,
            descripton: "Stylish drop earrings combining gold and silver.",
            availability: "In Stock",
            price: 129.99,
            colorOptions: ["Gold", "Silver"],
            quantity: 10,
            discount: 15,
          thumbnail: '/src/assets/products/earrings/ear3.webp',
            brandLogo:'/src/assets/products/brandLogo3.png'
          },
          {
            id: 34,
            category:'earrings',
            title: "Rose Gold Huggie Earrings",
            rating: 4.9,
            description: "Delicate rose gold huggie earrings for a subtle look.",
            availability: "Out of Stock",
            price: 89.99,
            colorOptions: ["Gold"],
            quantity: 0,
            discount: 0,
             thumbnail: '/src/assets/products/earrings/ear4.webp',
            brandLogo:'/src/assets/products/brandLogo3.png'
          },
          {
            id: 35,
            category:'earrings',
            title: "Silver Chandelier Earrings",
            rating: 4.5,
            description: "Elegant silver chandelier earrings for special occasions.",
            availability: "Low Stock",
            price: 149.99,
            colorOptions: ["Silver"],
            quantity: 8,
            discount: 10,
            thumbnail: '/src/assets/products/earrings/ear5.webp',
            brandLogo:'/src/assets/products/brandLogo1.png'
          },
          {
            id: 36,
            category:'earrings',
            title: "Gold Pearl Earrings",
            rating: 4.7,
            description: "Classic gold earrings with pearl accents.",
            availability: "Low Stock",
            price: 199.99,
            colorOptions: ["Gold"],
            quantity: 6,
            discount: 20,
             thumbnail: '/src/assets/products/earrings/ear6.webp',
            brandLogo:'/src/assets/products/brandLogo1.png'
          },
          {
            id: 37,
            category:'earrings',
            title: "Silver Moon Earrings",
            rating: 3.6,
            description: "Unique silver earrings featuring moon designs.",
            availability: "Low Stock",
            price: 69.99,
            colorOptions: ["Silver"],
            quantity: 15,
            discount: 5,
             thumbnail: '/src/assets/products/earrings/ear7.webp',
            brandLogo:'/src/assets/products/brandLogo3.png'
          },
          {
            id: 38,
            category:'earrings',
            title: "Gold Diamond Stud Earrings",
            rating: 4.9,
            description: "Luxurious gold earrings with sparkling diamonds.",
            availability: "Low Stock",
            price: 399.99,
            colorOptions: ["Gold"],
            quantity: 4,
            discount: 12,
             thumbnail: '/src/assets/products/earrings/ear8.webp',
            brandLogo:'/src/assets/products/brandLogo2.png'
          },
          {
            id: 39,
            category:'earrings',
            title: "Silver Minimalist Earrings",
            rating: 1.4,
            description: "Sleek and modern silver minimalist earrings.",
            availability: "Low Stock",
            price: 59.99,
            colorOptions: ["Silver"],
            quantity: 18,
            discount: 0,
            thumbnail: '/src/assets/products/earrings/ear9.webp',
            brandLogo:'/src/assets/products/brandLogo1.png'
          },
          {
            id: 40,
            category:'earrings',
            title: "Gold Threader Earrings",
            rating: 4.5,
            description: "Trendy gold threader earrings for a unique look.",
            availability: "Low Stock",
            price: 99.99,
            colorOptions: ["Gold"],
            quantity: 12,
            discount: 10,
            thumbnail: '/src/assets/products/earrings/ear10.webp',
            brandLogo:'/src/assets/products/brandLogo2.png'
          },
          {
            id: 41,
            category:'anklets',
            title: "Classic Gold Chain Anklet",
            rating: 4.6,
            description: "A timeless gold chain anklet for a subtle touch of elegance.",
            availability: "Low Stock",
            price: 69.99,
            colorOptions: ["Gold"],
            quantity: 15,
            discount: 10,
            thumbnail: "https://example.com/images/gold-chain-anklet.jpg"
          },
          {
            id: 42,
            category:'anklets',
            title: "Silver Beaded Anklet",
            rating: 4.7,
            description: "A delicate silver anklet with tiny beads for a boho look.",
            availability: "Low Stock",
            price: 49.99,
            colorOptions: ["Silver"],
            quantity: 20,
            discount: 5,
            thumbnail: "https://example.com/images/silver-beaded-anklet.jpg"
          },
          {
            id: 43,
            category:'anklets',
            title: "Gold and Silver Adjustable Anklet",
            rating: 2.8,
            description: "A stylish anklet combining gold and silver with an adjustable fit.",
            availability: "Low Stock",
            price: 89.99,
            colorOptions: ["Gold", "Silver"],
            quantity: 10,
            discount: 15,
            thumbnail: "https://example.com/images/gold-silver-anklet.jpg"
          },
          {
            id: 44,
            category:'anklets',
            title: "Rose Gold Charm Anklet",
            rating: 4.9,
            description: "A dainty rose gold anklet with a small charm for added flair.",
            availability: "Out of Stock",
            price: 79.99,
            colorOptions: ["Gold"],
            quantity: 0,
            discount: 0,
            thumbnail: "https://example.com/images/rose-gold-charm-anklet.jpg"
          },
          {
            id: 45,
            category:'anklets',
            title: "Silver Shell Anklet",
            rating: 4.5,
            description: "A beach-inspired silver anklet with a tiny shell charm.",
            availability: "Low Stock",
            price: 59.99,
            colorOptions: ["Silver"],
            quantity: 12,
            discount: 10,
            thumbnail: "https://example.com/images/silver-shell-anklet.jpg"
          },
          {
            id: 46,
            category:'anklets',
            title: "Gold Pearl Anklet",
            rating: 3.7,
            description: "A luxurious gold anklet with small pearl accents.",
            availability: "Low Stock",
            price: 99.99,
            colorOptions: ["Gold"],
            quantity: 8,
            discount: 20,
            thumbnail: "https://example.com/images/gold-pearl-anklet.jpg"
          },
          {
            id: 47,
            category:'anklets',
            title: "Silver Infinity Anklet",
            rating: 4.6,
            description: "A symbolic silver anklet featuring an infinity design.",
            availability: "Low Stock",
            price: 49.99,
            colorOptions: ["Silver"],
            quantity: 18,
            discount: 5,
            thumbnail: "https://example.com/images/silver-infinity-anklet.jpg"
          },
          {
            id: 48,
            category:'anklets',
            title: "Gold Anklet with Pendant",
            rating: 2.8,
            description: "A chic gold anklet with a small pendant for a personalized touch.",
            availability: "Low Stock",
            price: 109.99,
            colorOptions: ["Gold"],
            quantity: 6,
            discount: 12,
            thumbnail: "https://example.com/images/gold-pendant-anklet.jpg"
          },
          {
            id: 49,
            category:'anklets',
            title: "Silver Minimalist Anklet",
            rating: 4.4,
            description: "A sleek and simple silver anklet for everyday wear.",
            availability: "Low Stock",
            price: 39.99,
            colorOptions: ["Silver"],
            quantity: 25,
            discount: 0,
            thumbnail: "https://example.com/images/silver-minimalist-anklet.jpg"
          },
          {
            id: 50,
            category:'anklets',
            title: "Gold and Silver Braided Anklet",
            rating: 4.5,
            description: "A unique braided anklet combining gold and silver threads.",
            availability: "Low Stock",
            price: 79.99,
            colorOptions: ["Gold", "Silver"],
            quantity: 10,
            discount: 10,
            thumbnail: "https://example.com/images/gold-silver-braided-anklet.jpg"
          },
          {
            id: 51,
            category:'armlets',
            title: "Classic Gold Armlet",
            rating: 1.6,
            description: "A timeless gold armlet for a touch of elegance.",
            availability: "Low Stock",
            price: 129.99,
            colorOptions: ["Gold"],
            quantity: 10,
            discount: 10,
            thumbnail: "https://example.com/images/gold-armlet.jpg"
          },
          {
            id: 52,
            category:'armlets',
            title: "Silver Beaded Armlet",
            rating: 4.7,
            description: "A delicate silver armlet with intricate beadwork.",
            availability: "Low Stock",
            price: 89.99,
            colorOptions: ["Silver"],
            quantity: 15,
            discount: 5,
            thumbnail: "https://example.com/images/silver-beaded-armlet.jpg"
          },
          {
            id: 53,
            category:'armlets',
            title: "Gold and Silver Cuff Armlet",
            rating: 4.8,
            description: "A bold cuff armlet combining gold and silver.",
            availability: "Low Stock",
            price: 199.99,
            colorOptions: ["Gold", "Silver"],
            quantity: 8,
            discount: 15,
            thumbnail: "https://example.com/images/gold-silver-cuff-armlet.jpg"
          },
          {
            id: 54,
            category:'armlets',
            title: "Rose Gold Chain Armlet",
            rating: 2.9,
            description: "A dainty rose gold chain armlet for a subtle look.",
            availability: "Out of Stock",
            price: 109.99,
            colorOptions: ["Gold"],
            quantity: 0,
            discount: 0,
            thumbnail: "https://example.com/images/rose-gold-chain-armlet.jpg"
          },
          {
            id: 55,
            category:'armlets',
            title: "Silver Gemstone Armlet",
            rating: 4.5,
            description: "A stunning silver armlet with a vibrant gemstone accent.",
            availability: "Low Stock",
            price: 149.99,
            colorOptions: ["Silver"],
            quantity: 12,
            discount: 10,
            thumbnail: "https://example.com/images/silver-gemstone-armlet.jpg"
          },
          {
            id: 56,
            category:'armlets',
            title: "Gold Filigree Armlet",
            rating: 4.7,
            description: "An intricately designed gold armlet with filigree details.",
            availability: "Low Stock",
            price: 249.99,
            colorOptions: ["Gold"],
            quantity: 5,
            discount: 20,
            thumbnail: "https://example.com/images/gold-filigree-armlet.jpg"
          },
          {
            id: 57,
            category:'armlets',
            title: "Silver Moon and Star Armlet",
            rating: 3.6,
            description: "A mystical silver armlet featuring moon and star designs.",
            availability: "Low Stock",
            price: 99.99,
            colorOptions: ["Silver"],
            quantity: 18,
            discount: 5,
            thumbnail: "https://example.com/images/silver-moon-star-armlet.jpg"
          },
          {
            id: 58,
            category:'armlets',
            title: "Gold Armlet with Pendant",
            rating: 4.8,
            description: "A chic gold armlet with a small pendant for added charm.",
            availability: "In Stock",
            price: 179.99,
            colorOptions: ["Gold"],
            quantity: 7,
            discount: 12,
            thumbnail: "https://example.com/images/gold-pendant-armlet.jpg"
          },
          {
            id: 59,
            category:'armlets',
            title: "Silver Minimalist Armlet",
            rating: 2.4,
            description: "A sleek and simple silver armlet for everyday wear.",
            availability: "In Stock",
            price: 69.99,
            colorOptions: ["Silver"],
            quantity: 20,
            discount: 0,
            thumbnail: "https://example.com/images/silver-minimalist-armlet.jpg"
          },
          {
            id: 60,
            category:'armlets',
            title: "Gold and Silver Braided Armlet",
            rating: 1.5,
            description: "A unique braided armlet combining gold and silver threads.",
            availability: "Low Stock",
            price: 139.99,
            colorOptions: ["Gold", "Silver"],
            quantity: 10,
            discount: 10,
            thumbnail: "https://example.com/images/gold-silver-braided-armlet.jpg"
          }
      ];
      
 const [preview, setpreview] = useState(false);
 const [productDetails, setproductDetails] = useState({});
 function handlePreview(ans){
  setproductDetails(ans)
    setpreview(true)
 }
  return (
    <ProductContext.Provider value={{products,setpreview,preview,handlePreview,productDetails}}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState
