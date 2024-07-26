/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/xgfj01qkuB4
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileIcon, GitlabIcon, LinkedinIcon } from "lucide-react";

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tiltPhotoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (tiltPhotoRef.current) {
        const rect = tiltPhotoRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;
        const rotationX = (deltaY / rect.height) * 20;
        const rotationY = (deltaX / rect.width) * -20;

        gsap.to(tiltPhotoRef.current, {
          rotationX,
          rotationY,
          duration: 0.8,
          ease: "power4.out",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(tiltPhotoRef.current, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "power4.out",
      });
    };

    const element = tiltPhotoRef.current;

    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);



  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur">
        <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">
          <Link href="#" className="text-2xl font-bold" prefetch={false}>
            Shreyas Patil
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#about" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#experience" className="hover:underline" prefetch={false}>
              Experience
            </Link>
            <Link href="#education" className="hover:underline" prefetch={false}>
              Education
            </Link>
            <Link href="#skills" className="hover:underline" prefetch={false}>
              Skills
            </Link>
            <Link href="#projects" className="hover:underline" prefetch={false}>
              Projects
            </Link>
            <Link href="#contact" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button
            variant="outline"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-16 z-50 bg-background p-4 md:hidden">
            <nav className="grid gap-4">
              <Link href="#about" className="hover:underline" prefetch={false}>
                About
              </Link>
              <Link href="#experience" className="hover:underline" prefetch={false}>
                Experience
              </Link>
              <Link href="#education" className="hover:underline" prefetch={false}>
                Education
              </Link>
              <Link href="#skills" className="hover:underline" prefetch={false}>
                Skills
              </Link>
              <Link href="#projects" className="hover:underline" prefetch={false}>
                Projects
              </Link>
              <Link href="#contact" className="hover:underline" prefetch={false}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
      <main className="container mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
        <section id="about" className="mb-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold">About Me</h1>
              <p className="mt-4 text-muted-foreground">
                Hi, I&apos;m Shreyas Patil, a passionate web developer with a strong background in front-end and back-end
                technologies. I love creating beautiful and functional websites that provide seamless user experiences.
              </p>
            </div>
            <div className="flex justify-center">
            <Image
                src="/image1.png"
                width={200}
                height={200}
                alt="Shreyas Patil"
                className="rounded-full shadow-black tilt-photo"
                ref={tiltPhotoRef}
              />
            </div>
            <div className="mt-8 flex gap-4">
                  <Link
                    href="https://www.linkedin.com/in/shreyes-patil/"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    <LinkedinIcon className="h-5 w-5 mr-2" />
                    LinkedIn
                  </Link>
                  <Link
                    href="https://github.com/shreyes-patil"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    <GitlabIcon className="h-5 w-5 mr-2" />
                    GitHub
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    <FileIcon className="h-5 w-5 mr-2" />
                    Resume
                  </Link>
                </div>
              </div>
        </section>
        <section id="experience" className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Work Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold">Software Engineering Fellow</h3>
              <p className="text-muted-foreground">Headstarter AI| July 2024 - Present</p>
              <p className="mt-2 text-muted-foreground">
                Developed and maintained responsive, user-friendly web applications using React, Next.js, and Tailwind
                CSS. Collaborated with cross-functional teams to deliver high-quality, scalable solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Web Developer</h3>
              <p className="text-muted-foreground">Krushi Mitra| May 2021 - June 2022</p>
              <p className="mt-2 text-muted-foreground">
              Led front-end development efforts, creating an intuitive platform that engaged 1000+ users, resulting in increased organic traffic and user retention
              </p>
              <p className="mt-2 text-muted-foreground">
              Integrated frontend with Flask backend using AJAX and jQuery, enabling real-time data updates and dynamic content rendering with Jinja2 templating
              </p>
              <p className="mt-2 text-muted-foreground">
              Optimized user experience and performance, applying best practices in web development to enhance page load times, accessibility, and cross-browser compatibility
              </p>
            </div>
          </div>
        </section>
        <section id="education" className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Education</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold">Master of Science in Information Systems</h3>
              <p className="text-muted-foreground">Northeastern University | 2023 - 2025</p>
              <p className="mt-2 text-muted-foreground">
                3.5 GPA
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">BTech in Computer Science</h3>
              <p className="text-muted-foreground">CMR University | 2017 - 2021</p>
              <p className="mt-2 text-muted-foreground">
                3.5 GPA
              </p>
            </div>
          </div>
        </section>
        <section id="skills" className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Skills</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <CodepenIcon className="h-12 w-12" />
              <p className="mt-2 text-center">React</p>
            </div>
            <div className="flex flex-col items-center">
              <CodepenIcon className="h-12 w-12" />
              <p className="mt-2 text-center">Next.js</p>
            </div>
            <div className="flex flex-col items-center">
              <WindIcon className="h-12 w-12" />
              <p className="mt-2 text-center">Tailwind CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <CodepenIcon className="h-12 w-12" />
              <p className="mt-2 text-center">Node.js</p>
            </div>
            <div className="flex flex-col items-center">
              <DatabaseIcon className="h-12 w-12" />
              <p className="mt-2 text-center">MongoDB</p>
            </div>
            <div className="flex flex-col items-center">
              <GitGraphIcon className="h-12 w-12" />
              <p className="mt-2 text-center">Git</p>
            </div>
            <div className="flex flex-col items-center">
              <EclipseIcon className="h-12 w-12" />
              <p className="mt-2 text-center">JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <TypeIcon className="h-12 w-12" />
              <p className="mt-2 text-center">TypeScript</p>
            </div>
          </div>
        </section>
        <section id="projects" className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Image src="/chef2go.png" width={600} height={400} alt="Project 1" className="rounded-lg" />
              <h3 className="mt-4 text-xl font-bold">Chef2go</h3>
              <p className="mt-2 text-muted-foreground">
              Engineered an innovative solution enabling international students to cook recipes from their home countries using
locally available ingredients in the USA, coupled with cost-effective ingredient sourcing recommendations.
              </p>
              <div className="mt-4 flex gap-2">
                <Link
                  href="#"
                  className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Live Demo
                </Link>
                <Link
                  href="https://github.com/info-6150-fall-2023/final-project-peri-peri"
                  className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  GitHub
                </Link>
              </div>
            </div>
            <div>
              <Image src="/melp1.png" width={600} height={400} alt="Project 2" className="rounded-lg" />
              <h3 className="mt-4 text-xl font-bold">Melp</h3>
              <p className="mt-2 text-muted-foreground">
              Orchestrated seamless integration among diverse medical sectors—doctors, patients, medication stores, delivery,
and labs—for enhanced system cohesion              </p>
              <div className="mt-4 flex gap-2">
                <Link
                  href="#"
                  className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Live Demo
                </Link>
                <Link
                  href="https://github.com/aed5100/final-project-team-sks-1"
                  className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  GitHub
                </Link>
              </div>
            </div>
            <div>
              <Image src="/ApplyMore.png" width={600} height={400} alt="Project 3" className="rounded-lg" />
              <h3 className="mt-4 text-xl font-bold">ApplyMore</h3>
              <p className="mt-2 text-muted-foreground">
              ApplyMore aims to streamline the job application process, enabling users to manage their applications with ease and efficiency.
              </p>
              <div className="mt-4 flex gap-2">
                <Link
                  href="#"
                  className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Live Demo
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Contact Me</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={5} required />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </section>
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <p className="text-center text-muted-foreground">&copy; 2024 Shreyas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function CodepenIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function DatabaseIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function EclipseIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>
  )
}


function GitGraphIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
}


function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function TypeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}


function WindIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}


function XIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
