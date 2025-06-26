import Link from "next/link";
import Image from "next/image";
import CarouselComponent from "../components/Carousel";



export default function Home() {
  // const carouselImages = [
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1MqT2IHtr2eH53AkoQqr0lAvBHiJvjcxh",
  //     alt: "Sample snapshot of a witness through phone",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1P4ksv-dsYJnZxheb7SYaC-EKd_7XXTTM",
  //     alt: "Sample snapshot of a witness 2",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1g8R50Dk_DTu-wc-l9zGO_il14pwEUhMN",
  //     alt: "Sample snapshot of a witness 3",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1_rkrSHC_YvxFSog5GNQ9my7eqlbtVyMi",
  //     alt: "Sample snapshot of a witness 4",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1dcUS_SQdfQ5HhZ_px0sToJr6LMXajw8p",
  //     alt: "Sample snapshot of a witness 5",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1W-1DDjXLnlvCsdwV6g2EKYfaqpqw-ijr",
  //     alt: "Sample snapshot of a witness 6",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1Iu5z6dFuArYh5blEz-uTimClaWdKseyD",
  //     alt: "Sample snapshot of a witness 7",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1XFqWbLQJg4K-K7OW70kX8mpdyOAtZbLO",
  //     alt: "Sample snapshot of a witness 8",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1kMAlAoyUV_PyCBW9KL2IpPjWKp5azuLm",
  //     alt: "Sample snapshot of a witness 9",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1kr1nWyuOLulP7ThdcIx7XfhhHDc_M3Le",
  //     alt: "Sample snapshot of a witness 10",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=12M7CHCTNfV8VkTOXjdFjyxwMDhAvrTO1",
  //     alt: "Sample snapshot of a witness 11",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1HeRLmBrC6-cLT4a-Kv6C-s4XYlWsV-rv",
  //     alt: "Sample snapshot of a witness 12",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1skVMcy0-s9CoD5J16YJpSHoP_ci_UfjD",
  //     alt: "Sample snapshot of a witness 13",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1R9w4k_9UOQ6Ut5zg2ko9hJzYrG3e_wZ2",
  //     alt: "Sample snapshot of a witness 14",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1rgYZcwnZjWCNvJfJB2EQ7-ybkhQ_dQdk",
  //     alt: "Sample snapshot of a witness 15",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1AbInxj7a6HyG1NLtkldc4qCBA8ITaLIU",
  //     alt: "Sample snapshot of a witness 16",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=16WnaSZJg3TtqfG9rHY_bw8KtjPE3MEYl",
  //     alt: "Sample snapshot of a witness 17",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1KCmH6DBa4jHaBgyY9hweretCnEcipTol",
  //     alt: "Sample snapshot of a witness 18",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=16nngQIOCoixI4CRVLhk1m4mECwT5g3tS",
  //     alt: "Sample snapshot of a witness 19",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1P1e2cNQQ5_BavQsaBmnsaQw4GV2IwFgG",
  //     alt: "Sample snapshot of a witness 20",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1CJpi53cvWi0zmAaCAM-RDjC3IMOTQoTF",
  //     alt: "Sample snapshot of a witness 21",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1jBaxYcqyBIl7GufEI2MvnY4lP5_X8rX7",
  //     alt: "Sample snapshot of a witness 22",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1IEyqDwqmsfOcAIETJarmZXhwHgz4_0zY",
  //     alt: "Sample snapshot of a witness 23",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1UXCjDRPjUc3NS30FBhMT3s-TrGBqAuwx",
  //     alt: "Sample snapshot of a witness 24",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=14AN98X4QZTvrKxFj6aXv0xpdX7giENeZ",
  //     alt: "Sample snapshot of a witness 25",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=19l7vSozOln-X3kfufVxe3zE5PHhfiaKz",
  //     alt: "Sample snapshot of a witness 26",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1pXpmuyxswV5N-82w2rkzZbZj94QdgrWa",
  //     alt: "Sample snapshot of a witness 27",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1J4ZLRo33hvxM8wMoH3SFtem0DXI5t6OP",
  //     alt: "Sample snapshot of a witness 28",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1FpQWmbCA--iTZnq7sK_L5tUJALfXnvyx",
  //     alt: "Sample snapshot of a witness 29",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1Kjgn2UzaYqTOzfVWEb-HputF9n8VMMmv",
  //     alt: "Sample snapshot of a witness 30",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1xdOtx5-3rp9FxB_3iQR88vm1tBuKBK_8",
  //     alt: "Sample snapshot of a witness 31",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1bDPw1IHe5V8hunYAD5lMEXnYzhDVcnzK",
  //     alt: "Sample snapshot of a witness 32",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1fXQvKEqtEFkhJNTAr4BPnOVtz6dHx-yA",
  //     alt: "Sample snapshot of a witness 33",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1yh44OD5t5oyXZ3fGiJ2FTZKwju9NYhKu",
  //     alt: "Sample snapshot of a witness 34",
  //   },

  //   {
  //     src: "https://drive.google.com/thumbnail?id=1CmIj6yLUxH7QK-F0UUV2J0kthWtUXM9v",
  //     alt: "Sample snapshot of a witness 36",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1Ze-2OAC-szcQ961H8sVn9xo0VquZvJfF",
  //     alt: "Sample snapshot of a witness 37",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1vyMwUr9TvpJd-JPgo3sDYlgYLDTLYnhz",
  //     alt: "Sample snapshot of a witness 38",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1maJO4agjny6mfopI7GISOBYPM8MAh_w8",
  //     alt: "Sample snapshot of a witness 39",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1-x-DE3vBV_SjflXqCSUrLYdNE7__kG2a",
  //     alt: "Sample snapshot of a witness 40",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1vufhQxO1xM9V3qDsuf9VPmZEREvuBrW6",
  //     alt: "Sample snapshot of a witness 41",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1mGRTgqNdaHGeRoIpFhXdGnoqXv0mxMQg",
  //     alt: "Sample snapshot of a witness 42",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1ghZXOJFyV-fXEKs-3mZAIy8F1LqmkPtX",
  //     alt: "Sample snapshot of a witness 43",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1QI_rFZMkeHhawsVALR6D8cmueo8q-R2t",
  //     alt: "Sample snapshot of a witness 44",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1RL9KeRD488LDYMXwsOwe3cXAYZ9UFpgf",
  //     alt: "Sample snapshot of a witness 45",
  //   },
  //   {
  //     src: "https://drive.google.com/thumbnail?id=1LJjMdpD7ut0J3GBkd-d_LRIE0u02vovX",
  //     alt: "Sample snapshot of a witness 46",
  //   }
  // ];

  const carouselImages = [
    {
      src: "https://i.imgur.com/a923hIN.png",
      alt: "Sample snapshot of a witness 1",
    },
    {
      src: "https://i.imgur.com/lA0Pc5E.png",
      alt: "Sample snapshot of a witness 2",
    },
    {
      src: "https://i.imgur.com/deRdjhm.png",
      alt: "Sample snapshot of a witness 3",
    },
    {
      src: "https://i.imgur.com/x3Rix74.png",
      alt: "Sample snapshot of a witness 4",
    },

    {
      src: "https://i.imgur.com/QcKKOpo.png",
      alt: "Sample snapshot of a witness 5",
    },
    {
      src: "https://i.imgur.com/QxBKU1O.png",
      alt: "Sample snapshot of a witness 6",
    },
    {
      src: "https://i.imgur.com/rMs1zmJ.png",
      alt: "Sample snapshot of a witness 7",
    },
    {
      src: "https://i.imgur.com/85rBq6n.png",
      alt: "Sample snapshot of a witness 8",
    },

    {
      src: "https://i.imgur.com/T3c3WLg.png",
      alt: "Sample snapshot of a witness 9",
    },
    {
      src: "https://i.imgur.com/xCekCsa.png",
      alt: "Sample snapshot of a witness 10",
    },
    {
      src: "https://i.imgur.com/FtgVRnS.png",
      alt: "Sample snapshot of a witness 11",
    },
    {
      src: "https://i.imgur.com/V2zHIC8.png",
      alt: "Sample snapshot of a witness 12",
    },

    {
      src: "https://i.imgur.com/wQCGnWt.png",
      alt: "Sample snapshot of a witness 13",
    },
    {
      src: "https://i.imgur.com/SuHCfWj.png",
      alt: "Sample snapshot of a witness 14",
    },
    {
      src: "https://i.imgur.com/e2STb0c.png",
      alt: "Sample snapshot of a witness 15",
    },
    {
      src: "https://i.imgur.com/4VFwUwR.png",
      alt: "Sample snapshot of a witness 16",
    },

    {
      src: "https://i.imgur.com/7C342vt.png",
      alt: "Sample snapshot of a witness 17",
    },
    {
      src: "https://i.imgur.com/liwaVdl.png",
      alt: "Sample snapshot of a witness 18",
    },
    {
      src: "https://i.imgur.com/49ovyr5.png",
      alt: "Sample snapshot of a witness 19",
    },
    {
      src: "https://i.imgur.com/ryUSzDp.png",
      alt: "Sample snapshot of a witness 20",
    },

    {
      src: "https://i.imgur.com/3z0eaVH.png",
      alt: "Sample snapshot of a witness 21",
    },
    {
      src: "https://i.imgur.com/kkE6zto.png",
      alt: "Sample snapshot of a witness 22",
    },
    {
      src: "https://i.imgur.com/O2xKjHX.png",
      alt: "Sample snapshot of a witness 23",
    },
    {
      src: "https://i.imgur.com/M5ftQ1O.png",
      alt: "Sample snapshot of a witness 24",
    },

    {
      src: "https://i.imgur.com/XtQ4Y0X.png",
      alt: "Sample snapshot of a witness 25",
    },
    {
      src: "https://i.imgur.com/q2pqWYK.png",
      alt: "Sample snapshot of a witness 26",
    },
    {
      src: "https://i.imgur.com/n9PaRJN.png",
      alt: "Sample snapshot of a witness 27",
    },
    {
      src: "https://i.imgur.com/sPozGrj.png",
      alt: "Sample snapshot of a witness 28",
    },

    {
      src: "https://i.imgur.com/midSI4K.png",
      alt: "Sample snapshot of a witness 29",
    },
    {
      src: "https://i.imgur.com/ULVAren.png",
      alt: "Sample snapshot of a witness 30",
    },
    {
      src: "https://i.imgur.com/LfX19DC.png",
      alt: "Sample snapshot of a witness 31",
    },
    {
      src: "https://i.imgur.com/SbJag4K.png",
      alt: "Sample snapshot of a witness 32",
    },

    {
      src: "https://i.imgur.com/Ze9A3BC.png",
      alt: "Sample snapshot of a witness 33",
    },
    {
      src: "https://i.imgur.com/8C0kgGJ.png",
      alt: "Sample snapshot of a witness 34",
    },
    {
      src: "https://i.imgur.com/ybLfZ68.png",
      alt: "Sample snapshot of a witness 35",
    },
    {
      src: "https://i.imgur.com/NeBO0do.png",
      alt: "Sample snapshot of a witness 36",
    },

    {
      src: "https://i.imgur.com/ejOaTE1.png",
      alt: "Sample snapshot of a witness 37",
    },
    {
      src: "https://i.imgur.com/TAYKUx7.jpeg",
      alt: "Sample snapshot of a witness 38",
    },
    {
      src: "https://i.imgur.com/VDJNkvv.png",
      alt: "Sample snapshot of a witness 39",
    },
    {
      src: "https://i.imgur.com/9zKboPq.png",
      alt: "Sample snapshot of a witness 40",
    },

    {
      src: "https://i.imgur.com/2G6d44A.png",
      alt: "Sample snapshot of a witness 41",
    },
    {
      src: "https://i.imgur.com/RLc5woZ.png",
      alt: "Sample snapshot of a witness 42",
    },
    {
      src: "https://i.imgur.com/IjwfCru.png",
      alt: "Sample snapshot of a witness through phone",
    },
  ];

  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 sm:items-start">
        <section id="hero">
          <video
            loop
            muted
            autoPlay
            preload="auto"
            aria-label="A muted background video showcasing a baptism site in Ethiopia."
          >
            <source src="bermel.mp4" type="video/mp4" />
            Your browser does not support this video.
          </video>
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
              className="text-white font-bold py-2 px-4 rounded mt-4 inline-block"
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
              Bermel Giorgis (meaning Barrel George) is a revered holy site in Ethiopia, 
              known for its mystical waters that offer spiritual healing and glimpses 
              of divine realms. It is deeply connected to Saint George and serves as a 
              place for profound transformation and revelation. The miraculous holy water
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
              Unique Qualities of the Holy Water
            </h2>
            <p><strong>Inclusive for All:</strong> Unlike many other holy waters that require faith or belief in their power, Bermel Georgis is unique in its inclusivity. It welcomes everyone, regardless of their beliefs, and performs miracles for anyone baptized there.</p>
            <p><strong>Answers Life&apos;s Questions:</strong> You can ask any question, whether to Saint George or other saints, before or during baptism. The answers come to you during the baptism, addressing even the deepest or long-held questions, including those you may not have thought to ask.</p>
            <p><strong>Reveals Mysteries:</strong> The holy water unveils profound mysteries, including insights into heaven, hell, and other unknown realms. These revelations come to you, whether you actively seek them or not, providing a deeper understanding of life and the beyond.</p>
            <p><strong>Intercession for the Departed:</strong> Bermel Giorgis may allow you to see or connect with loved ones who have passed away. If they are suffering in hell, a saint might guide you on actions to take in their name to help them find salvation.</p>
            <h3>Why Visit The Site?</h3>
            <ul className="list-disc ml-5 mt-2">
              <li>To find answers to the most challenging questions in your life.</li>
              <li>To prepare your soul for eternal life with God.</li>
              <li>
                To see and converse with God and the saints, gaining glimpses of paradise or hell.
              </li>
              <li>To experience healing from physical, emotional, or spiritual ailments, or to seek healing for someone else.</li>
              <li>To gain undeniable evidence of miracles that transcend the limits of science, even if you are a skeptic or atheist.</li>
              <li>Rediscover your faith and find clarity in your life&apos;s purpose</li>
            </ul>
            <Link
              href="/about"
              style={{"backgroundColor": "rgba(0,0,0,0.4)"}}
              className="text-white font-bold py-2 px-4 rounded mt-4 block"
            >
              Bermel Giorgis&apos; Miracles
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
          
          <article>
            <h2>The Popularity</h2>
            <p>The fame began to grow around 2019 when a few individuals started sharing videos of the holy water on YouTube, primarily in the Amharic language. These early videos, often titled with phrases like &quot;The holy water that shows hell,&qoot; initially attracted limited attention. However, the site gained widespread recognition when popular channels such as <em>Travel Ethiopia</em> featured videos about Bermel Giorgis, drawing in a significantly larger audience.</p>
          </article>

          <article>
            <h2>The Foundation</h2>
            <p>The origins of the site are deeply rooted in Ethiopian spirituality. On July 27, 2002 E.C. (March 2010 G.C.), the Ark of Saint George was brought to the Church of Mother Virgin Mary in Quara, the region now home to the holy site. Four years later, in 2006 E.C. (2014 G.C.), the holy water miraculously emerged during a government excavation project. The digging, intended to source water for agricultural purposes, instead uncovered this sacred site, marking the beginning of its spiritual significance.</p>
          </article>
        </section>

      <section>
        <CarouselComponent images={carouselImages} />
      </section>

      </main>
    </div>
  );
}
