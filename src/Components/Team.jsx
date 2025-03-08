import React from "react";
import connie from '../Assets/Connie.jpg'
import Anthony from '../Assets/POLYCOM DAY OF THE AFRICAN CHILD-CC2_3462 (1) (1).jpg'
import John from '../Assets/ivana-square.jpg'

const Team = () => {
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="w-full text-center mb-12">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Our Team
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
          Meet the Redifu Team
          </h2>
          <p className="text-base text-body-color dark:text-dark-6 mx-auto max-w-[600px]">
          Passionate about reducing food waste and empowering the Kibera community, our team connects local organizations with surplus food to those who need it most. Together, we’re building a sustainable future—one meal at a time.
          </p>
        </div>

        {/* Team Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 w-full">
          <TeamCard name="Constance Khalumba" profession="Co-Founder" imageSrc={connie} />
          <TeamCard name="Anthony Kimani" profession="Co-Founder" imageSrc={Anthony}/>
          <TeamCard name="Vision" profession="Web Developer" imageSrc={John}/>
          
        </div>
      </div>
    </section>
  );
};

export default Team;

const TeamCard = ({ imageSrc, name, profession }) => {
    return (
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[300px] bg-white dark:bg-dark-2 shadow-lg rounded-lg p-4 text-center">
          <img src={imageSrc} alt={name} className="w-full h-auto rounded-md" />
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-dark dark:text-white">{name}</h3>
            <p className="text-sm text-body-color dark:text-dark-6">{profession}</p>
          </div>
        </div>
      </div>
    );
  };
  