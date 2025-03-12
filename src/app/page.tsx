import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 sm:items-start">
        <section id="hero">
          <div className="caption text-center mt-6">
            <h1 className="text-2xl sm:text-3xl font-bold">
              Welcome to Bermel Giorgis
            </h1>
            <p className="text-lg mt-2">
              Discover a sacred destination in Ethiopia, where profound
              spiritual revelations and miraculous healing await.
            </p>
            <Link
              href="/map"
              aria-label="Navigate to the map page for travel directions"
              className="text-white font-bold bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded mt-4 inline-block"
            >
              Plan Your Journey
            </Link>
          </div>
        </section>

        <section>
          <article>
            <h2 className="text-xl sm:text-2xl font-semibold">
              A Journey to Faith and Healing
            </h2>
            <p className="mt-2">
              Bermel Giorgis, meaning &quot;Barrel George&quot; in English, is a revered
              holy site named after Saint George. The miraculous holy water
              flows from a natural spring surrounded by a unique barrel-like
              structure. Visitors from all walks of life come to seek healing,
              spiritual clarity, and divine experiences.
            </p>
            <Image
              className="my-4"
              src="/images/holy-site.png"
              alt="The holy water site"
              width={750}
              height={500}
              loading="lazy"
            />
          </article>

          <article>
            <h2 className="text-xl sm:text-2xl font-semibold">
              Why Visit Bermel Giorgis?
            </h2>
            <ul className="list-disc ml-5 mt-2">
              <li>Experience profound spiritual revelations.</li>
              <li>Seek healing and peace for body and mind.</li>
              <li>
                Witness the miraculous power of the holy water firsthand.
              </li>
              <li>Reconnect with your faith and purpose.</li>
            </ul>
            <Link
              href="/faq"
              className="text-white font-bold bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded mt-4 block"
            >
              Learn More in the FAQ
            </Link>
          </article>

          <article>
            <h2 className="text-xl sm:text-2xl font-semibold">
              Plan Your Visit
            </h2>
            <p className="mt-2">
              Visitors can stay for as long as they wish, with options to travel
              independently or through agencies like Elshaday or Terbinos. Bring
              essentials for a hot climate, and be prepared for an unforgettable
              journey to a place where time feels suspended, and peace is found
              in every moment.
            </p>
            <Image
              className="my-4"
              src="/images/sacred-statue-2025.png"
              alt="Saint George statue"
              width={750}
              height={500}
              loading="lazy"
            />
          </article>
        </section>
      </main>
    </div>
  );
}
