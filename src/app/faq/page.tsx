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
            Why should I visit?
          </summary>
          <ul className="list-disc ml-5 mt-2">
            <li>
              <strong>Answers for life:</strong> Gain profound insights into life's most challenging questions, leaving you with peace of mind.
            </li>
            <li>
              <strong>A meaningful journey:</strong> Embark on a spiritual adventure filled with discovery and growth.
            </li>
            <li>
              <strong>Uncover mysteries:</strong> Experience revelations usually reserved for religious leaders, accessible to all.
            </li>
            <li>
              <strong>Healing powers:</strong> Known for curing physical and mental ailments, including paralysis, blindness, and more.
            </li>
          </ul>
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
            What&apos;s in it for me?
          </summary>
          <ul className="list-disc ml-5 mt-2">
            <li><em>Health:</em> Healing for various conditions, both physical and mental.</li>
            <li><em>Answers:</em> Clear guidance for unresolved questions in your life.</li>
            <li><em>Love:</em> Renew your sense of unconditional love and connection.</li>
            <li><em>Peace:</em> Find lasting inner peace, even in the most restless times.</li>
            <li><em>Knowledge:</em> Understand life&apos;s mysteries and gain clarity on personal and spiritual matters.</li>
            <li><em>Life:</em> Grasp the meaning of life and gain insights into eternity and the afterlife.</li>
            <li><em>More:</em> Discover beyond what words can describe—visit to truly understand.</li>
          </ul>
        </details>

        <details>
          <summary className="text-lg font-semibold cursor-pointer">
            What makes it unique from other holy waters?
          </summary>
          <ul className="list-disc ml-5 mt-2">
           <li>Welcomes everyone, including atheists.</li>
            <li>Provides revelations to all visitors, regardless of background.</li>
            <li>Answers every question, offering unparalleled clarity.</li>
          </ul>
        </details>

        <details>
          <summary className="text-lg font-semibold cursor-pointer">
            Why was it revealed?
          </summary>
          <p className="mt-2">
            Designed to strengthen the faith of a generation seeking tangible proof, it offers undeniable spiritual experiences and life-changing insights.
          </p>
        </details>

        <details>
          <summary className="text-lg font-semibold cursor-pointer">
            Can I see heaven and hell?
          </summary>
          <p className="mt-2">
            Yes, visitors often witness extraordinary revelations. Specific requests are fulfilled through the intercession of saints.
          </p>
        </details>

        <details>
          <summary className="text-lg font-semibold cursor-pointer">
            Does it answer all of my questions?
          </summary>
          <p className="mt-2">
            Yes, providing answers and clarity to all questions, whether personal or spiritual, leaving no room for confusion.
          </p>
        </details>

        <details>
          <summary className="text-lg font-semibold cursor-pointer">
            How long does a baptism session last?
          </summary>
          <p className="mt-2">
            Each session lasts three to ten minutes and offers unique insights. Multiple baptisms lead to additional revelations.
          </p>
        </details>

        <details>
          <summary className="text-lg font-semibold cursor-pointer">
            How will it transform me?
          </summary>
          <p className="mt-2">
            Transformation begins with subtle signs like a heavenly aroma or the sound of horse hooves, culminating in profound spiritual changes.
          </p>
        </details>

        <details>
          <summary className="text-lg font-semibold cursor-pointer">
            Where is Bermel Giorgis located?
          </summary>
          <p className="mt-2">
            Situated in the Qwara Desert, Ethiopia, approximately 940 kilometers from Addis Ababa. Travel options include a three-day car journey or a 15-hour trip combining air and road travel. Check the 
            <Link href="/map" className="underline font-bold ml-1" aria-label="Visit map page for the location">
                Map
            </Link> for details.
          </p>
        </details>

        <details>
          <summary className="text-lg font-semibold cursor-pointer">
            How do I travel there?
          </summary>
          <p className="mt-2">
            Ethiopian visitors can fly to Bahir Dar and take a 14-hour bus ride. International travelers can connect through Addis Ababa and use various transportation options. Agencies like Elshaday and Terbinos offer complete travel packages.
          </p>
        </details>

        <details>
          <summary className="text-lg font-semibold cursor-pointer">
            Are there nearby accommodations?
          </summary>
          <p className="mt-2">
            Temporary shelters and small houses near the site provide lodging. New facilities are under construction to better serve visitors.
          </p>
        </details>

         <details>
          <summary className="text-lg font-semibold cursor-pointer">
            How and when was it discovered?
          </summary>
          <p className="mt-2">
            Revealed in April 2014 following a vision by Priest Asfaw Agete in 2010. The holy water was discovered during a government excavation and has since become a sacred site.
          </p>
        </details>

        <details>
          <summary className="text-lg font-semibold cursor-pointer">
            Is there a cost for visiting the holy site?
          </summary>
          <p className="mt-2">
            No, there is no cost to visit or participate in the spiritual practices at Bermel Giorgis. 
            The holy water and related services are provided free of charge. Visitors are not required 
            to pay for access to the site or for the transformative experiences it offers. However, 
            personal travel expenses, accommodations, and any arrangements made with travel agencies 
            are the responsibility of the visitor.
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