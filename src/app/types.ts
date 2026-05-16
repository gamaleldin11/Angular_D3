export interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
  category: string;
  dueDate: string;
  tags: string;
  status: 'done' | 'not_done';
}
