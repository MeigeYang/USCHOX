import Image from 'next/image';

const WhoWeAre = () => {
  return (
    <div className="relative overflow-hidden -mt-50"> 
      <div className="container mx-auto px-4">
        <div className="relative h-[40vh] mb-0"> 
          {/* Background Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[600px] h-[300px]" style={{ left: '5%', top: '' }}>
              <Image
                src="/whower.png"
                alt="Who We Are Background"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
          
          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-start pt-4">
            <div className="relative w-full" style={{ left: '20%', top: '10%' }}>
              <h2 className="text-[46px] sm:text-[50px] md:text-[60px] lg:text-[80px] text-[#1A110C] whitespace-nowrap"
                  style={{ fontFamily: '"adobe-caslon-pro", serif', fontWeight: 300, fontStyle: 'normal' }}>
                WHO WE ARE
              </h2>
            </div>
          </div>
        </div>

        {/* Introduction Paragraph */}
        <div className="mt-[-5vh] max-w-3xl mx-auto px-1 md:px-4 py-8"> 
          <p className="text-lg md:text-xl text-[#1A110C]"
             style={{ fontFamily: '"adobe-caslon-pro", serif', fontWeight: 300, fontStyle: 'normal' }}>
                <span className="inline-block ml-8" style={{ textIndent: '2em' }}>Eta Omega Chi is the first and the only East Asian professional fraternity established at UC Berkeley. Eta Omega Chi Eta Chapter is a group of high-achieving and self-driven USC undergrads who are interested in the business domain.</span>
​
                <span className="inline-block mt-4 ml-8" style={{ textIndent: '2em' }}>We strive to build an elite community to share exclusive resources and opportunities. Our goals to pursue entrepreneurship and build lifelong brotherhood make us distinctive amongst East Asian student organizations in the United States.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;