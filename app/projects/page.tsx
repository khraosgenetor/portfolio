"use client";

import Header from "@/app/Refs/Header";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SearchBarPosts from "@/app/Refs/SearchBar";

type Projects = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
};

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Projects[]>([]);
    const pathname = usePathname();
    const placeholder = "Search Projects......";

    useEffect(() => {
        document.title = "Khraotic Projects | Home";

        setTimeout(() => {
            setProjects([
                {
                    id: "0",
                    title: "Website",
                    description: "www.khraos.in",
                    imageUrl: "/projects/khraosin.ico",
                },
            ]);
        }, 100);
    }, []);

    return (
        <div className="relative grid grid-rows-[20px_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Header className="text-white z-10" />

            <main className="mt-12 max-w-3xl text-center">
                <div className="flex items-center justify-center gap-x-6">
                    {projects.length > 0 ? (
                        <SearchBarPosts placeholder={placeholder} project={projects} path={pathname as string} />
                    ) : (
                        <p className="text-white">Loading projects...</p>
                    )}
                </div>
            </main>
        </div>
    );
}
