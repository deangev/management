export interface ServiceCallType {
  _id: string;
  estateID: string;
  apartment?: number;
  description: string;
  destination: string;
  priority: 'medium' | 'high';
  assignee: string;
  note: string;
  type: 'maintenance';
  images: string[];
  updatedAt?: Date;
  createdAt?: Date;
}
