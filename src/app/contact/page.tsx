import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen p-8 mt-10 sm:mt-0 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 sm:items-start">
        <h2 className="text-2xl font-bold">Get in Touch with Travel Experts for Bermel Georgis</h2>

        <p>
          Connect with reliable organizations dedicated to making your journey to Bermel Georgis unforgettable. From accommodations to baptism arrangements, they provide everything you need.
        </p>

        <section>
          <h3 className="text-xl font-semibold">1. Elshaday Association</h3>
          <p>
            Elshaday operates well-known YouTube channels like Elshaday Media and Dorqa Media, sharing inspiring testimonials from baptizands. Led by Alaye and his team, they deliver personalized services.
          </p>
          <Image
            className="my-4"
            src="/elshaday-logo.png"
            alt="Elshaday logo"
            width={150}
            height={150}
            loading="lazy"
          />
          <ul className="space-y-2">
            <li><a href="tel:+2510965454545" className="text-green-700 hover:text-green-900">+251 0965 45 45 45</a></li>
            <li><a href="tel:+2510906787878" className="text-green-700 hover:text-green-900">+251 0906 78 78 78</a></li>
          </ul>
          <address>Megenagna Marathon Building, 6th Floor, Office 603, Addis Ababa, Ethiopia</address>
        </section>

        <section>
          <h3 className="text-xl font-semibold">2. Terbinos Travel Services</h3>
          <p>
            Known for their active YouTube channel, Terbinos Media, Solomon and his group bring a wealth of experience to assist travelers heading to Bermel Georgis.
          </p>
          <Image
            className="my-4"
            src="/terbinos-logo.png"
            alt="Terbinos logo"
            width={150}
            height={150}
            loading="lazy"
          />
          <ul className="space-y-2">
            <li><a href="tel:+2510910101073" className="text-green-700 hover:text-green-900">+251 0910 10 10 73</a></li>
            <li><a href="tel:+2510918181867" className="text-green-700 hover:text-green-900">+251 0918 18 18 67</a></li>
          </ul>
          <address>Genet Commercial Center, 4th Floor, Office 403, Addis Ababa, Ethiopia</address>
          <div className="space-x-4 mt-2">
            <a href="https://www.tiktok.com/@terbinos_media" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://t.me/Terbinos_Media" target="_blank" rel="noopener noreferrer">Telegram</a>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold">3. Emahus Travel Group</h3>
          <p>
            Emahus is known for its Sbuha YouTube channel and is managed by Deacon HaileMariam and Teacher Abraham, offering trusted guidance for travelers to Bermel Georgis.
          </p>
          <Image
            className="my-4"
            src="/sebuha-logo.png"
            alt="Emahus logo"
            width={150}
            height={150}
            loading="lazy"
          />
          <ul className="space-y-2">
            <li><a href="tel:+2510945160000" className="text-green-700 hover:text-green-900">+251 0945 16 00 00</a></li>
            <li><a href="tel:+2510940141516" className="text-green-700 hover:text-green-900">+251 0940 14 15 16</a></li>
          </ul>
          <address>AB Star Building, Infront of Diaspora Building, 8th Floor, Office 805, Megenagna, Addis Ababa, Ethiopia</address>
          
        </section>

        <p>
          If you&apos;re looking for additional options, consider Mominas Travel Association or Mahbere Sador Orthodox Travel Association for affordable services.
        </p>

        <section>
          <h3 className="text-xl font-semibold">Saint George Church Updates</h3>
          <p>
            With contributions from the community, Saint George Church is being rebuilt under Bereket&apos;s visionary 3D design. To contribute to the construction efforts, reach out to Bereket:
          </p>
          <ul className="space-y-2">
            <li><a href="tel:+2510911734304" className="text-green-700 hover:text-green-900">+251 0911 73 43 04</a></li>
          </ul>
        </section>

        <div className="mt-8">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="underline font-bold">Return to Home</Link>
            </li>
            <li>
              <Link href="/map" className="underline font-bold">View Location</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
