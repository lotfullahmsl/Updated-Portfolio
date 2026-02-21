"use client";

import { navItems } from "@/data";

import About from "@/components/About";
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import GitHubActivity from "@/components/GitHubActivity";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import OpenSource from "@/components/OpenSource";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Skills />
        <Education />
        <OpenSource />
        <GitHubActivity />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
