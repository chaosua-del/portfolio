import { useEffect, useState } from 'react';
import Wave from 'react-wavify';

interface DiamodChart {
  value: number;
}

const HEIGHT = 135;
const WIDTH = 168;

const mapPercentageToRange = (percentage: number): number => {
  const min = 10;
  const max = 110;
  const zero = HEIGHT;

  if (percentage === 0) {
    return zero;
  }

  return max - percentage * (max - min);
};

export const DiamondChart = ({ value }: DiamodChart) => {
  const [height, setHeight] = useState(mapPercentageToRange(0));
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (value) {
      setPaused(true);
      setHeight(mapPercentageToRange(value));
      setTimeout(() => {
        setPaused(false);
      }, 1400);
    } else {
      setHeight(mapPercentageToRange(0));
    }
  }, [value]);

  return (
    <div className="relative w-[168px] h-[135px]">
      <div className="absolute top-0 left-0 z-10">
        <svg
          width={WIDTH}
          height={HEIGHT}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.7"
            d="M4.25445 51.1619L84.6455 131.143M4.25445 51.1619L47.7909 4.52372L64.5478 4.52371L74.5966 4.52371M4.25445 51.1619L44.45 51.1619M165.037 51.1619L84.6455 131.143M165.037 51.1619L121.5 4.52371H104.743H94.6944M165.037 51.1619L124.841 51.1619M84.6455 131.143L44.45 51.1619M84.6455 131.143L124.841 51.1619M44.45 51.1619L84.6455 51.1619L124.841 51.1619M44.45 51.1619L74.5966 4.52371M124.841 51.1619L94.6944 4.52371M94.6944 4.52371L84.6455 4.52371L74.5966 4.52371"
            stroke="#00a682"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="absolute top-0 left-0 overflow-hidden">
        <Wave
          mask="url(#mask)"
          paused={paused}
          fillOpacity={1}
          fill="#34d399"
          id={paused ? 'wave-animation' : ''}
          options={{
            height,
            amplitude: 3,
            points: 4,
            speed: 0.3,
          }}
        >
          <mask id="mask">
            <svg
              width={WIDTH}
              height={HEIGHT}
              viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.2564 51.1619L47.7929 4.52372L64.5497 4.5237L74.5986 4.5237L84.6475 4.5237H94.6964L104.745 4.5237H121.502L165.039 51.1619L84.6475 131.143L4.2564 51.1619Z"
                fill="white"
                fillOpacity="0.5"
              />
            </svg>
          </mask>
        </Wave>
      </div>
    </div>
  );
};
