"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

type Projects = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
};

interface SearchBarProps {
    placeholder: string;
    project: Projects[];
    path: string;
}

export default function SearchBarPosts({ placeholder, project: project, path }: SearchBarProps) {
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredPosts = project.filter(
        (post) =>
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.description.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        // Listen for Ctrl + F keypress to focus the search input
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === "f") {
                event.preventDefault();
                inputRef.current?.focus(); // Focus on the input when Ctrl + F is pressed
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        (<div className="flex flex-col items-center w-full">
            <div className="flex items-center w-full max-w-md gap-2 p-2 bg-gray-800 rounded-lg mb-8">
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={placeholder}
                    className="flex-grow p-2 text-sm text-white bg-gray-700 rounded-md focus:outline-none"
                />
                <button
                    className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-500"
                >
                    Search
                </button>
            </div>
            <div className="flex flex-col w-full gap-6 sm:flex-row sm:flex-wrap">
                {filteredPosts.map((post) => (
                    <Link key={post.id} href={`${path}/${post.id}`} className="w-full max-w-xs">
                        <div className="p-4 bg-gray-900 rounded-2xl shadow-md text-white flex flex-col items-center min-w-0 hover:shadow-lg transition-shadow duration-200">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                width={48}
                                height={48}
                                className="w-12 h-12 mb-2 rounded-full"
                            />
                            <h3 className="text-lg font-semibold text-center">{post.title}</h3>
                            <p className="text-sm text-gray-400 text-center break-words">{post.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>)
    );
}