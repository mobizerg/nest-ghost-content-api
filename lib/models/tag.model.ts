import { Visibility } from '../enums';

// tslint:disable:variable-name
export class Tag {

  id: string;
  name: string;
  slug: string;
  description?: string;
  feature_image?: string;
  visibility: Visibility;
  meta_title?: string;
  meta_description?: string;
  url: string;

  hasFeatureImage(): boolean {
    return this.feature_image != null;
  }
}
