import Image from 'next/image';

export default function JoinUs() {
  return (
    <div className="relative w-full h-[30vh] flex items-center justify-center mt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/joinus.png" // Replace with your actual image path
          alt="Join Us Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 italic text-white"
            style={{ 
              fontFamily: '"adobe-caslon-pro", serif',
              fontWeight: 300,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
          Join us for our fall 2024 Recruitment Cycle!
        </h2>
        <button className="px-8 py-3 text-xl text-white border-2 border-white rounded-full transition duration-300 hover:bg-white hover:text-black"
                style={{ fontFamily: '"adobe-caslon-pro", serif' }}>
          APPLY
        </button>
      </div>
    </div>
  );
}