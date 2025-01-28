export interface itemState {
  name: string;
  type: string;
  expired?: number;
}
export interface ListState {
  lists: itemState[];
  selectedLists: itemState[];
  selectedItem: (item: itemState) => void;
  unSelectedItem: (item: itemState) => void;
}
