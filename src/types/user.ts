import { ImageModel } from "./image";

export interface UserModel {
  cover: null;
  description: null;
  email: string;
  image: ImageModel;
  name: string;
  slug: string;
}
