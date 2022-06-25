export interface ElectricityType {
  counters: CounterType[];
}

interface CounterType {
  counter: number;
  counter_number: number;
  location: string;
  note: string;
  payments: CounterPaymentType[];
}

interface CounterPaymentType {
  invoice: string;
  kwh: number;
  start_date: string;
  end_date: string;
  total: number;
  total_days: number;
  monthly_average: number;
  note: string;
}
