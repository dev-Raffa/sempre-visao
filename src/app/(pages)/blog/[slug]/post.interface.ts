import { StaticImageData } from 'next/image';

export interface IPost {
  title: string;
  slug: string;
  imageUrl: string | StaticImageData;
  description: string;
  content: string;
  date?: string;
  tags?: string[];
}

export type IPostList = IPost[];
