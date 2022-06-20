export interface Telephone {
  supplier: string; //
  number: string;
  usage: string;
  line_owner_name: string;
  bill_number: string;
  bill_owner_name: string;
  note: string;
}

export interface Internet {
  infrastructure_supplier: string;
  internet_supplier: string;
  ip_address: string;
  username: string;
  password: string;
  wifi: Wifi;
  supplier_details: Supplier_details;
  owner_name: string;
  note: string;
}

export interface TV {
  supplier: string; //
  username: string;
  password: string;
  owner_name: string; //
  supplier_details: Supplier_details;
  note: string;
}

interface Wifi {
  router_address: string;
  management_username: string;
  management_password: string;
  wifi_password: string;
}

interface Supplier_details {
  name: string;
  telephone: string;
}
