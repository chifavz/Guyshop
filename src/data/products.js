export const products = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: 89.99,
    description: "A timeless denim jacket perfect for layering. Made from premium cotton denim with a comfortable fit.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%234A90E2'/%3E%3Ctext x='200' y='180' text-anchor='middle' fill='white' font-size='24' font-family='Arial'%3EDenim%3C/text%3E%3Ctext x='200' y='220' text-anchor='middle' fill='white' font-size='24' font-family='Arial'%3EJacket%3C/text%3E%3C/svg%3E",
    category: "Jackets",
    reviews: [
      {
        id: 1,
        author: "Mike Johnson",
        rating: 5,
        comment: "Great quality jacket! Fits perfectly and the material is excellent.",
        date: "2024-01-15"
      },
      {
        id: 2,
        author: "David Smith",
        rating: 4,
        comment: "Nice jacket, good value for money. Sizing runs a bit large.",
        date: "2024-01-10"
      }
    ]
  },
  {
    id: 2,
    name: "Oxford Button-Down Shirt",
    price: 49.99,
    description: "Classic oxford shirt in crisp white. Perfect for office or casual wear. 100% cotton construction.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%2350C878'/%3E%3Ctext x='200' y='180' text-anchor='middle' fill='white' font-size='24' font-family='Arial'%3EOxford%3C/text%3E%3Ctext x='200' y='220' text-anchor='middle' fill='white' font-size='24' font-family='Arial'%3EShirt%3C/text%3E%3C/svg%3E",
    category: "Shirts",
    reviews: [
      {
        id: 3,
        author: "James Wilson",
        rating: 5,
        comment: "Excellent shirt! Well-made and comfortable. Will definitely buy more.",
        date: "2024-01-20"
      }
    ]
  },
  {
    id: 3,
    name: "Leather Chelsea Boots",
    price: 159.99,
    description: "Premium leather Chelsea boots with elastic side panels. Comfortable and stylish for any occasion.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23B4621B'/%3E%3Ctext x='200' y='180' text-anchor='middle' fill='white' font-size='24' font-family='Arial'%3EChelsea%3C/text%3E%3Ctext x='200' y='220' text-anchor='middle' fill='white' font-size='24' font-family='Arial'%3EBoots%3C/text%3E%3C/svg%3E",
    category: "Shoes",
    reviews: [
      {
        id: 4,
        author: "Robert Brown",
        rating: 4,
        comment: "Great boots! Quality leather and comfortable. Took a few days to break in.",
        date: "2024-01-18"
      },
      {
        id: 5,
        author: "Alex Garcia",
        rating: 5,
        comment: "Love these boots! Perfect fit and great style. Highly recommended.",
        date: "2024-01-12"
      }
    ]
  },
  {
    id: 4,
    name: "Merino Wool Sweater",
    price: 79.99,
    description: "Soft merino wool sweater in charcoal gray. Lightweight yet warm, perfect for layering.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23757575'/%3E%3Ctext x='200' y='180' text-anchor='middle' fill='white' font-size='24' font-family='Arial'%3EMerino%3C/text%3E%3Ctext x='200' y='220' text-anchor='middle' fill='white' font-size='24' font-family='Arial'%3ESweater%3C/text%3E%3C/svg%3E",
    category: "Sweaters",
    reviews: []
  }
];

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getAverageRating = (reviews) => {
  if (!reviews || reviews.length === 0) return 0;
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return (total / reviews.length).toFixed(1);
};