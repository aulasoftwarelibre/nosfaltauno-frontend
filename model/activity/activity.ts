import { User } from "../user/user";

export interface Activity {
  id: string;
  title: string;
  description: string;
  date: Date;
  category: string;
  organizer: User;
}
