import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "etpr1tns",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-03-18",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
export default client;
