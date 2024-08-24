import clsx from "clsx";
import LogoIcon from "./logoIcon";

export interface LogoSectionProps {
  className?: string;
}

const LogoSection = (props: LogoSectionProps) => {
  const { className } = props;

  return (
    <div className={clsx("flex items-center gap-4", className)}>
      <span>
        <LogoIcon />
      </span>
      <span>Focus</span>
    </div>
  );
};

export default LogoSection;
