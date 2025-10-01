export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export interface StoriesContentProps {
  stories: { resourceURI: string; name: string; type: string }[];
}

export interface seriesContentProps {
  series: { resourceURI: string; name: string }[];
}

export interface CreatorsContentProps {
  creators: { resourceURI: string; name: string; role: string }[];
}
