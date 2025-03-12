import Link from 'next/link';

export default function Footer() {
    return(
        <footer aria-label='Site footer' className="flex flex-col items-center gap-6 p-6 text-white">
            <h1 className="text-2xl font-bold hover:text-gray-600">
                <Link href="/" aria-label="Home - Bermel Georgis">
                    Bermel Georgis
                </Link>
            </h1>
            <nav>
                <ul className="flex gap-4 text-sm text-gray-600">
                    <li>
                        <Link
                        href="/about"
                        className="hover:text-black"
                        aria-label="About page"
                        >
                        About
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/faq"
                        className="hover:text-black"
                        aria-label="Frequently asked questions page"
                        >
                        Questions
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/contact"
                        className="hover:text-black"
                        aria-label="Contact page"
                        >
                        Contact
                        </Link>
                    </li>
                    <li>
                        <Link 
                        href="/map"
                        className="hover:text-black"
                        aria-label="Map page"
                        >
                        Map
                        </Link>
                    </li>
                </ul>
            </nav>

            <nav className='ml-7'>
                <p className='w-96'>
                    If you have a suggestion on the development 
                    of this website or if you are looking for a 
                    learning program on any technology matter including 
                    website development, you can check out my website - 
                    <a 
                    href="https://ethiopia-free-time-academy.vercel.app/" 
                    target="_blank"
                    aria-label="Navigate to Ethiopia free time academy website" 
                    className="text-blue-600 hover:text-blue-500 ml-1"
                    >
                        ethiopia free time academy
                    </a>
                </p>
            </nav>

            <p className="text-sm text-gray-300">
                &copy; 2025 Bermel Georgis. Made with care.
            </p>
        </footer>
    );
}