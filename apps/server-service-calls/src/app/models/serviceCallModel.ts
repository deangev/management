import { model, Schema, Types } from 'mongoose';
import { Modify, ServiceCallType } from '@sagi/core/types';

type ServiceCall = Modify<ServiceCallType, {
    estateId: Types.ObjectId;
}>;

const serviceCallSchema = new Schema<ServiceCall>(
  {
    estateId: {
      type: Schema.Types.ObjectId,
      required: [true, 'Estate must be provided'],
      ref: 'Estate'
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
      default: 'שגיא'
    },
    note: { type: String },
    type: { type: String, default: 'maintenance' },
    images: [{ type: String }],
  },
  { timestamps: true }
);

const ServiceCall = model('ServiceCall', serviceCallSchema);

export default ServiceCall;
