import { motion } from 'framer-motion';
import { Calendar, User, Tag } from 'lucide-react';

// Define the type for a blog post
interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    title: 'Mastering Hebrew Verb Forms: A Complete Guide',
    excerpt: 'Understanding Hebrew verb forms is crucial for language mastery. In this guide, we break down the different forms and their usage...',
    author: 'Dr. Sarah Cohen',
    date: '2024-03-20',
    category: 'Grammar',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Modern Hebrew Slang: Speak Like a Local',
    excerpt: 'Stay up-to-date with the latest Hebrew slang and colloquialisms used in everyday conversations in Israel...',
    author: 'Maya Shapiro',
    date: '2024-03-18',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

// BlogPage component
export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header section with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">Hebrew Learning Blog</h1>
          <p className="mt-4 text-xl text-gray-600">
            Tips, insights, and resources for Hebrew language learners
          </p>
        </motion.div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  Read more →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}