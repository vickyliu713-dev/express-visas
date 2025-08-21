import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-28 h-12 md:w-36 md:h-14 rounded-xl overflow-hidden bg-white p-1">
              <Image
                src="/logo.jpg"
                alt="Express Visas logo"
                fill
                loading="lazy"
                sizes="(min-width: 768px) 144px, 112px"
                className="object-contain"
                quality={85}
              />
            </div>
            <div className="text-xl font-bold text-white text-center">UK Immigration Services</div>
          </div>
          <div className="text-white/90 text-center">
            <div className="text-lg">Phone: +44203 488 0088 | Email: info@expressvisas.co.uk</div>
          </div>
        </div>
      </div>
    </footer>
  );
}


