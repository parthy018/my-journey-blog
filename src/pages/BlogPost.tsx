
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/ui/aceternity/grid-background";
import { Sparkles } from "@/components/ui/aceternity/sparkles";
import { BlogPost as BlogPostType } from "@/components/BlogCard";
import { Link } from "react-router-dom";

// Mock blog post data - in a real app this would come from your backend
const blogPosts = [
  {
    id: 1,
    title: "Building My First React Native App",
    summary: "Journey through mobile development challenges and lessons learned while creating my first cross-platform application.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React Native", "Mobile Development", "JavaScript"],
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    content: `
      <h2>The Beginning of My React Native Journey</h2>
      <p>When I first started learning React Native, I was immediately drawn to the promise of building cross-platform mobile applications with JavaScript. Having spent years working with web technologies, the transition seemed like a natural progression in my development career.</p>
      
      <p>The initial setup was straightforward – I used Expo CLI to bootstrap my project, which saved me countless hours of configuration and environment setup. This allowed me to focus on what mattered most: learning the fundamentals of React Native and building my first app.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&fit=crop" alt="Coding on a laptop" class="rounded-lg shadow-md w-full" />
        <p class="text-sm text-muted-foreground mt-2 text-center">Late nights of coding and debugging became the norm</p>
      </div>
      
      <h2>Challenges Faced</h2>
      <p>The learning curve was steeper than I anticipated. While React Native shares the same fundamental principles as React, the mobile environment introduces unique challenges:</p>
      
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Layout differences between iOS and Android</li>
        <li>Performance optimization for mobile devices</li>
        <li>Native module integration</li>
        <li>Handling device-specific features</li>
      </ul>
      
      <p>One particular challenge was understanding the nuances of the Flexbox layout system in React Native. While similar to CSS Flexbox for the web, there are subtle differences that caused unexpected layout behaviors initially.</p>
      
      <div class="my-8">
        <div class="aspect-w-16 aspect-h-9">
          <iframe 
            src="https://www.youtube.com/embed/ur6I5m2nTvk?si=JiGOGF7JmPhLycSt" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            class="rounded-lg w-full h-[400px]"
          ></iframe>
        </div>
        <p class="text-sm text-muted-foreground mt-2 text-center">A helpful video that guided my learning process</p>
      </div>
      
      <h2>What I Learned</h2>
      <p>Throughout this journey, I gained valuable insights into mobile development:</p>
      
      <ol class="list-decimal pl-6 my-4 space-y-2">
        <li>The importance of thoroughly testing on both iOS and Android</li>
        <li>How to effectively use React Native's component lifecycle</li>
        <li>Techniques for optimizing performance in React Native apps</li>
        <li>The value of the React Native community and ecosystem</li>
      </ol>
      
      <blockquote class="border-l-4 border-primary pl-4 italic my-6">
        "The most valuable skill isn't knowing all the answers, but knowing how to find them."
      </blockquote>
      
      <h2>The Final Product</h2>
      <p>After weeks of learning, coding, and troubleshooting, my first React Native app was complete. It was a simple task management application with cloud synchronization, but it represented a significant milestone in my development journey.</p>
      
      <p>The app featured:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>User authentication</li>
        <li>Real-time data synchronization</li>
        <li>Offline functionality</li>
        <li>Custom animations and transitions</li>
      </ul>
      
      <h2>Next Steps</h2>
      <p>Building my first React Native app was just the beginning. Moving forward, I plan to:</p>
      
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Explore more advanced React Native concepts</li>
        <li>Learn about native module development</li>
        <li>Contribute to open-source React Native projects</li>
        <li>Build more complex applications with sophisticated UIs</li>
      </ul>
      
      <p>If you're considering diving into React Native development, I highly recommend it. The ecosystem is mature, the community is helpful, and the skills you'll gain are incredibly valuable in today's mobile-centric world.</p>
    `
  },
  {
    id: 2,
    title: "Mastering TypeScript: From Beginner to Advanced",
    summary: "A comprehensive guide covering TypeScript fundamentals, advanced patterns, and real-world applications.",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["TypeScript", "JavaScript", "Development"],
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    content: "Full TypeScript tutorial content would go here..."
  },
  // ... more blog posts
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch the post from your backend
    const fetchPost = () => {
      setLoading(true);
      const foundPost = blogPosts.find(p => p.id === Number(id));
      
      if (foundPost) {
        setPost(foundPost);
      }
      
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          {loading ? (
            <div className="flex justify-center items-center h-[60vh]">
              <div className="animate-pulse">Loading...</div>
            </div>
          ) : post ? (
            <>
              {/* Hero Section */}
              <section className="relative py-16 md:py-24 bg-background">
                <GridBackground 
                  className="absolute inset-0" 
                  dotColor="rgba(var(--primary-rgb), 0.15)"
                  dotSpacing={24}
                  dotSize={1}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background to-background"></div>
                </GridBackground>

                <div className="container px-4 relative z-10">
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Sparkles>
                      <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
                    </Sparkles>
                    
                    <div className="flex items-center justify-center text-muted-foreground mb-8">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span className="mx-2">·</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <div className="w-full aspect-video overflow-hidden rounded-lg mb-10">
                      <img 
                        src={post.thumbnail} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Blog Content */}
              <section className="py-12">
                <div className="container px-4">
                  <article className="max-w-3xl mx-auto prose dark:prose-invert prose-headings:text-foreground prose-a:text-primary">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </article>
                  
                  <div className="max-w-3xl mx-auto mt-16 border-t border-border pt-8">
                    <h3 className="text-2xl font-bold mb-6">Continue Reading</h3>
                    <div className="flex flex-wrap gap-4 justify-between">
                      <Button asChild variant="outline">
                        <Link to="/#blog">Back to All Posts</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <div className="container px-4 py-20 text-center">
              <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
              <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
              <Button asChild>
                <Link to="/#blog">Back to All Posts</Link>
              </Button>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default BlogPost;
