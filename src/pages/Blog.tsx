
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BlogCard, BlogPost } from "@/components/BlogCard";
import { GridBackground } from "@/components/ui/aceternity/grid-background";
import { LampContainer } from "@/components/ui/aceternity/lamp";
import { Sparkles } from "@/components/ui/aceternity/sparkles";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

const blogPosts = [
  {
    id: 1,
    title: "Building My First React Native App",
    summary: "Journey through mobile development challenges and lessons learned while creating my first cross-platform application.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React Native", "Mobile Development", "JavaScript"],
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
    content: "Full blog post content would go here..."
  },
  {
    id: 2,
    title: "Mastering TypeScript: From Beginner to Advanced",
    summary: "A comprehensive guide covering TypeScript fundamentals, advanced patterns, and real-world applications.",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["TypeScript", "JavaScript", "Development"],
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
    content: "Full blog post content would go here..."
  },
  {
    id: 3,
    title: "Database Design Patterns That Changed My Perspective",
    summary: "Exploring advanced database design patterns and their impact on application performance and scalability.",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["Database", "SQL", "Architecture"],
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop",
    content: "Full blog post content would go here..."
  },
  {
    id: 4,
    title: "The Art of Code Reviews: Best Practices",
    summary: "How effective code reviews can improve team collaboration and code quality in any development environment.",
    date: "2023-12-28",
    readTime: "6 min read",
    tags: ["Code Review", "Team Work", "Best Practices"],
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop",
    content: "Full blog post content would go here..."
  },
  {
    id: 5,
    title: "Understanding Web Performance Optimization",
    summary: "Deep dive into web performance optimization techniques to make your applications blazing fast.",
    date: "2023-12-20",
    readTime: "9 min read",
    tags: ["Performance", "Web Development", "Optimization"],
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
    content: "Full blog post content would go here..."
  },
  {
    id: 6,
    title: "Server-Side Rendering vs. Static Site Generation",
    summary: "Comparing different rendering strategies for modern web applications and when to use each approach.",
    date: "2023-12-15",
    readTime: "7 min read",
    tags: ["SSR", "SSG", "Web Development"],
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop",
    content: "Full blog post content would go here..."
  },
  {
    id: 7,
    title: "Building Accessible Web Applications",
    summary: "Best practices and techniques for making your web applications accessible to everyone.",
    date: "2023-12-10",
    readTime: "11 min read",
    tags: ["Accessibility", "Web Development", "UI/UX"],
    thumbnail: "https://images.unsplash.com/photo-1503437313881-503a91226402?w=400&h=200&fit=crop",
    content: "Full blog post content would go here..."
  },
  {
    id: 8,
    title: "Introduction to WebAssembly",
    summary: "Exploring how WebAssembly is changing the landscape of web application performance and capabilities.",
    date: "2023-12-05",
    readTime: "10 min read",
    tags: ["WebAssembly", "Performance", "JavaScript"],
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop",
    content: "Full blog post content would go here..."
  },
  {
    id: 9,
    title: "Progressive Web Apps: The Future of Web Development",
    summary: "How PWAs are changing the way we build and experience web applications.",
    date: "2023-11-28",
    readTime: "9 min read",
    tags: ["PWA", "Web Development", "Frontend"],
    thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=200&fit=crop",
    content: "Full blog post content would go here..."
  },
  {
    id: 10,
    title: "Effective State Management in React",
    summary: "A comparison of different state management approaches in React applications.",
    date: "2023-11-20",
    readTime: "8 min read",
    tags: ["React", "State Management", "Frontend"],
    thumbnail: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=200&fit=crop",
    content: "Full blog post content would go here..."
  }
];

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

const Blog = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 6;

  const filteredPosts = blogPosts.filter(post => 
    selectedTags.length === 0 || 
    selectedTags.some(tag => post.tags.includes(tag))
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE, 
    currentPage * POSTS_PER_PAGE
  );

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          {/* Blog Header */}
          <section className="relative py-20">
            <GridBackground 
              className="absolute inset-0" 
              dotColor="rgba(var(--primary-rgb), 0.15)"
              dotSpacing={24}
              dotSize={1}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background to-background"></div>
            </GridBackground>
            
            <LampContainer>
              <div className="relative z-10 text-center">
                <Sparkles>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">My Blog</h1>
                </Sparkles>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Insights, tutorials, and stories from my development journey
                </p>
              </div>
            </LampContainer>
          </section>

          {/* Filters */}
          <section className="py-8 bg-muted/30">
            <div className="container px-4">
              <div className="mb-8 space-y-4">
                <h2 className="text-2xl font-bold text-center mb-4">Filter by Topics</h2>
                <div className="flex flex-wrap gap-2 justify-center">
                  {allTags.map(tag => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      className="cursor-pointer transition-all hover:scale-105"
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                {selectedTags.length > 0 && (
                  <div className="text-center">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => {
                        setSelectedTags([]);
                        setCurrentPage(1);
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Blog Grid */}
          <section className="py-12">
            <div className="container px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {/* No Results */}
              {paginatedPosts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-medium mb-2">No blog posts found</h3>
                  <p className="text-muted-foreground">Try adjusting your filter criteria</p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                      
                      {Array.from({ length: totalPages }).map((_, idx) => (
                        <PaginationItem key={idx}>
                          <PaginationLink 
                            isActive={currentPage === idx + 1}
                            onClick={() => handlePageChange(idx + 1)}
                          >
                            {idx + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                          className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Blog;
