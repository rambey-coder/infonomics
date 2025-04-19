import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiMinimize2 } from 'react-icons/fi';

const Slideshow = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showContent, setShowContent] = useState(false); // Add missing state
    const containerRef = useRef(null);
    console.log(" slides==>", slides)
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, [slides.length]);

    const toggleFullscreen = useCallback(async () => {
        try {
            if (!document.fullscreenElement) {
                await containerRef.current.requestFullscreen();
                setIsFullscreen(true);
                setIsPaused(false);
            } else {
                await document.exitFullscreen();
                setIsFullscreen(false);
            }
        } catch (error) {
            console.error('Fullscreen error:', error);
        }
    }, []);

    // Content animation handler
    useEffect(() => {
        setShowContent(false);
        const contentTimer = setTimeout(() => setShowContent(true), 2000);
        return () => clearTimeout(contentTimer);
    }, [currentSlide]);

    // Autoplay handler
    useEffect(() => {
        let timer;
        if (!isPaused && showContent) {
            timer = setInterval(nextSlide, 5000);
        }
        return () => clearInterval(timer);
    }, [isPaused, showContent, nextSlide]);

    // Fullscreen change listener
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    // Mouse handlers
    const handleMouseEnter = useCallback(() => {
        if (!isFullscreen) setIsPaused(true);
    }, [isFullscreen]);

    const handleMouseLeave = useCallback(() => {
        if (!isFullscreen) setIsPaused(false);
    }, [isFullscreen]);

    return (
        <div 
          ref={containerRef}
          className={`relative group ${isFullscreen ? 'bg-black' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`relative overflow-hidden ${isFullscreen ? 'h-screen' : 'rounded-2xl shadow-xl aspect-video'}`}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className={`w-full h-full ${isFullscreen ? 'object-contain' : 'object-cover'}`}
                />
                
                {/* Overlay Content with Single URL */}
                {index === currentSlide && (
                  <div className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${
                    showContent ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      {slide.url ? (
                        <a 
                          href={slide.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block space-y-2 hover:underline"
                        >
                          <h3 className="text-2xl font-bold">{slide.title}</h3>
                          <p className="text-sm opacity-90 max-w-xl">{slide.msg}</p>
                        </a>
                      ) : (
                        <>
                          <h3 className="text-2xl font-bold">{slide.title}</h3>
                          <p className="text-sm opacity-90 max-w-xl">{slide.msg}</p>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition ${isFullscreen ? 'scale-150' : ''
                    }`}
            >
                <FiChevronLeft className={`text-[#0A2463] ${isFullscreen ? 'text-3xl' : 'text-2xl'}`} />
            </button>
            <button
                onClick={nextSlide}
                className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition ${isFullscreen ? 'scale-150' : ''
                    }`}
            >
                <FiChevronRight className={`text-[#0A2463] ${isFullscreen ? 'text-3xl' : 'text-2xl'}`} />
            </button>

            {/* Slide Dots */}
            <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 ${isFullscreen ? 'bottom-8 scale-150' : ''
                }`}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-[#FF3B30]' : 'bg-white/80'
                            }`}
                    />
                ))}
            </div>

            {/* Control Bar */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                    onClick={toggleFullscreen}
                    className="bg-white/80 p-2 rounded-full hover:bg-white transition"
                >
                    {isFullscreen ? (
                        <FiMinimize2 className="text-[#0A2463] text-xl" />
                    ) : (
                        <FiMaximize2 className="text-[#0A2463] text-xl" />
                    )}
                </button>
                <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-gray-400' : 'bg-[#FF3B30]'}`} />
                </div>
            </div>
        </div>
    );
};

export default Slideshow;
