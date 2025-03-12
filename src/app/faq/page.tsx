import Link from "next/link";

export default function FAQ() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 sm:items-start">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          Frequently Asked Questions
        </h1>

        <details className="mt-4">
          <summary className="text-lg font-semibold cursor-pointer">
            Why should I visit Bermel Giorgis?
          </summary>
          <p className="mt-2">
            Bermel Giorgis offers an unparalleled spiritual experience where
            visitors often gain clarity, healing, and a deeper connection to
            faith. Whether you&apos;re seeking answers, peace, or personal
            revelations, this sacred site provides it all.
          </p>
          <Link
            href="/about"
            className="text-blue-600 underline hover:text-blue-500 mt-2 block"
            aria-label="Navigate to the about page to learn more"
          >
            Learn more about Bermel Giorgis
          </Link>
        </details>

        <details>
          <summary className="text-lg font-semibold cursor-pointer">
            Can women be baptized during their menstrual cycle?
          </summary>
          <p className="mt-2">
            Women are welcome to be baptized in the nearby Yordanos holy water
            during their menstrual period. However, for baptism in Bermel
            Giorgis, women are advised to wait seven days after the start of
            their cycle.
          </p>
        </details>

        <details>
          <summary className="text-lg font-semibold cursor-pointer">
            What should I bring with me for the journey?
          </summary>
          <ul className="list-disc ml-5 mt-2">
            <li>Comfortable clothing for a hot climate.</li>
            <li>Shorts for the baptism ceremony.</li>
            <li>Personal essentials, and a tent if traveling independently.</li>
            <li>Light snacks or meals suitable for high temperatures.</li>
          </ul>
          <p className="mt-2">
            Travel agencies provide basic amenities, but it&apos;s best to pack what
            you need for comfort during your stay.
          </p>
        </details>

        <details>
          <summary className="text-lg font-semibold cursor-pointer">
            How long does each baptism session take?
          </summary>
          <p className="mt-2">
            Each baptism session lasts three to ten minutes. Baptizands are
            grouped together, and sessions occur every 30 minutes.
          </p>
        </details>

        <details>
          <summary className="text-lg font-semibold cursor-pointer">
            What makes Bermel Giorgis unique?
          </summary>
          <p className="mt-2">
            Unlike other holy waters, Bermel Giorgis provides profound
            revelations to everyone, regardless of faith or background. It&apos;s
            known for its miraculous healing powers and its connection to Saint
            George, who protects visitors and guides them on their spiritual
            journey.
          </p>
        </details>

        <details>
          <summary className="text-lg font-semibold cursor-pointer">
            How do I get to Bermel Giorgis?
          </summary>
          <p className="mt-2">
            Travel agencies like Elshaday and Terbinos provide transportation
            options, including flights, buses, and boats. Independent travelers
            can fly to Bahir Dar and take local transportation to the site.
          </p>
          <Link
            href="/map"
            className="text-blue-600 underline hover:text-blue-500 mt-2 block"
            aria-label="Visit the map page for detailed directions"
          >
            View the map for detailed directions
          </Link>
        </details>

        <details>
          <summary className="text-lg font-semibold cursor-pointer">
            Are there accommodations near Bermel Giorgis?
          </summary>
          <p className="mt-2">
            While there are no hotels in the area, travel agencies provide
            comfortable shelters with essential amenities. Visitors can also
            find small houses or rooms for rent in nearby villages.
          </p>
        </details>

        <p className="mt-4">
          Have more questions? Visit the{" "}
          <Link
            href="/contact"
            className="text-blue-600 underline hover:text-blue-500"
            aria-label="Navigate to the contact page for assistance"
          >
            Contact page
          </Link>{" "}
          to reach out to travel associations or the church directly.
        </p>
      </main>
    </div>
  );
}



// import Link from "next/link";

// export default function FAQ() {
//   return (
//     <div className="min-h-screen p-8 sm:p-20 font-sans">
//       <main className="flex flex-col gap-8 sm:items-start">
//         <details>
//           <summary className="text-xl font-semibold">
//             Why visit Bermel Giorgis?
//           </summary>
//           <p className="mt-2">
//             Bermel Giorgis is a sacred site in Ethiopia offering spiritual healing, revelations, and transformative experiences. People visit for clarity, peace, and a deep connection to the divine.
//           </p>
//         </details>

//         <details>
//           <summary className="text-xl font-semibold">
//             What can I expect during my visit?
//           </summary>
//           <ul className="list-disc ml-6 mt-2">
//             <li>Participate in baptisms and experience miraculous healing.</li>
//             <li>Witness profound spiritual revelations unique to the site.</li>
//             <li>Enjoy the tranquility and natural beauty of Qwara.</li>
//           </ul>
//         </details>

//         <details>
//           <summary className="text-xl font-semibold">
//             How do I prepare for a baptism?
//           </summary>
//           <p className="mt-2">
//             Bring shorts for the baptism and prepare mentally and spiritually. Confession is recommended before participating in the holy water rituals.
//           </p>
//         </details>

//         <details>
//           <summary className="text-xl font-semibold">
//             Are there facilities available?
//           </summary>
//           <p className="mt-2">
//             Yes, travel agencies provide shelters equipped with restrooms, dining areas, and sleeping quarters. Independent travelers may bring tents or rent nearby accommodations.
//           </p>
//         </details>

//         <details>
//           <summary className="text-xl font-semibold">
//             Can anyone visit Bermel Giorgis?
//           </summary>
//           <p className="mt-2">
//             Yes, people of all beliefs and backgrounds are welcome. Baptism groups are organized by gender, but all visitors are treated equally regardless of faith or ability.
//           </p>
//         </details>

//         <details>
//           <summary className="text-xl font-semibold">
//             Is there a cost for visiting Bermel Giorgis?
//           </summary>
//           <p className="mt-2">
//             No, the holy water and church services are free. Visitors are not charged for access to the site or participation in its spiritual practices.
//           </p>
//         </details>

//         <Link
//           href="/contact"
//           className="text-white text-lg font-bold bg-blue-500 px-4 py-2 mt-4 inline-block rounded-md hover:bg-blue-600"
//           aria-label="Contact travel associations for more details"
//         >
//           Contact Travel Associations
//         </Link>
//       </main>
//     </div>
//   );
// }
