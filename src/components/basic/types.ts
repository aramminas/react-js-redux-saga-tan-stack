import { ChangeEvent } from "react";

export type RadioGenderType = {
  onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  error: string;
  gender?: string;
};

export type EllipsisTooltipProps = { text: string; width: string | number };

export type TotalPriceProps = { rating: number; price: number };
