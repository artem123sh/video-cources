export interface Course {
  id: number;
  title: string;
  createdDate: string;
  duration: number;
  description: string;
  isTopRated: boolean;
  authors: Author[];
}

export interface Author {
  id: number;
  name: string;
  lastName: string;
}
