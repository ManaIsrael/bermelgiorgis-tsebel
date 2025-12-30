"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AnnouncementPopup() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"am" | "en">("am");

  useEffect(() => {
    const dismissed = localStorage.getItem("bermelAnnouncementDismissed");
    if (!dismissed) {
      setOpen(true);
    }
  }, []);

  const closePopup = () => {
    localStorage.setItem("bermelAnnouncementDismissed", "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="max-w-lg w-full rounded-2xl bg-white p-6 shadow-xl relative">
        
        {/* Close button */}
        <button
          onClick={closePopup}
          aria-label="Close announcement"
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Language toggle */}
        <div className="flex justify-end mb-2">
          <button
            onClick={() => setLang(lang === "am" ? "en" : "am")}
            className="text-sm underline text-gray-600"
          >
            {lang === "am" ? "English" : "አማርኛ"}
          </button>
        </div>

        {/* Content */}
        {lang === "am" ? (
          <>
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
              ✨ የበርሜል ቅዱስ ጊዮርጊስ ጉዞ እንደገና ተጀምሯል ✨
            </h2>

            <p className="text-gray-700 text-center leading-relaxed">
              ለ<strong>8 ወራት</strong> የቆመው ወደ
              <strong> ቅዱስ ቦታ በርሜል ጊዮርጊስ</strong> ጉዞ
              እንደገና ተጀምሯል።
              <br /><br />
              የ<strong>በርሜል ጊዮርጊስ ቤተክርስቲያን</strong> በ
              <strong> ቅዱስ ጊዮርጊስ</strong> ዓመታዊ በዓል
              <br />
              <strong className="block mt-2">
                ጥር 18 2017 ዓ.ም
              </strong>
              (January 26, 2025)
              <br />
              ሁሉንም አማኞች ወደዚህ ቅዱስ ስፍራ ይጠራል።
            </p>
          </>
        ) : (
          <>
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
              ✨ Pilgrimage to Bermel Giorgis Resumes ✨
            </h2>

            <p className="text-gray-700 text-center leading-relaxed">
              After an <strong>8-month suspension</strong>, travel to the holy site of
              <strong> Bermel Giorgis</strong> has officially resumed.
              <br /><br />
              The Church of <strong>Saint George at Bermel Giorgis</strong> calls all
              believers to gather on
              <br />
              <strong className="block mt-2">
                January 26, 2025
              </strong>
              for the annual feast of the
              <strong> Arch-Martyr Saint George</strong>.
            </p>
          </>
        )}

        {/* Actions */}
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/map"
            className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90"
          >
            {lang === "am" ? "ጉዞዎን ያቅዱ" : "Plan Your Journey"}
          </Link>

          <button
            onClick={closePopup}
            className="px-6 py-2 rounded-lg border font-semibold hover:bg-gray-100"
          >
            {lang === "am" ? "ዝጋ" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}
