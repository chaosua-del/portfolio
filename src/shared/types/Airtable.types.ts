export interface AirtableImageType {
  filename: string;
  height: number;
  id: string;
  size: number;
  thumbnails: Record<
    AirtableImageThumbnailSizes,
    {
      url: string;
    }
  >;
  type: string;
  url: string;
  width: number;
}

type AirtableImageThumbnailSizes = "full" | "large" | "small";
