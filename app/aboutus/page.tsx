import Card from "@/components/ui/card";

const AboutusPage = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-center items-center p-4">
        <div className="w-1/4">
          <h1 className="font-bold text-2xl">About Us</h1>
        </div>

        <div>
          <p>
            We pride ourselves on offering seamless online consultations through
            our user friendly application. With vastnetwork of expert doctors
            spanning various specialities,we provide personalized and efficient
            medicare. Or commitment lies in connecting you with professionals
            who bring diverse expertise to your fingertips, ensuring
            comprehensive and accessible healthcare solutions.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-6">
        <Card>
            <div>
                <h1>20 +</h1>
                <p>Doctors available</p>
            </div>
            <hr/>
            <div>
                <p>We boost of a over 20 accomplished and credentialed professionals, ensuring a wealth of expertise and diverse medical specialities.</p>
            </div>
        </Card>
        <Card>
            <div>
                <h1>3 </h1>
                <p>Branches</p>
            </div>
            <hr/>
            <div>
                <p>We have three branches nationwide. Our services have been extended to three states in the country,exemplifying our reach and commitment to providing healthcare solutions nationally</p>
            </div>
        </Card>
        <Card>
            <div>
                <h1>5 </h1>
                <p>Response</p>
            </div>
            <hr/>
            <div>
                <p>Our healthcare team ensures swift, 5 minutes response during consultations, underscoring our dedication to efficient and timely medical care.</p>
            </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutusPage;
