import Link from "next/link";

export default function About() {
    return(
        <div className="min-h-screen p-8 sm:p-20 font-sans">
            <main className="flex flex-col gap-8 mt-10 sm:items-start">
                <section>
                    <p>
                        Many visitors share that they encountered various obstacles when planning their journey to 
                        Bermel Giorgis. Challenges like financial setbacks, unexpected illnesses in the family, 
                        misplaced tickets, or missed flights were common. However, they also testify to Saint 
                        George&apos;s intervention, resolving these issues and ensuring their safe arrival.
                    </p>

                    <p>
                        Travel agencies such as Elshaday, Terbinos, and Emahus offer comprehensive transportation 
                        options to Bermel Giorgis, including flights, buses, and boat rides.
                    </p>

                    <p>
                        If you opt for a travel agency, your journey typically starts at Addis Ababa Airport, 
                        heading toward the sacred site. Terbinos Travel Agency has streamlined travel for those 
                        residing in the United States and Germany, making the experience more accessible. For 
                        further details, please visit the
                        <Link href="/contact" className="underline font-bold mx-1">
                            Contact
                        </Link>
                        page.
                    </p>

                    <p>
                        Bermel Giorgis welcomes individuals of all faiths, including non-believers, to partake in 
                        its baptism ceremonies. The only requirement is the segregation of men and women into 
                        separate groups. However, other distinctions, such as physical ability, age, or belief, 
                        are not enforced. Everyone—from the paralyzed to children to skeptics—is baptized together.
                    </p>

                    <p>
                        If a saint requests you to share your experiences, it is encouraged to do so. You may 
                        testify in the church, at another location, or privately with someone.
                    </p>

                    <p>
                        Travel agencies provide accommodations with all essential facilities, including sleeping 
                        quarters, prayer rooms, dining spaces, and restrooms. Independent travelers may need to 
                        bring their own tents, utilize church shelters, or rent housing in the nearby village.
                    </p>

                    <p>
                        Holy water services in Ethiopia, including Bermel Giorgis, are always free. There are no 
                        charges for church services, baptisms, or even site visits, making this sacred experience 
                        accessible to all.
                    </p>

                    <p>
                        Remember to pack shorts, as they are required for baptism ceremonies.
                    </p>

                    <p>
                        Many visitors, including those traveling with agencies, use a nearby river for showering. 
                        It is customary to shower alongside other baptizands or within the village before 
                        participating in baptism. Confession beforehand is also recommended and can be done 
                        privately or with a priest at the church. While there is no formal verification, 
                        Saint George may inspire you to confess before your next baptism if you haven&apos;t already.
                    </p>

                    <p>
                        Given the region&apos;s high temperatures, it is advisable to bring any personal items 
                        necessary to ensure a comfortable stay.
                    </p>

                    <Link 
                    href="/faq" 
                    className="undeline font-bold block p-4 bg-gray-300 my-4" 
                    aria-label="Visit frequently asked questions page"
                    >
                        Frequently Asked Questions
                    </Link>
                    <Link 
                    href="/contact" 
                    className="undeline font-bold block p-4 bg-gray-300" 
                    aria-label="Navigate to contact page"
                    >
                        Contact Travel Associations
                    </Link>
                </section>
                <section className="border m-10 bg-gray-200">
                    <h2>About Me</h2>
                    <p>
                        I am a freelance software developer and instructor with expertise in various technologies, 
                        including web development. If you are interested in learning programming or exploring tech 
                        topics during your free time, I offer both online and in-person classes. Visit
                        <a 
                            href="https://ethiopia-free-time-academy.vercel.app" 
                            target="_blank"
                            aria-label="Navigate to the developer's website"
                            className="text-blue-500 underline hover:text-blue-400 ml-1"
                        >
                            Ethiopia Free Time Academy
                        </a>
                        for more details.
                    </p>
                </section>
            </main>
        </div>
    );
}
