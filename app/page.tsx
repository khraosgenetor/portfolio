import Image from "next/image";
import Header from "@/app/Refs/Header";

export default function Home() {
    return (
        <div className="relative grid grid-rows-[20px_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Header className="text-white z-10"/>
            <main className="mt-12 max-w-3xl text-center">
                <br />

                <div className="flex items-center justify-center gap-x-6">
                    <Image
                        className="rounded-full border-2 border-gray-600 shadow-lg"
                        src="/profile.svg"
                        alt="Profile Picture"
                        width={140}
                        height={140}
                    />
                    {/*
                    <div className="h-24 w-[2px] bg-gray-600"></div>
                    <Image
                        className="rounded-full border-2 border-gray-600 shadow-lg"
                        src="/profile.svg"
                        alt="Profile Picture"
                        width={140}
                        height={140}
                    />
                    */}
                </div>
                <br />
                <h1 className="text-4xl font-bold tracking-tight">KhraosGenetor</h1>
                <p className="text-lg text-gray-400 mt-2">Low-level developer | Hardware Prototyping Guy</p>

                <p className="mt-6 text-white text-lg leading-relaxed">
                    Hiya, I am Khraos Genetor, and I have an interest in:
                </p>
                <ul className="list-disc list-inside">
                    <li>Systems Designing (Including but not limited to PCB Prototyping and FPGA-development)</li>
                    <li>OS Dev</li>
                    <li>Minecraft Modding</li>
                    <li>Web Development</li>
                    <li>AI and ML with TensorFlow in JS</li>
                </ul>
            </main>
        </div>
    );
}
