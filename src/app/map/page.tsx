import Link from "next/link";

export default function Map() {
    return (
        <div className="min-h-screen p-10 mt-10 sm:mt-0 sm:p-20 font-sans">
            <main className="flex flex-col gap-8 sm:items-start">
                <h2>Map of Bermel Giorgis</h2>
                <p>
                    Bermel Giorgis is situated in the Qwara region, about 940 kilometers from Addis Ababa, known for its warm climate 
                    with summer temperatures often exceeding 36&deg;C. The area is surrounded 
                    by a small community of local villagers. For visitors and baptizands, 
                    nearby shelters offer comfortable amenities, including sleeping rooms, 
                    dining areas, and essential facilities such as toilets. Travelers can 
                    either bring their own food or dine at small local restaurants.
                </p>

                <table className="border text-xs sm:text-base sm:border-separate border-spacing-3">
                    <caption>Geographic Coordinates of Bermel Giorgis</caption>
                    <thead>
                        <tr>
                            <th className="border">Type</th>
                            <th className="border">Latitude</th>
                            <th className="border">Longitude</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border">GeoCoordinates</td>
                            <td className="border">12.390050322463525</td>
                            <td className="border">35.74829690239708</td>
                        </tr>
                    </tbody>
                </table>

                <div className="relative w-full h-96 overflow-hidden">
                    <iframe
                        width="600"
                        height="450"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.1523896545773!2d35.745723574238994!3d12.390034887874435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x165eaf0018138d6b%3A0xcba7cbfe9da7ffaa!2sBermel%20Georgis!5e1!3m2!1sen!2set!4v1740079813958!5m2!1sen!2set"
                        title="Map showing Bermel Georgis"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-xl absolute top-0 left-0 w-full h-full"
                        loading="lazy"
                    ></iframe>
                </div>

                <p> 
                    The journey from Addis Ababa Bole International Airport to Bahir Dar via airplane takes around 
                    an hour. From Bahir Dar, travelers can take a bus to Bermel Georgis, a ride that typically lasts 
                    about 14 hours. Travel agencies such as Elshaday, Terbinos, and Emahus make the trip 
                    comfortable, providing various transportation options, including airplanes, buses, and boats.
                </p>

                <p>
                    Travelers can enjoy well-equipped shelters with prayer and dining rooms, toilets, and sleeping accommodations. 
                    Independent travelers may choose to bring tents, use church-provided shelters, or rent housing in nearby villages. 
                </p>

                <p>
                    Despite being in a desert, Bermel Georgis is near a village with small shops and an Ethiopian Orthodox Tewahedo Church 
                    dedicated to Mother Virgin Mary and Saint George. Nearby holy water sites, including Mrt Delego Kidane Mihret 
                    and Yordanos, offer similar spiritual experiences.
                </p>

                <ul>
                    <li className="mb-4">
                        <Link 
                            href="/" 
                            className="underline font-bold"
                            aria-label="Navigate to home page"
                        >
                            Bermel Giorgis
                        </Link>
                    </li>

                    <li className="mb-4">
                        <Link 
                            href="/contact" 
                            className="underline font-bold"
                            aria-label="Navigate to contact page"
                        >
                            Contact
                        </Link>
                    </li>

                    <li>
                        <Link 
                            href="/faq" 
                            className="underline font-bold"
                            aria-label="Navigate to frequently asked questions page"
                        >
                            Questions
                        </Link>
                    </li>
                </ul>
            </main>
        </div>
    );
}
