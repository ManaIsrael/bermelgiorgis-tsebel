import Link from "next/link";

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="flex flex-col items-center gap-6 p-6 bg-gray-800 text-white"
    >
      <h1 className="text-2xl font-bold">
        <Link
          href="/"
          aria-label="Navigate to the homepage - Bermel Giorgis"
          className="hover:text-gray-400"
        >
          Bermel Giorgis
        </Link>
      </h1>

      <nav aria-label="Footer navigation">
        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          <li>
            <Link
              href="/about"
              aria-label="Learn more about Bermel Giorgis on the About page"
              className="hover:text-gray-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              aria-label="Visit the Frequently Asked Questions page"
              className="hover:text-gray-400"
            >
              Questions
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              aria-label="Navigate to the Contact page for inquiries"
              className="hover:text-gray-400"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/map"
              aria-label="View the map of Bermel Giorgis"
              className="hover:text-gray-400"
            >
              Map
            </Link>
          </li>
        </ul>
      </nav>

      <nav aria-label="Developer resources">
        <p className="text-sm text-center max-w-md">
         Author: Betelhem Yemane - betelhemyemanezoom@gmail.com
        </p>
      </nav>

      <p className="text-xs text-gray-400">
        &copy; 2025 Bermel Giorgis. Built with care and dedication.
      </p>
    </footer>
  );
}
