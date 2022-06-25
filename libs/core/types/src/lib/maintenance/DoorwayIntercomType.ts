export interface IntercomType {
  model: string;
  camera: string;
  note: string;
}

export interface MailboxType {
  resident_location: string;
  committee_location: string;
  label_type: string;
  installed_by: string;
  note: string;
}

export interface DoorwayType {
  type: string;
  retainer: string;
  access_control_type: string;
  code: number;
  location: string;
}

export interface BulletinBoardType {
  type: string;
  location: string;
  installed_by: string;
}
