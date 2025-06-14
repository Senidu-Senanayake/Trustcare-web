import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, TrendingUp, Star } from 'lucide-react';
import { mockCategories, mockProducts } from '../data/mockProducts';

const CategoriesPage: React.FC = () => {
  const getCategoryStats = (categoryId: string) => {
    const categoryProducts = mockProducts.filter(product => product.category.id === categoryId);
    const totalProducts = categoryProducts.length;
    const avgRating = categoryProducts.reduce((sum, product) => sum + product.rating, 0) / totalProducts;
    const inStockCount = categoryProducts.filter(product => product.inStock).length;
    
    return {
      totalProducts,
      avgRating: avgRating || 0,
      inStockCount
    };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Shop by Category
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our carefully curated collection of health-focused products, 
              organized by category to help you find exactly what you need for your wellness journey.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockCategories.map((category) => {
            const stats = getCategoryStats(category.id);
            
            return (
              <div
                key={category.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  {/* Category Image */}
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                      {stats.totalProducts} Products
                    </span>
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900">
                        {stats.avgRating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {category.name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Package className="h-6 w-6 text-emerald-600" />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
                      <p className="text-xs text-gray-600">Products</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <TrendingUp className="h-6 w-6 text-blue-600" />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{stats.inStockCount}</p>
                      <p className="text-xs text-gray-600">In Stock</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Star className="h-6 w-6 text-yellow-600" />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{stats.avgRating.toFixed(1)}</p>
                      <p className="text-xs text-gray-600">Avg Rating</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/products?category=${category.id}`}
                    className="group/btn w-full bg-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Explore {category.name}</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Categories Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Categories?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each category is carefully curated by our nutrition experts to ensure you get the highest quality products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Package className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Curated</h3>
              <p className="text-gray-600">
                Every product is hand-picked by our team of nutrition experts and health professionals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                We source only the finest ingredients and products that meet our strict quality standards
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Always Fresh</h3>
              <p className="text-gray-600">
                Our efficient supply chain ensures you receive the freshest products with optimal shelf life
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Wellness Journey?</h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Browse our complete collection of health-focused products and find everything you need for a healthier lifestyle
          </p>
          <Link
            to="/products"
            className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            Shop All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;