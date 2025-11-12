export interface TdNotificationProps {
  id: string;
  type: string;
  message: string;
  title: string;
  onRemove?: (id: string) => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  maxStack?: number;
  position?: string;
  heights?: HeightItem[];
  setHeights?: React.Dispatch<React.SetStateAction<HeightItem[]>>;
  gap?: number;
  isExpanded?: boolean;
  isRemoved?: boolean;
}

export interface HeightItem {
  toastId: string;
  height: number;
  message: string;
  type: string;
}
