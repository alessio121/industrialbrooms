import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { getAllBlogPosts } from '../data/blogPosts';
import { useTranslation } from '../hooks/useTranslation';

const Blog = () => {
  const { t, currentLanguage } = useTranslation();
  const posts = getAllBlogPosts(currentLanguage);

  const getDateLocale = () => {
    const locales: Record<string, string> = {
      it: 'it-IT',
      en: 'en-US',
      fr: 'fr-FR',
      es: 'es-ES',
      de: 'de-DE'
    };
    return locales[currentLanguage] || 'it-IT';
  };

  React.useEffect(() => {
    document.title = 'Blog - Industrial Brooms';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.blogSubtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString(getDateLocale(), {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>

                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
                >
                  {t.readArticle}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;
