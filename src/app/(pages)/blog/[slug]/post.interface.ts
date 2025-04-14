export interface IPost {
    title: string;
    slug: string;
    imageUrl: string;
    description: string;
    content: string;
    date?: string;
    tags?: string[];
}

export type IPostList = IPost[];
