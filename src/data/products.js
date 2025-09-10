// Import product images
import denimJacketImage from "../images/classic-denim-jacket.svg";
import oxfordShirtImage from "../images/oxford-button-down-shirt.svg";
import chelseaBootsImage from "../images/leather-chelsea-boots.svg";
import merinoSweaterImage from "../images/merino-wool-sweater.svg";

export const products = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: 89.99,
    description: "A timeless denim jacket perfect for layering. Made from premium cotton denim with a comfortable fit.",
    image: denimJacketImage,
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
    image: oxfordShirtImage,
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
    image: chelseaBootsImage,
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
    image: merinoSweaterImage,
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