import Link from 'next/link';

export default function Header() {
    return (
      <header className="text-white min-[416px]:flex items-center justify-around" aria-label='Site header'>
        <nav className="container w-96">
          <h1 className="text-2xl font-bold"><Link href="/" aria-label="Home - Bermel Georgis">Bermel Georgis</Link></h1>
        </nav>
        <nav className="w-96">
          <ul className="flex items-center justify-evenly">
            <li><Link href="/about" aria-label="About page">About</Link></li>
            <li><Link href="/faq" aria-label="Frequently asked questions page">Questions</Link></li>
            <li><Link href="/contact" aria-label="Contact page">Contact</Link></li>
            <li><Link href="/map" aria-label="Map page">Map</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  