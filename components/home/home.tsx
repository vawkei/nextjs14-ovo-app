import Image from "next/image";

export const HomeComponent = () => {
  return (
    <div className="p-4 flex flex-row items-center justify-center">
      <div className="w-1/2  p-4">
        <h3 className="w-full font-extrabold mb-2">Get High Quality</h3>
        <h1 className="font-extrabold text-6xl w-full mb-2">Medical Services</h1>
        <p className="w-full">Access top tier medical care from licensed professionals.</p>
      </div>
      <div className="w-1/2 h-full">
        <Image src={"/assets/ovosApp3.jpeg"} alt="doctors" width={1000} height={1000} />
      </div>
    </div>
  );
};

