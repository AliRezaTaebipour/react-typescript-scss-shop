import { ReactElement } from "react";

export interface IBadge {
  number: number;
  icon: ReactElement;
}

export type OpenModal = {
  handleOpen: () => void;
};
