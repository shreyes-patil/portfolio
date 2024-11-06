'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { ArrowDownCircle, Linkedin, Github, Mail, FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import Link from 'next/link'


interface SectionWrapperProps {
  children: React.ReactNode
  id: string
}

const SectionWrapper = ({ children, id }: SectionWrapperProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20"
      id={id}
    >
      {children}
    </motion.section>
  )
}

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('hero')
  const [projectFilter, setProjectFilter] = useState<'mobile' | 'web'>('mobile') // State to filter projects
  const [hovered, setHovered] = useState(false)
  const scrollContainerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  })

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const opacity = useTransform(smoothScrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact']

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  type Project = {
    title: string
    description: string
    imageSrc: string
    liveLink: string
    githubLink: string
  }
  const projects: { mobile: Project[]; web: Project[] } = {
    mobile: [
      {
        title: "Flash",
        description: "iOS photo editing app with real-time filters.",
        imageSrc: "/flash.png",
        liveLink: "#",
        githubLink: "https://github.com/example/flash"
      },
      {
        title: "AIPantry",
        description: "Pantry management app with offline and real-time sync.",
        imageSrc: "/aipanry.png",
        liveLink: "#",
        githubLink: "https://github.com/example/aipanry"
      },
      {
        title: "ApplyMore",
        description: "Job application tracking app with CSV export.",
        imageSrc: "/applymore.png",
        liveLink: "#",
        githubLink: "https://github.com/example/applymore"
      },
      {
        title: "Digital Music Management",
        description: "Music management app with CRUD functionality.",
        imageSrc: "/digitalmusic.png",
        liveLink: "#",
        githubLink: "https://github.com/example/digitalmusic"
      }
    ],
    web: [
      {
        title: "Chef2go",
        description: "Recipe app for cooking with local ingredients.",
        imageSrc: "/chef2go.png",
        liveLink: "#",
        githubLink: "https://github.com/info-6150-fall-2023/final-project-peri-peri"
      },
      {
        title: "AIFlash",
        description: "AI-powered flashcard generator from user input.",
        imageSrc: "/aiflash.png",
        liveLink: "#",
        githubLink: "https://github.com/example/aiflash"
      },
      {
        title: "AIPantry",
        description: "Pantry management web app with Firebase backend.",
        imageSrc: "/aipanry-web.png",
        liveLink: "#",
        githubLink: "https://github.com/example/aipanry-web"
      }
    ]
  
  }
  return (
    <div ref={scrollContainerRef} className="min-h-screen bg-gradient-to-br from-teal-500 via-blue-500 to-indigo-600 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-10 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-4">
            {['hero', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <Button
                  variant="ghost"
                  className={`text-white hover:text-teal-200 transition-colors ${activeSection === section ? 'border-b-2 border-white' : ''}`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-20">
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-teal-300 z-50" style={{ scaleX: scrollYProgress }} />

        <SectionWrapper id="hero">
          <div className="min-h-screen flex flex-col justify-center items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              onMouseEnter={() => setHovered(true)} // Start particle effect
              onMouseLeave={() => setHovered(false)} // End particle effect
              className="relative w-[220px] h-[220px] rounded-full bg-gradient-to-tr from-blue-500 via-teal-400 to-indigo-500 p-[4px] shadow-2xl flex items-center justify-center cursor-pointer glow-border"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
              <Image
      src="/image1.png"
      alt="Shreyas Hanamantgouda Patil"
      width={200}
      height={200}
      className="rounded-full"
    />
  </div>
  
  {/* Floating Particles */}
  <div className="absolute inset-0 w-[250px] h-[250px] -z-10 pointer-events-none flex justify-center items-center">
    {Array.from({ length: 21 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-float"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${2 + Math.random() * 3}s`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
  </div>
</motion.div>
<style jsx>{`
  .glow-border {
    animation: glow 3s ease-in-out infinite;
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 10px 4px rgba(0, 200, 255, 0.5), 0 0 20px 10px rgba(0, 200, 255, 0.3);
    }
    50% {
      box-shadow: 0 0 20px 8px rgba(0, 200, 255, 0.7), 0 0 30px 15px rgba(0, 200, 255, 0.5);
    }
  }

  .animate-float {
    position: absolute;
    animation: floatUpDown linear infinite;
  }

  @keyframes floatUpDown {
    0% { transform: translateY(0); opacity: 0.8; }
    50% { transform: translateY(-8px); opacity: 0.5; }
    100% { transform: translateY(0); opacity: 0.8; }
  }
`}</style>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-8 mt-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Shreyas Patil</h1>
              <h2 className="text-2xl md:text-3xl mb-8">iOS Developer & AI Full-Stack Developer</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="https://www.linkedin.com/in/shreyaspatil" target="_blank" aria-label="LinkedIn Profile">
                  <Button variant="outline" size="icon" className="bg-white text-blue-600 hover:text-blue-500 transition-colors duration-200">
                    <Linkedin />
                  </Button>
                </Link>
                <Link href="https://github.com/shreyaspatil" target="_blank" aria-label="GitHub Profile">
                  <Button variant="outline" size="icon" className="bg-white text-blue-600 hover:text-blue-500 transition-colors duration-200">
                    <Github />
                  </Button>
                </Link>
                <Link href="mailto:shreyas.patil@example.com" aria-label="Email">
                  <Button variant="outline" size="icon" className="bg-white text-blue-600 hover:text-blue-500 transition-colors duration-200">
                    <Mail />
                  </Button>
                </Link>
                <Link href="/path-to-resume.pdf" download aria-label="Download Resume">
                  <Button variant="outline" className="bg-white text-blue-600 hover:text-blue-500 transition-colors duration-200">
                    <FileText className="mr-2" />
                    Download Resume
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div style={{ opacity }} className="absolute bottom-8">
              <Button
                variant="ghost"
                size="icon"
                className="animate-bounce"
                onClick={() => scrollToSection('about')}
                aria-label="Scroll to About section"
              >
                <ArrowDownCircle size={80} />
              </Button>
            </motion.div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="about">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <Card className="bg-white bg-opacity-10 backdrop-blur-md">
            <CardContent className="p-6 md:p-8">
              <p className="text-base md:text-lg leading-relaxed">
                I am a passionate iOS and AI Full-Stack Developer dedicated to creating innovative and user-friendly applications.
              </p>
            </CardContent>
          </Card>
        </SectionWrapper>

        <SectionWrapper id="experience">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: "Software Engineering Fellow",
                company: "Headstarter AI",
                date: "July 2024 - Present",
                responsibilities: [
                  "Developed and maintained responsive, user-friendly web applications using React, Next.js, and Tailwind CSS.",
                  "Collaborated with cross-functional teams to deliver high-quality, scalable solutions."
                ]
              },
              {
                title: "Web Developer",
                company: "Krushi Mitra",
                date: "May 2021 - June 2022",
                responsibilities: [
                  "Led front-end development efforts, creating an intuitive platform that engaged 1000+ users.",
                  "Optimized user experience and performance, applying best practices in web development."
                ]
              }
            ].map((job, index) => (
              <Card key={index} className="bg-white bg-opacity-10 backdrop-blur-md border border-teal-500 hover:border-teal-300 transition-all">
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription className="text-teal-200">{job.company} | {job.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="skills">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Frontend Development", skills: ["React", "Next.js", "Swift UI", "UIKit", "HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript"] },
              { title: "Backend Development", skills: ["Node.js", "Express", "Flask", "MongoDB", "SQL", "Core Data"] },
              { title: "Tools & Frameworks", skills: ["Git", "XCode", "VS Code", "IntelliJ", "Android Studio", "Jupyter"] },
              { title: "AI & Machine Learning", skills: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "OpenCV"] }
            ].map((category, index) => (
              <Card key={index} className="bg-white bg-opacity-10 backdrop-blur-md border border-teal-500 hover:border-teal-300 transition-all">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-teal-500 text-white">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="projects">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>

          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant={projectFilter === 'mobile' ? 'default' : 'outline'}
              className={`text-white ${
                projectFilter === 'mobile' ? 'bg-gradient-to-r from-teal-400 to-blue-500 shadow-md' : 'bg-transparent border-teal-400'
              } hover:from-teal-500 hover:to-blue-600 transition-all duration-200`}
              onClick={() => setProjectFilter('mobile')}
            >
              Mobile Development
            </Button>
            <Button
              variant={projectFilter === 'web' ? 'default' : 'outline'}
              className={`text-white ${
                projectFilter === 'web' ? 'bg-gradient-to-r from-teal-400 to-blue-500 shadow-md' : 'bg-transparent border-teal-400'
              } hover:from-teal-500 hover:to-blue-600 transition-all duration-200`}
              onClick={() => setProjectFilter('web')}
            >
              Web Development
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects[projectFilter].map((project: Project, index: number) => (
              <Card key={index} className="bg-white bg-opacity-10 backdrop-blur-md border border-teal-500 hover:border-teal-300 transition-all">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-teal-200">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image src={project.imageSrc} width={600} height={400} alt={project.title} className="rounded-lg mb-4" />
                  <div className="mt-4 flex gap-2">
                    
                    <Link href={project.githubLink} className="text-primary hover:underline transition-colors duration-200" prefetch={false}>
                      GitHub
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionWrapper>
      </main>

      <footer className="bg-white bg-opacity-10 backdrop-blur-md py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Shreyas Patil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
