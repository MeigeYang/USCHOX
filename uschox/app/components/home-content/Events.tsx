import Image from 'next/image';

export default function Events(){
    return (
    <div className="py-16 mt-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-full" style={{ height: '70vh' }}>
                <Image
                src="/events.png" // Replace with your actual image path
                alt="Section Image"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
                />
            </div>
        </div>

          {/* Right side - Title and Paragraph */}
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-[46px] sm:text-[50px] md:text-[60px] text-[#1A110C] mb-6"
                style={{ fontFamily: '"adobe-caslon-pro", serif', fontWeight: 300, fontStyle: 'normal' }}>
              EVENTS & ACTIVITIES
            </h2>
            <p className="text-lg text-[#1A110C]"
               style={{ fontFamily: '"adobe-caslon-pro", serif', fontWeight: 300, fontStyle: 'normal' ,textIndent: '2em'}}>
                We provide our members with opportunities to connect with and learn from professionals in various business industries, from ranging marketing to entrepreneurship. ​
            </p>
          </div>
        </div>
      </div>
    </div>
  );
    
}