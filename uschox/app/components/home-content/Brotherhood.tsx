import Image from 'next/image';

export default function Brotherhood() {
  return (
    <div className="py-16  ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-full" style={{ height: '70vh' }}>
              <Image
                src="/brotherhood.png" // Replace with your actual image path
                alt="Brotherhood"
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
              BROTHERHOOD
            </h2>
            <p className="text-lg text-[#1A110C]"
               style={{ fontFamily: '"adobe-caslon-pro", serif', fontWeight: 300, fontStyle: 'normal', textIndent: '2em' }}>
               HOX will not only support our members to grow professionally but also interpersonally. We are a close-knit community where members dedicate to help each other to accomplish their goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}