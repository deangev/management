import { model, Schema, Types as mongooseTypes } from "mongoose"
import { Estate } from '@sagi/core/types'

const estateSchema = new Schema<Estate>({
    address: {
        city: {
            type: String,
            required: [true, 'אנא ציינ/י עיר']
        },
        street: {
            type: String,
            required: [true, 'אנא ציינ/י רחוב'],
        },
        number: {
            type: Number,
            required: [true, 'אנא ציינ/י את מספר הבית']
        },
        entry: Number,
        unique: true
    },
    floors: {
        type: Number,
        required: [true, 'אנא ציינ/י את מספר הקומות']
    },
    apartments: {
        type: Number,
        required: [true, 'אנא ציינ/י את מספר הדירות']
    },
    contacts: [{
        type: mongooseTypes.ObjectId,
        ref: 'Resident',
    }],
    elevators: [{
        type: mongooseTypes.ObjectId,
        ref: 'Elevator',
    }],
})

const estate = model('Estate', estateSchema)

export default estate