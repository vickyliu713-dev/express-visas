import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Express Visas logo"
                width={40}
                height={40}
                loading="lazy"
                sizes="40px"
                className="w-full h-full object-cover"
                quality={85}
              />
            </div>
            <div className="text-xl font-bold text-white">Express Visas – UK Immigration Services</div>
          </div>
          <div className="text-white/90 text-center">
            <div className="text-lg">Phone: +44203 488 0088 | Email: info@expressvisas.co.uk</div>
          </div>
        </div>
      </div>
    </footer>
  );
}


