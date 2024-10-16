import Link from "next/link";

export default function Aboutuspage() {
    return (
        <section className="min-h-[calc(100dvh-165px)] px-3 sm:px-4 lg:px-6 bg-center bg-cover"
            style={{ backgroundImage: `url("/images/Games/Call-of-duty.jpg")`}}>
            <div className="text-center py-10 text-3xl md:text-5xl lg:text-7xl font-bold leading-tight text-[#1c1e22]">
                World Wire, <br />Game Online Center
            </div>
            <div className="relative text-white flex items-center justify-center md:justify-start pt-20 lg:pt-10">
                <div className="text-center md:text-left max-w-4xl">
                    <p className="mt-4 test-sm md:text-lg max-w-full md:max-w-[80%] lg:max-w-[60%] font-bold text-white">About us</p>
                    <p className="mt-4 text-sm md:text-lg text-white max-w-full md:max-w-[80%] lg:max-w-[60%] font-bold">
                        Welcome to World Wire Game Online Center, your ultimate destination for everything related to online games. Our platform is dedicated to providing detailed information, reviews, and updates on the latest and most popular games across various genres. Whether you're a casual player or a dedicated gamer, we aim to offer something for everyone.
                    </p>
                    <p className="mt-4 text-sm md:text-lg text-white max-w-full md:max-w-[80%] lg:max-w-[60%] font-bold">
                        Here at World Wire, we believe that gaming is more than just a hobby – it's a community. That's why we've created a space where gamers can come together to discover new games, discuss strategies, and stay updated with the latest gaming trends. Our detailed game guides and articles are designed to help you improve your skills, discover hidden features, and enjoy your favorite games even more.
                    </p>
                    <p className="mt-4 text-sm md:text-lg text-white max-w-full md:max-w-[80%] lg:max-w-[60%] font-bold">
                        Explore, learn, and connect with gamers from around the world at World Wire Game Online Center – where gaming never stops!
                    </p>
                    <Link href={`/games`}>
                        <button className="mt-14 mb-10 px-4 py-2 md:px-6 md:py-3 border border-white text-white text-lg hover:bg-white hover:text-black transition-all">
                            See Games Online More ↓
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
