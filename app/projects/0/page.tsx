import Header from "@/app/Refs/Header";
import Image from "next/image";

export default function Project0() {
    return (
        <div className="relative grid grid-rows-[auto_1fr_auto] items-center justify-items-center h-[90vh] p-8 pb-20 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Header className="text-white z-10" />

            <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
                <div className="flex items-center space-x-3">
                    <Image
                        src="/projects/khraosin.ico"
                        alt="Website Favicon"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full"
                    />
                    <h1 className="text-2xl font-bold text-white">Website</h1>
                </div>
            </div>

            <main className="flex flex-col items-center justify-center w-full h-full text-center">
                <h1 className="text-3xl font-bold text-white mb-4">Website</h1>
                <p className="text-gray-400 text-lg max-w-2xl">
                    Welcome to my website, where I share my knowledge on
                    <ol className="list-decimal  list-inside">
                        <li>OS development</li>
                        <li>FPGA programming</li>
                        <li>custom hardware design</li>
                        <li>and more</li>
                    </ol>
                    <br/>
                    Here, you’ll find detailed tutorials on setting up development environments, writing low-level code, and building
                    projects from scratch. My goal is to document my journey in creating a custom laptop, mobile OS, and custom chips.
                </p>
                <p className="text-gray-400 text-lg mt-4">
                    Explore my work at:
                    <a href="https://www.khraos.in" className="text-blue-400 hover:underline"> www.khraos.in</a>
                </p>
            </main>


        </div>
    );
}
