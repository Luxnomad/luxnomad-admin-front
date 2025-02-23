interface TabItem {
  label: string;
  content: React.ReactNode;
}

export interface TabContainerProps {
  tabs: TabItem[];
  selectedIndex: number;
  onChangeTab: (index: number) => void;
}
