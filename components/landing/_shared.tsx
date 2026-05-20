import * as React from "react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Calendar,
  Check,
  Clock,
  Cpu,
  Eye,
  FileText,
  Flag,
  Fuel,
  Gauge,
  Globe,
  Lock,
  Mail,
  Map,
  Menu,
  Minus,
  Phone,
  Plus,
  Route,
  Shield,
  Sparkles,
  Star,
  TrendingDown,
  Truck,
  Wrench,
  X,
  type LucideProps,
} from "lucide-react";
import { cn } from "@/lib/utils";

type IconName =
  | "arrow"
  | "arrowUp"
  | "check"
  | "plus"
  | "minus"
  | "truck"
  | "route"
  | "chip"
  | "doc"
  | "clock"
  | "shield"
  | "map"
  | "bell"
  | "chart"
  | "wrench"
  | "eye"
  | "flag"
  | "calendar"
  | "phone"
  | "mail"
  | "star"
  | "spark"
  | "globe"
  | "lock"
  | "menu"
  | "close"
  | "fuel"
  | "gauge"
  | "trendDown";

const iconMap: Record<IconName, React.ComponentType<LucideProps>> = {
  arrow: ArrowRight,
  arrowUp: ArrowRight,
  check: Check,
  plus: Plus,
  minus: Minus,
  truck: Truck,
  route: Route,
  chip: Cpu,
  doc: FileText,
  clock: Clock,
  shield: Shield,
  map: Map,
  bell: Bell,
  chart: BarChart3,
  wrench: Wrench,
  eye: Eye,
  flag: Flag,
  calendar: Calendar,
  phone: Phone,
  mail: Mail,
  star: Star,
  spark: Sparkles,
  globe: Globe,
  lock: Lock,
  menu: Menu,
  close: X,
  fuel: Fuel,
  gauge: Gauge,
  trendDown: TrendingDown,
};

export function Icon({
  name,
  size = 20,
  strokeWidth = 1.6,
  className,
  ...rest
}: { name: IconName } & LucideProps) {
  const Comp = iconMap[name];
  if (!Comp) return null;
  return <Comp size={size} strokeWidth={strokeWidth} className={className} {...rest} />;
}

