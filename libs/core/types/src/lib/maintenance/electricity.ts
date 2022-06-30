export interface Electricity {
  counters: Counter[];
}

interface Counter {
  counter: number;
  counter_number: number; //
  location: string;
  note: string;
  payments: CounterPayment[];
}

interface CounterPayment {
  invoice: string;
  kwh: number;
  start_date: string;
  end_date: string;
  total: number;
  total_days: number;
  monthly_average: number; //
  note: string;
}
