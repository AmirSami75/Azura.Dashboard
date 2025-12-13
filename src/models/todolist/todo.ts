export type Priority = "extrime" | "moderate" | "low";
export type Status = "done" | "in progress" | "not Started";

export type todoItemProps = {
  id: number;
  title: string;
  date?: Date;
  priority: Priority;
  description: string;
  image?: string;
  status: Status;
};
