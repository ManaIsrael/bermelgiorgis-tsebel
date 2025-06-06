import Link from "next/link";

export default function Header() {
  return (
    <header
      className="text-white flex flex-wrap items-center justify-between p-4"
      aria-label="Site header"
    >
      <nav className="flex items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/" aria-label="Navigate to the homepage">
            Bermel Giorgis
          </Link>
        </h1>
      </nav>
      <nav aria-label="Primary navigation">
        <ul className="flex gap-6">
          <li>
            <Link
              href="/about"
              aria-label="Learn more about Bermel Giorgis on the About page"
              className="hover:underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              aria-label="Visit the Frequently Asked Questions page"
              className="hover:underline"
            >
              Questions
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              aria-label="Navigate to the Contact page for inquiries"
              className="hover:underline"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/map"
              aria-label="View the map of Bermel Giorgis"
              className="hover:underline"
            >
              Map
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
