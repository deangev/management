import { model, Schema } from 'mongoose';
import { ServiceCallType } from '@management/core/types';

const serviceCallSchema = new Schema<ServiceCallType>(
  {
    estateID: {
      type: String,
      required: [true, 'Estate must be provided'],
    },
    apartment: {
      type: Number,
    },
    description: {
      type: String,
      required: [true, 'Description is a required value'],
    },
    destination: {
      type: String,
      required: [true, 'Destination is a required value'],
    },
    priority: {
      type: String,
      default: 'medium',
    },
    assignee: {
      type: String,
      default: 'שגיא',
    },
    note: { type: String },
    type: { type: String, default: 'maintenance' },
    images: [{ type: String }],
  },
  { timestamps: true }
);

const ServiceCall = model('ServiceCall', serviceCallSchema);

export default ServiceCall;
