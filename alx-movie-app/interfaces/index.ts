import { ReactNode } from "react";

/* Layout props */
export interface ComponentProps {
  children: ReactNode;
}

/* Button props */
export interface ButtonProps {
  title: string;
  action?: () => void;
}

/* Props for rendering each movie card */
export interface MovieProps {
  id?: string;
  posterImage: string;
  releaseYear: string;
  title: string;
}

/* Data shape from the API */
interface PrimaryImage {
  url: string;
}

interface TitleText {
  text: string;
}

interface ReleaseYear {
  year: string;
}

export interface MoviesProps {
  id: string;
  primaryImage: PrimaryImage;
  titleText: TitleText;
  releaseYear: ReleaseYear;
}
