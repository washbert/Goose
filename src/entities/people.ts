export type Person = {
  id: number;
  displayPic: File;
  firstName: string;
  lastName: string;
  date: string;
}

export type Honk = {
  id: number;
  displayPic: string;
  gooseHandle: string;
  firstName: string;
  lastName: string;
  honk: string;
  date: string;
  likes: number;
  replies: Honk;
  rehonks: number;
  views: number;
  honkImage: string;
}