export function Logo({
  className,
  height = 26,
}: {
  className?: string;
  height?: number;
}) {
  return (
    <svg
      viewBox="0 0 104 26"
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Groute"
      className={cn("fill-secondary", className)}
    >
      <path d="M94.222 26c-1.84 0-3.435-.408-4.787-1.223-1.352-.84-2.388-1.97-3.11-3.391-.722-1.444-1.083-3.076-1.083-4.893 0-1.817.36-3.436 1.083-4.857.722-1.444 1.758-2.575 3.11-3.39C90.788 7.408 92.382 7 94.222 7c1.84 0 3.437.396 4.787 1.211 1.352.815 2.388 1.968 3.11 3.46.722 1.49 1.083 3.214 1.083 5.171v1.05H89.61c.185 1.444.675 2.586 1.467 3.424.815.816 1.864 1.223 3.144 1.223 2.097 0 3.543-.838 4.335-2.516h4.299c-.606 1.84-1.666 3.297-3.181 4.369C98.158 25.464 96.342 26 94.222 26zm4.543-11.254c-.233-1.352-.745-2.4-1.537-3.146-.769-.77-1.77-1.154-3.006-1.154s-2.249.385-3.04 1.154c-.769.745-1.281 1.794-1.537 3.146h9.12zM80.944 1.817v5.59h4.613v3.391h-4.613v9.68c0 .605.127 1.048.384 1.328.28.257.734.385 1.363.385h2.866v3.39h-3.95c-1.653 0-2.912-.338-3.774-1.013-.838-.698-1.258-1.91-1.258-3.634V10.8h-3.18V7.41h3.18V1.817h4.369zM60.252 18.347c0 1.165.28 2.097.838 2.796.559.675 1.444 1.013 2.656 1.013.956 0 1.852-.314 2.692-.944.862-.628 1.363-1.653 1.503-3.075V7.408h4.402V25.58h-4.262v-2.482c-.676.886-1.491 1.597-2.446 2.132-.955.512-2.05.768-3.284.768-2.05 0-3.647-.64-4.787-1.92-1.119-1.306-1.677-3.04-1.677-5.208V7.408h4.368v10.939zM45.674 26c-1.887 0-3.53-.408-4.927-1.223-1.374-.815-2.435-1.945-3.18-3.39-.722-1.444-1.083-3.076-1.083-4.893 0-1.817.361-3.448 1.083-4.893.745-1.444 1.806-2.575 3.18-3.39C42.146 7.394 43.788 7 45.674 7c1.888 0 3.518.408 4.893 1.21 1.4.816 2.46 1.945 3.18 3.39.746 1.444 1.119 3.076 1.119 4.894 0 1.817-.373 3.448-1.119 4.893-.72 1.444-1.78 2.575-3.18 3.39C49.193 25.59 47.561 26 45.674 26zm-4.717-9.506c0 1.818.384 3.25 1.153 4.299.792 1.025 1.98 1.537 3.564 1.537 1.584 0 2.762-.512 3.53-1.537.792-1.049 1.189-2.481 1.189-4.299 0-1.817-.397-3.239-1.189-4.263-.769-1.049-1.945-1.573-3.53-1.573-1.585 0-2.772.524-3.564 1.573-.77 1.025-1.153 2.446-1.153 4.263zM25.674 7.408h4.263v3.25c1.095-2.305 2.923-3.46 5.487-3.46h1.433v4.055H35.25c-1.654 0-2.936.42-3.844 1.259-.886.838-1.329 2.26-1.329 4.263V25.58h-4.403V7.408zM11.881 26C9.412 26 7.28 25.418 5.486 24.253 3.692 23.088 2.329 21.527 1.397 19.57.465 17.59 0 15.399 0 13c0-2.399.478-4.578 1.433-6.534C2.388 4.486 3.798 2.913 5.661 1.749 7.549.582 9.808 0 12.44 0c2.144 0 4.031.384 5.662 1.153 1.653.768 2.982 1.84 3.984 3.215 1.025 1.352 1.689 2.9 1.991 4.647h-4.823c-.35-1.467-1.13-2.645-2.342-3.53-1.188-.885-2.679-1.328-4.472-1.328-2.493 0-4.38.838-5.662 2.515-1.258 1.654-1.887 3.762-1.887 6.326s.629 4.683 1.887 6.36c1.281 1.654 3.169 2.481 5.662 2.481 1.934 0 3.483-.524 4.647-1.572 1.189-1.049 2.015-2.505 2.481-4.369L11.392 12.054h12.964v13.524H20.826v-4.402C19.102 24.39 16.12 26 11.881 26z" />
    </svg>
  );
}

export function Eyebrow({
  children,
  light,
  className,
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[13px] font-medium",
        light ? "text-[#9DB7F2]" : "text-muted-foreground",
        className,
      )}
    >
      <span
        className={cn(
          "block size-1.5 rotate-45",
          light ? "bg-[#9DB7F2]" : "bg-primary",
        )}
      />
      {children}
    </span>
  );
}

export function Spec({
  value,
  label,
  light,
  large,
}: {
  value: string;
  label: string;
  light?: boolean;
  large?: boolean;
}) {
  return (
    <div>
      <div
        className={cn(
          "font-semibold tracking-tight",
          large ? "text-[26px]" : "text-[24px]",
          light ? "text-white" : "text-foreground",
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          "mt-1 text-[13px]",
          light ? "text-[#A6B1CD]" : "text-muted-foreground",
        )}
      >
        {label}
      </div>
    </div>
  );
}

export function PhotoPlaceholder({
  label,
  dark,
  className,
}: {
  label: string;
  dark?: boolean;
  className?: string;
}) {
  return <div data-label={label} className={cn("ph", dark && "is-dark", className)} />;
}
