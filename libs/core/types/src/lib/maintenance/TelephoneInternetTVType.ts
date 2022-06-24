export interface TelephoneType {
  supplier: string;
  number: string;
  usage: string;
  line_owner_name: string;
  bill_number: string;
  bill_owner_name: string;
  note: string;
}

export interface InternetType {
  infrastructure_supplier: string;
  internet_supplier: string;
  ip_address: string;
  username: string;
  password: string;
  wifi: WifiType;
  supplier_details: SupplierDetailsType;
  owner_name: string;
  note: string;
}

export interface TVType {
  supplier: string;
  username: string;
  password: string;
  owner_name: string;
  supplier_details: SupplierDetailsType;
  note: string;
}

interface WifiType {
  router_address: string;
  management_username: string;
  management_password: string;
  wifi_password: string;
}

interface SupplierDetailsType {
  name: string;
  telephone: string;
}
