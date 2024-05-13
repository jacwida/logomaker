import { cn } from "@/lib/utils";

const MaxWidth = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("max-w-screen-2xl mx-auto", className)}>{children}</div>
  );
};

export default MaxWidth;
