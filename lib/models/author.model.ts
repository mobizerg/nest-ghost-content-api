// tslint:disable:variable-name
export class Author {

  id: string;
  name: string;
  slug: string;
  profile_image?: string;
  cover_image?: string;
  bio?: string;
  website?: string;
  location?: string;
  facebook?: string;
  twitter?: string;
  meta_title?: string;
  meta_description?: string;
  url: string;
  count?: { posts: number };

  hasProfileImage(): boolean {
    return this.profile_image != null;
  }

  hasCoverImage(): boolean {
    return this.cover_image != null;
  }
}
