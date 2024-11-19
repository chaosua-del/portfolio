interface CoinBannerProps {
  name: string;
  percentage: number;
  bgColor: string;
  textColor: string;
  icon: string;
}

export default function CoinBanner({
  name,
  percentage,
  bgColor,
  textColor,
  icon,
}: CoinBannerProps) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        flexBasis: percentage + '%',
        minWidth: '120px',
      }}
      className="progress-box before:animate-fill-wave animate-progress-box-animation h-11 rounded-lg bg-diamond-pattern bg-repeat p-3 flex items-center"
    >
      <img
        className="mr-1 size-6 object-contain object-center"
        src={icon}
        width={24}
        height={24}
      />
      <span className="font-semibold mr-1 text-sm">{name}</span>
      <span className="block mr-6 font-medium text-xs"> ({percentage}%)</span>
    </div>
  );
}
