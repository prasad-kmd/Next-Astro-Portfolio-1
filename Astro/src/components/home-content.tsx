import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ArrowRight, Code, ExternalLink, Layout, Layers, Zap, Smartphone, Search, Users } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import Link from "./link"

const skills = [
  { name: "React", icon: Code },
  { name: "Next.js", icon: Zap },
  { name: "TypeScript", icon: Code },
  { name: "Tailwind CSS", icon: Layout },
  { name: "Node.js", icon: Layers },
  { name: "PostgreSQL", icon: Layers },
  { name: "Astro", icon: Zap },
  { name: "Framer Motion", icon: Zap },
]

const projects = [
  {
    title: "Eco-Track Dashboard",
    description: "A real-time environmental monitoring dashboard with complex data visualizations.",
    tags: ["React", "D3.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Nova E-commerce",
    description: "High-performance headless e-commerce store with seamless transitions.",
    tags: ["Next.js", "Shopify", "Stripe"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Pulse Social App",
    description: "A minimal social platform focused on privacy and real-time interactions.",
    tags: ["TypeScript", "Socket.io", "Redis"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
  },
]

export function HomeContent() {
  return (
    <>
      {/* Skills Section */}
      <section className="py-24 px-6 bg-secondary/30 backdrop-blur-sm border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 uppercase">Tech Stack</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-background border border-border/50 rounded-2xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 cursor-default group"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-semibold">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">SELECTED PROJECTS</h2>
            <p className="text-muted-foreground">A curated selection of my favorite works.</p>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary/80 group">
            View all projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-all group">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button size="icon" variant="secondary" className="rounded-full"><FaGithub className="h-4 w-4" /></Button>
                    <Button size="icon" variant="secondary" className="rounded-full"><ExternalLink className="h-4 w-4" /></Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex gap-2 mb-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-[10px] font-bold uppercase tracking-wider">{tag}</Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlights / Tabs Section */}
      <section className="py-24 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="experience" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3 rounded-full h-12 p-1 bg-background/50 backdrop-blur-md border border-border/50">
                <TabsTrigger value="experience" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Experience</TabsTrigger>
                <TabsTrigger value="services" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Services</TabsTrigger>
                <TabsTrigger value="approach" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Approach</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="experience" className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
              <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>5+ Years of Industry Experience</CardTitle>
                  <CardDescription>From early-stage startups to established tech companies.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I've spent the last half-decade perfecting the art of building scalable, user-centric web applications. My focus has always been on combining clean code with exceptional design.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="space-y-1">
                      <p className="text-2xl font-bold">50+</p>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Projects Delivered</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Happy Clients</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="services" className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Frontend Dev", icon: Layout, desc: "Building responsive, accessible interfaces." },
                  { title: "Backend Systems", icon: Layers, desc: "Architecting robust API and databases." },
                  { title: "Mobile Apps", icon: Smartphone, desc: "Creating cross-platform mobile solutions." },
                  { title: "SEO Optimization", icon: Search, desc: "Ensuring maximum visibility and performance." },
                ].map(service => (
                  <Card key={service.title} className="bg-background/50 backdrop-blur-sm border-border/50">
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                      <service.icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{service.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="approach" className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
               <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>Human-Centered Design</CardTitle>
                  <CardDescription>My philosophy on building for the web.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-primary">01</span>
                      </div>
                      <p className="text-sm text-muted-foreground"><span className="text-foreground font-semibold">Discovery:</span> Deep diving into the problem and understanding user needs.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-primary">02</span>
                      </div>
                      <p className="text-sm text-muted-foreground"><span className="text-foreground font-semibold">Iteration:</span> Rapid prototyping and continuous refinement based on feedback.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-primary">03</span>
                      </div>
                      <p className="text-sm text-muted-foreground"><span className="text-foreground font-semibold">Delivery:</span> High-quality code with thorough testing and optimization.</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 md:gap-24">
          {[
            { label: "Coffee Consumed", value: "2.4k", icon: Zap },
            { label: "Lines of Code", value: "1.2m", icon: Code },
            { label: "Happy Users", value: "85k", icon: Users },
            { label: "Award Nominations", value: "14", icon: Layers },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center space-y-2">
              <p className="text-4xl md:text-5xl font-black text-primary">{stat.value}</p>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
