export interface itemState {
  name: string;
  type: string;
}
export interface ListState {
  lists: itemState[];
  selectedLists: itemState[];
  expiredTime?: number;
  selectedItem: (item: itemState) => void;
  unSelectedItem: (item: itemState) => void;
  setExpiredTime: () => void;
}
