import { StaticImageData } from 'next/image';

export interface IPost {
  title: string;
  slug: string;
  imageUrl: string | StaticImageData;
  description: string;
  content: string;
  galleryImages?: (string | StaticImageData)[];
  date?: string;
  tags?: string[];
}

export type IPostList = IPost[];
