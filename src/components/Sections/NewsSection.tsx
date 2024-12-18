import { useState, useRef, TouchEvent } from 'react';
import { Avatar } from '../Elements/Avatar';
import { SliderDot } from '../Elements/SliderDot';

interface NewsItem {
  avatar: string;
  name: string;
  date: string;
  content: string[];
}

interface NewsSectionProps {
  news: NewsItem[];
}

export function NewsSection({ news }: NewsSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || !sliderRef.current) return;

    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    const threshold = 50; // minimum distance to trigger slide change

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentSlide < news.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (diff < 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
      touchStartX.current = null;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">PCS News</h2>
      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {news.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar src={item.avatar} alt={item.name} size="sm" />
                  <div>
                    <h3 className="font-semibold text-red-500">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {item.content.map((line, i) => (
                    <p key={i} className="text-gray-600">{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {news.map((_, index) => (
          <SliderDot
            key={index}
            active={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

