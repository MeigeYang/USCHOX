import Image from 'next/image';

export default function Profession() {
  return (
    <div className="py-16 mt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center"> {/* Note the flex-row-reverse */}
          {/* Right side - Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pl-8">
            <div className="relative h-[400px] w-full">
              <Image
                src="/profession.png" // Replace with your actual image path
                alt="Professional Development"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Left side - Title and Paragraph */}
          <div className="w-full md:w-1/2">
            <h2 className="text-[46px] sm:text-[50px] md:text-[60px] text-[#1A110C] mb-6"
                style={{ fontFamily: '"adobe-caslon-pro", serif', fontWeight: 300, fontStyle: 'normal' }}>
              PROFESSION
            </h2>
            <p className="text-lg text-[#1A110C]"
               style={{ fontFamily: '"adobe-caslon-pro", serif', fontWeight: 300, fontStyle: 'normal', textIndent: '2em' }}>
                We offer exclusive resources to our members for them to pursue their professional goals and be the light that guides through the intense recruiting process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}