export interface ResponseData<T = any> {
  code: number;
  message: string;
  data: T;
}


export interface DataPage<T = any> {
  data: T;
  totalResult: number;
  totalPage: number;
  page: number;
  pageSize: number;

}

export interface LessonData {
  id: string;
  name: string;
  lessonContent: string;
  imageThumbnail: string;
  video: boolean;
  duration: string;
  isFree: boolean;
  isImportant: boolean;
  isHot: boolean;
}

export interface LessonItem {
  id: string;
  name: string;
  description: string;
  lessonContent: string;
  imageThumbnail: string;
  video: string;
  duration: string;
  courseId: string;
}

export interface LessonDataItem {
  id: string;
  name: string;
  lessonContent: string;
  imageThumbnail: string;
  video: string;
  duration: string;
  order: number;
  totalView: number;
}

export interface CourseData {
  id: string;
  name: string;
  image: string;
  numberOfLessons: number;
  costPrice: number;
  totalTimeDuration: string;
  lesson: LessonData[];
}

export interface CourseItem {
  id: string;
  name: string;
  description: boolean;
  lessonContent: string;
  imageThumbnail: string;
  video: string;
  duration: string;
}

export interface CollapseCourseProps {
  title: string;
  numberOfLessons: number;
  totalTimeDuration: string;
  data: LessonData[];
}

export interface User {
  name?: string;
  email?: string;
  avatar?: string;
  id?: string;
}

export interface Customer {
  id: string;
  email: string;
  role:string;
  avatar: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  yearOfBirth: number;
  city: string;
  fieldOfExpertise: string;
  yearOfExperience: string;
  description: string;
  bankAccountNumber: string;
  accountBankName: string;
  accountBankOwner: string;
  createdAt: number;
  totalMoney: number;
  code: string;
  level_affiliate: number;
  codeRef: string;
  totalRef: number;
  totalCommission: number;
  totalDiscount: number;
}

export interface NotificationItem {
  messId: string;
  messUserId: string;
  status: string;
  sendAt: number;
  readAt: number;
  title: string;
  content: string;
}

export interface SocialLinks {
  key: string;
  value: string;
  label: string;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  type: string;
  createdAt: number;
}


export interface BannerHeaderTop {
  id: string,
  content: string,
  status: string
}