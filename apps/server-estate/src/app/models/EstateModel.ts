import { model, Schema } from "mongoose"
import validator from 'validator'
import { EstateType } from '@sagi/core/types'

const estateSchema = new Schema<EstateType>({
    address: {
        type: {
            city: { type: String, required: [true, 'city is a required value'] },
            street: { type: String, required: [true, 'street is a required value'] },
            number: { type: Number, required: [true, 'house number is a required value'] },
            entry: Number,
        },
        required: true,
        _id: false,
    },
    floors: { type: Number, required: [true, 'please state number of floors'] },
    apartments: { type: Number, required: [true, 'please state number of apartments'] },
    contacts: [{
        type: {
            name: { type: String, required: [true, 'contact must have a name'] },
            phoneNumber: {
                type: String, required: [true, 'contact must have a phone number'],
                validate: { validator: (value: string) => {
                        return validator.isMobilePhone(value, ['he-IL'])
                    },
                    message: 'phone number is invalid',
                }
            }
        },
        _id: false
    }]
})

const Estate = model('Estate', estateSchema)

export default Estate