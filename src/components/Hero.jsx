
import  { useState } from "react";
const Hero = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        {step === 1 && (
          <>
            <h1 className="text-2xl font-bold mb-4">Step 1</h1>
            <p className="mb-8">Welcome to the first step!</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleNext}
            >
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="text-2xl font-bold mb-4">Step 2</h1>
            <p className="mb-8">Welcome to the second step!</p>
            <button className="bg-blue-500 text-white px-4 py-2 my-5 rounded" onClick={handleBack}>
              Previous
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleNext}
            >
              Next
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h1 className="text-2xl font-bold mb-4">Step 3</h1>
            <p className="mb-8">Welcome to the final step!</p>
            <button className="bg-blue-500 text-white px-4 py-2 my-5 rounded" onClick={handleBack}>
              Previous
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;