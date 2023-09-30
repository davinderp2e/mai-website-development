type ISvgType = {
  fill?: string;
  height?: string | number;
  width?: string | number;
  style?: any;
  className?: string;
  selected?: boolean;
};

export const Arrow = (props: ISvgType) => {
  const { fill = '#0F0F0F', height = '23', width = '42' } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 42 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M41.0607 12.5607C41.6464 11.9749 41.6464 11.0251 41.0607 10.4393L31.5147 0.893396C30.9289 0.307609 29.9792 0.307609 29.3934 0.893396C28.8076 1.47918 28.8076 2.42893 29.3934 3.01472L37.8787 11.5L29.3934 19.9853C28.8076 20.5711 28.8076 21.5208 29.3934 22.1066C29.9792 22.6924 30.9289 22.6924 31.5147 22.1066L41.0607 12.5607ZM1.31134e-07 13L40 13L40 10L-1.31134e-07 10L1.31134e-07 13Z"
        fill={fill}
      />
    </svg>
  );
};
