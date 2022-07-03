import { model, Schema } from 'mongoose';
import validator from 'validator';
import { WorkerType } from '@management/core/types';

const workerSchema = new Schema<WorkerType>({
  name: { type: String, required: [true, 'Please enter a name'] },
  phoneNumber: {
    type: String,
    required: [true, 'worker must have a phone number'],
    validate: {
      validator: (value: string) => {
        return validator.isMobilePhone(value, ['he-IL']);
      },
      message: 'phone number is invalid',
    },
  },
});

const Worker = model('Worker', workerSchema);

export default Worker;
