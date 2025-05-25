import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="description flex items-center justify-center min-h-screen bg-gray-100 p-4">
    {/* Slides */}
    <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-3xl w-full text-center mt-32">
    {currentSlide === 0 && (
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center px-6 py-4 rounded-xl shadow-md max-w-2xl mx-auto">

          <h1 className="text-4xl font-bold">Problem</h1>
          <p className="mt-4">
            The National Assessment of Educational Progress (NAEP) reports a 5% decrease in math proficiency 
            of 4th graders since 2020. While a child not mastering arithmetic 
            seems innocuous, it is often said that "a building built on sand is unlikely to weather the storm."
          </p>
        </div>
      )}
      {currentSlide === 1 && (

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center px-6 py-4 rounded-xl shadow-md max-w-2xl mx-auto">

        <h1 className="text-4xl font-bold">The Impact</h1>
        <p className="mt-4">
        Studies shows low performance in early education results in weaker performances in later stages, which often "is associated with lower rates of full-time employment, 
                    higher rates in employment in low-paying manual occupations, more frequent periods of unemployment, 
                    and a lower ability to take advantage of employer offered training and thus lower rates of promotion". 
                    By 2030, mathematical, analytical, and technological skills will become critical in the workforce.
        </p>
        </div>
      )}
      {currentSlide === 2 && (
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center px-6 py-4 rounded-xl shadow-md max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold">Our Solution</h1>
          <p className="mt-4">
            Primary: Children ages 4-11<br />
            Secondary: Older students & adults<br />
            Sequential skill development<br />
            Topic-focused mastery<br />
            Daily engagement incentives<br />
            Family-inclusive
          </p>
        </div>
      )}
      {currentSlide === 3 && (
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center px-6 py-4 mx-auto">
          <h1 className="text-4xl font-bold">Interactive Features</h1>
          <p className="mt-4">
            Real-time visual feedback<br />
            Progress tracking<br />
            Topic mastery exams
          </p>
        </div>
      )}
      {currentSlide === 4 && (
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center px-6 py-4 rounded-xl shadow-md max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold">Start Your Journey Today!</h1>
          <p className="mt-4">
            Join us in building strong mathematical foundations for a brighter future.
          </p>
          <Link
            to="/signup"
            className="mt-6 inline-block bg-blue-500 text-blue px-6 py-2 rounded hover:bg-blue-600"
          >
            Sign Up Now!
          </Link>
        </div>
      )}
    </div>
  
    <div className="text-center">
    <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className={`px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 ${
          currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Previous
      </button>
      <button
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
        className={`px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 ${
            currentSlide === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Next
      </button>
    </div>
  </div>
    );
}

export default Home;