import { model, Schema } from "mongoose"
import { Estate as EstateType } from '@sagi/core/types'
import isMobilePhone from 'validator/es/lib/isMobilePhone'

const estateSchema = new Schema<EstateType>({
    address: {
        type: {
            city: {
                type: String,
                required: [true, 'city is a required value']
            },
            street: {
                type: String,
                required: [true, 'street is a required value'],
            },
            number: {
                type: Number,
                required: [true, 'house number is a required value']
            },
            entry: Number,
        },
        unique: true
    },
    floors: {
        type: Number,
        required: [true, 'please state number of floors']
    },
    apartments: {
        type: Number,
        required: [true, 'please state number of apartments']
    },
    contacts: [{
        type: {
            name: {
                type: String,
                required: [true, 'contact must have a name']
            },
            phoneNumber: {
                type: String,
                required: [true, 'contact must have a phone number'],
                validate: {
                    validator: function(value: string) {
                        return isMobilePhone(value, ['he-IL'])
                    },
                    message: 'phone number is invalid',
                }
            }
        }
    }]
})

const Estate = model('Estate', estateSchema)

export default Estate