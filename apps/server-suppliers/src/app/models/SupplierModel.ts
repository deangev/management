import { model, Schema } from 'mongoose';
import validator from 'validator';
import { SupplierType } from '@management/core/types';

const supplierSchema = new Schema<SupplierType>({
  name: { type: String, required: [true, 'Please enter a name'] },
  phoneNumber: {
    type: String,
    required: [true, 'Supplier must have a phone number'],
    validate: {
      validator: (value: string) => {
        return validator.isMobilePhone(value, ['he-IL']);
      },
      message: 'phone number is invalid',
    },
  },
});

const Supplier = model('Supplier', supplierSchema);

export default Supplier;
