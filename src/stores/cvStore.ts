import { create } from "zustand";
import { CvType } from "../../public/cv";

export type CvStoreType =
  | { data: CvType; isLoading: false }
  | { isLoading: true; data: null | CvType };

export const useCvStore = create<CvStoreType>()((set) => {
  return {
    isLoading: true,
    data: null,
  };
});

fetch(
  "https://raw.githubusercontent.com/WAROL52/rabetsy/refs/heads/main/public/fr.cv.json"
)
  .then((response) => response.json())
  .then((data) => {
    useCvStore.setState({ data, isLoading: false });
  });
