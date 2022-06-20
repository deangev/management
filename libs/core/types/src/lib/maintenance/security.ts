export interface Security {
  note: string;
  server_name: string;
  account: string;
  password?: string;
  cameras: Camera[];
}

interface Camera {
  type: string;
  location: string;
  note: string;
}
