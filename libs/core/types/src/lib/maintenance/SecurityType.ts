export interface SecurityType {
  note: string;
  server_name: string;
  account: string;
  password?: string;
  cameras: CameraType[];
}

interface CameraType {
  type: string;
  location: string;
  note: string;
}
