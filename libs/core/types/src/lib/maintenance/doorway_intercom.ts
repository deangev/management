export interface Intercom {
  model: string;
  camera: string;
  note: string;
}

export interface Mailbox {
  resident_location: string;
  committee_location: string;
  label_type: string; //
  installed_by: string;
  note: string;
}

export interface Doorway {
  type: string;
  retainer: string; //
  access_control_type: string;
  code: number;
  location: string;
}

export interface Bulletin_board {
  type: string; //
  location: string;
  installed_by: string;
}
