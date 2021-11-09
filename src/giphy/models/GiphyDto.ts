export type GiphyDto = {
  id: string;
  title: string;
  images: {
    downsized_large: {
      url: string;
    };
    original: {
      url: string;
    };
    preview_gif: {
      url: string;
    };
    "480w_still": {
      url: string;
    };
  };
};
