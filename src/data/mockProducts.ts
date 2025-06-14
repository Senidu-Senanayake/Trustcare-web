import type { Product, ProductCategory } from '../types';

export const mockCategories: ProductCategory[] = [
  {
    id: 'cat_1',
    name: 'Organic Beverages',
    slug: 'organic-beverages',
    description: 'Natural and organic drinks for a healthy lifestyle',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'cat_2',
    name: 'Superfoods',
    slug: 'superfoods',
    description: 'Nutrient-dense foods packed with vitamins and minerals',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'cat_3',
    name: 'Protein & Supplements',
    slug: 'protein-supplements',
    description: 'High-quality protein powders and health supplements',
    image: 'https://images.pexels.com/photos/4162481/pexels-photo-4162481.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'cat_4',
    name: 'Healthy Snacks',
    slug: 'healthy-snacks',
    description: 'Nutritious snacks for energy and wellness',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const mockProducts: Product[] = [
  {
    id: 'prod_1',
    name: 'Organic Green Smoothie Blend',
    description: 'A powerful blend of organic spinach, kale, apple, and banana. Packed with vitamins A, C, and K, plus iron and folate. Perfect for a morning energy boost or post-workout recovery. Made with certified organic ingredients and no artificial additives.',
    shortDescription: 'Organic green smoothie with spinach, kale, apple, and banana',
    price: 12.99,
    originalPrice: 15.99,
    category: mockCategories[0],
    subcategory: 'Smoothies',
    images: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    inStock: true,
    stockQuantity: 85,
    lowStockThreshold: 20,
    nutritionFacts: {
      servingSize: '250ml',
      calories: 120,
      fat: 0.5,
      saturatedFat: 0.1,
      cholesterol: 0,
      sodium: 15,
      carbohydrates: 28,
      fiber: 4,
      sugars: 22,
      protein: 2,
      vitamins: {
        'Vitamin A': 120,
        'Vitamin C': 85,
        'Vitamin K': 180,
        'Iron': 15,
        'Folate': 25
      }
    },
    ingredients: ['Organic Spinach', 'Organic Kale', 'Organic Apple Juice', 'Organic Banana', 'Organic Lemon Juice'],
    allergens: [],
    certifications: ['USDA Organic', 'Non-GMO', 'Vegan'],
    rating: 4.8,
    reviewCount: 156,
    tags: ['organic', 'green', 'smoothie', 'healthy', 'vegan'],
    featured: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-12-10')
  },
  {
    id: 'prod_2',
    name: 'Premium Whey Protein Powder',
    description: 'High-quality whey protein isolate with 25g of protein per serving. Supports muscle growth and recovery. Available in vanilla, chocolate, and strawberry flavors. Third-party tested for purity and potency.',
    shortDescription: 'Premium whey protein isolate - 25g protein per serving',
    price: 49.99,
    category: mockCategories[2],
    subcategory: 'Protein Powders',
    images: [
      'https://images.pexels.com/photos/4162481/pexels-photo-4162481.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    inStock: true,
    stockQuantity: 42,
    lowStockThreshold: 15,
    nutritionFacts: {
      servingSize: '30g',
      calories: 120,
      fat: 1,
      saturatedFat: 0.5,
      cholesterol: 5,
      sodium: 50,
      carbohydrates: 2,
      fiber: 0,
      sugars: 1,
      protein: 25,
      vitamins: {}
    },
    ingredients: ['Whey Protein Isolate', 'Natural Flavors', 'Lecithin', 'Stevia Extract'],
    allergens: ['Milk', 'Soy'],
    certifications: ['Third-Party Tested', 'GMP Certified'],
    rating: 4.7,
    reviewCount: 89,
    tags: ['protein', 'whey', 'muscle', 'fitness', 'supplement'],
    featured: true,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-12-08')
  },
  {
    id: 'prod_3',
    name: 'Organic Chia Seed Energy Bars',
    description: 'Handcrafted energy bars made with organic chia seeds, dates, almonds, and coconut. Perfect for on-the-go nutrition. Rich in omega-3 fatty acids, fiber, and plant-based protein.',
    shortDescription: 'Organic chia seed energy bars with dates and almonds',
    price: 18.99,
    category: mockCategories[3],
    subcategory: 'Energy Bars',
    images: [
      'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    inStock: true,
    stockQuantity: 67,
    lowStockThreshold: 25,
    nutritionFacts: {
      servingSize: '40g',
      calories: 160,
      fat: 8,
      saturatedFat: 2,
      cholesterol: 0,
      sodium: 5,
      carbohydrates: 20,
      fiber: 6,
      sugars: 12,
      protein: 4,
      vitamins: {
        'Omega-3': 1200,
        'Calcium': 8,
        'Iron': 10
      }
    },
    ingredients: ['Organic Chia Seeds', 'Organic Dates', 'Organic Almonds', 'Organic Coconut', 'Sea Salt'],
    allergens: ['Tree Nuts'],
    certifications: ['USDA Organic', 'Gluten-Free', 'Vegan'],
    rating: 4.6,
    reviewCount: 234,
    tags: ['chia', 'energy', 'organic', 'bars', 'superfood'],
    featured: false,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-11-25')
  },
  {
    id: 'prod_4',
    name: 'Cold-Pressed Turmeric Ginger Shot',
    description: 'Immune-boosting wellness shot with organic turmeric, fresh ginger, lemon, and a hint of black pepper. Cold-pressed to preserve maximum nutrients and potency.',
    shortDescription: 'Cold-pressed turmeric and ginger wellness shot',
    price: 3.99,
    category: mockCategories[0],
    subcategory: 'Wellness Shots',
    images: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    inStock: true,
    stockQuantity: 156,
    lowStockThreshold: 30,
    nutritionFacts: {
      servingSize: '60ml',
      calories: 15,
      fat: 0,
      saturatedFat: 0,
      cholesterol: 0,
      sodium: 2,
      carbohydrates: 4,
      fiber: 0,
      sugars: 3,
      protein: 0,
      vitamins: {
        'Vitamin C': 15,
        'Curcumin': 500
      }
    },
    ingredients: ['Organic Turmeric Root', 'Fresh Ginger', 'Organic Lemon Juice', 'Black Pepper', 'Filtered Water'],
    allergens: [],
    certifications: ['USDA Organic', 'Cold-Pressed', 'Vegan'],
    rating: 4.9,
    reviewCount: 78,
    tags: ['turmeric', 'ginger', 'immunity', 'wellness', 'shot'],
    featured: true,
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-12-12')
  },
  {
    id: 'prod_5',
    name: 'Superfood Acai Bowl Mix',
    description: 'Premium acai powder blend with organic berries, coconut, and superfoods. Just add liquid for an instant antioxidant-rich breakfast bowl.',
    shortDescription: 'Premium acai bowl mix with organic berries and superfoods',
    price: 24.99,
    category: mockCategories[1],
    subcategory: 'Superfood Powders',
    images: [
      'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    inStock: true,
    stockQuantity: 29,
    lowStockThreshold: 15,
    nutritionFacts: {
      servingSize: '25g',
      calories: 90,
      fat: 3,
      saturatedFat: 1,
      cholesterol: 0,
      sodium: 5,
      carbohydrates: 15,
      fiber: 8,
      sugars: 4,
      protein: 2,
      vitamins: {
        'Vitamin A': 25,
        'Vitamin C': 30,
        'Antioxidants': 3500
      }
    },
    ingredients: ['Organic Acai Powder', 'Organic Blueberries', 'Organic Goji Berries', 'Organic Coconut', 'Organic Chia Seeds'],
    allergens: ['Tree Nuts'],
    certifications: ['USDA Organic', 'Freeze-Dried', 'Vegan'],
    rating: 4.5,
    reviewCount: 112,
    tags: ['acai', 'superfood', 'antioxidants', 'bowl', 'breakfast'],
    featured: false,
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-12-05')
  },
  {
    id: 'prod_6',
    name: 'Organic Kombucha - Ginger Lime',
    description: 'Probiotic-rich kombucha fermented with organic tea and natural ginger-lime flavor. Supports digestive health and provides beneficial probiotics.',
    shortDescription: 'Organic ginger lime kombucha with live probiotics',
    price: 4.99,
    category: mockCategories[0],
    subcategory: 'Kombucha',
    images: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    inStock: false,
    stockQuantity: 0,
    lowStockThreshold: 20,
    nutritionFacts: {
      servingSize: '480ml',
      calories: 35,
      fat: 0,
      saturatedFat: 0,
      cholesterol: 0,
      sodium: 10,
      carbohydrates: 8,
      fiber: 0,
      sugars: 6,
      protein: 0,
      vitamins: {
        'Probiotics': 1000000
      }
    },
    ingredients: ['Organic Green Tea', 'Organic Cane Sugar', 'Organic Ginger', 'Organic Lime', 'Live Cultures'],
    allergens: [],
    certifications: ['USDA Organic', 'Raw', 'Probiotic'],
    rating: 4.4,
    reviewCount: 67,
    tags: ['kombucha', 'probiotics', 'ginger', 'lime', 'fermented'],
    featured: false,
    createdAt: new Date('2024-01-30'),
    updatedAt: new Date('2024-12-14')
  }
];