import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import { getBlogPost, getAllBlogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;
  const allPosts = getAllBlogPosts();

  React.useEffect(() => {
    if (post) {
      document.title = `${post.title} - Industrial Brooms`;

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.description);
      }

      // Update meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', post.keywords.join(', '));
      }

      // Add Article schema
      const existingSchema = document.getElementById('article-schema');
      if (existingSchema) {
        existingSchema.remove();
      }

      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.description,
        "image": `https://industrialbrooms.com${post.image}`,
        "datePublished": post.date,
        "author": {
          "@type": "Organization",
          "name": "Industrial Brooms"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Industrial Brooms",
          "logo": {
            "@type": "ImageObject",
            "url": "https://industrialbrooms.com/logo.png"
          }
        }
      };

      const script = document.createElement('script');
      script.id = 'article-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(articleSchema);
      document.head.appendChild(script);

      window.scrollTo(0, 0);

      return () => {
        const script = document.getElementById('article-schema');
        if (script) {
          script.remove();
        }
      };
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (excluding current)
  const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 2);

  // Convert markdown-like content to HTML
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{line.replace('## ', '')}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">{line.replace('### ', '')}</h3>;
        }
        // Bold text
        if (line.startsWith('**') && line.endsWith('**')) {
          return <p key={index} className="font-bold text-gray-900 mt-4 mb-2">{line.replace(/\*\*/g, '')}</p>;
        }
        // List items
        if (line.startsWith('- ')) {
          return (
            <li key={index} className="text-gray-700 ml-4 mb-1 flex items-start">
              <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>{line.replace('- ', '')}</span>
            </li>
          );
        }
        // Table (simplified)
        if (line.startsWith('|') && !line.includes('---')) {
          const cells = line.split('|').filter(c => c.trim());
          return (
            <div key={index} className="grid grid-cols-4 gap-2 py-2 border-b border-gray-200">
              {cells.map((cell, i) => (
                <span key={i} className="text-sm text-gray-700">{cell.trim()}</span>
              ))}
            </div>
          );
        }
        // Skip table separator
        if (line.includes('---')) {
          return null;
        }
        // Regular paragraph
        if (line.trim()) {
          return <p key={index} className="text-gray-700 leading-relaxed mb-4">{line}</p>;
        }
        return null;
      })
      .filter(Boolean);
  };

  return (
    <main className="py-12 bg-white min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Torna al Blog
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('it-IT', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            {post.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {post.keywords.map((keyword) => (
              <span
                key={keyword}
                className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                <Tag className="h-3 w-3 mr-1" />
                {keyword}
              </span>
            ))}
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {formatContent(post.content)}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-red-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Hai bisogno di una consulenza?</h3>
          <p className="mb-6 text-red-100">
            Contattaci per scoprire quale soluzione è più adatta alle tue esigenze.
          </p>
          <Link
            to="/#contact"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contattaci
          </Link>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Articoli correlati</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {relatedPost.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
};

export default BlogPost;
