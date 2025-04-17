// lib/interfaces.ts
export interface Course {
  id: string;
  title: string;
  description: string;
  category: "package" | "individual" | "collage" | "language";
  image: string;
  rating: number;
  rating_count: number;
  student_count: number;
  instructors: { id: string; name: string }[];
  last_updated: string;
  language: string;
  subtitle_language: string;
  price: number;
  video_hours: string;
  articles: number;
  resources: number;
  learning_objectives: string[];
  sections: {
    title: string;
    lecture_count: number;
    total_duration: string;
    lectures: {
      title: string;
      duration?: string;
      type?: string;
      pages?: string;
    }[];
  }[];
  requirements: string[];
  description_headline: string;
  description_intro: string;
}

export interface Review {
  id: string;
  user_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

export interface RelatedCourse {
  id: string;
  title: string;
  image: string;
  rating: number;
  student_count: number;
  price: number;
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  students: number;
  courses: number;
  bio: string;
}

export interface Category {
  title: string;
  items: { name: string; students: string }[];
}
