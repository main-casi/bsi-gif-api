export type Gif = {
  id: string;
  title: string;
  images: {
    original: string;
    static: string;
    preview: string;
    compact: string;
  };
};
