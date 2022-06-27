import Estate from '../models/EstateModel'
import { catchAsync, restrictUpdate } from '@sagi/core/utils';
import { Request, Response } from 'express';
import {
  AddressType,
  CreateEstateRequestType,
  DeleteEstateRequestType,

  GetEstateRequestType,
  UpdateEstateRequestType
} from '@sagi/core/types'

export const searchEstates = catchAsync(async (req: Request, res: Response) => {
  const estates = await Estate.find()
  if (!estates) return res.status(400).json({ message: 'estates not found' })

  res.status(200).json({ hits: estates.length, estates })
})

export const createEstate = catchAsync(async (req: CreateEstateRequestType, res: Response) => {
  const { address, apartments, floors } = req.body

  if (!address) return res.status(400).json({ message: 'please provide an address' })
  if (!apartments) return res.status(400).json({ message: 'please provide an address' })
  if (!floors) return res.status(400).json({ message: 'please provide an address' })

  const existingAddressEstate = await Estate.findOne({ address })
  if (existingAddressEstate) return res.status(400).json({ message: 'Address is unique to each estate' })

  const newEstate = await Estate.create({ address, apartments, floors })

  res.status(201).json({ estate: newEstate })
})

export const getEstate = catchAsync(async (req: GetEstateRequestType, res: Response) => {
  const { id: estateID } = req.params

  const estate = await Estate.findById(estateID)
  if (!estate) return res.status(400).json({ message: 'estate not found' })

  res.status(200).json({ estate })
});

export const updateEstate = catchAsync(async (req: UpdateEstateRequestType, res: Response) => {
  const { id: estateID } = req.params
  const restrictedBody = restrictUpdate({ ...req.body }, ['address', 'floors', 'apartments'])

  const buildAddressQuery = () => {
    const query = { '$set': {} }

    if (restrictedBody.address) {
      const address: any = restrictedBody.address
      for (const k in address) {
        const key = `address.${k}`
        query['$set'] = { ...query['$set'], [key]: address[k] }
      }
    }

    if (restrictedBody.apartments) query['$set'] = { ...query['$set'], 'apartments': restrictedBody.apartments }
    if (restrictedBody.floors) query['$set'] = { ...query['$set'], 'floors': restrictedBody.floors }

    return query
  }

  const updatedEstate = await Estate.findOneAndUpdate({ '_id': estateID }, buildAddressQuery(), { new: true, runValidators: true })
  return res.status(200).json({updatedEstate})
})

export const deleteEstate = catchAsync(async (req: DeleteEstateRequestType, res: Response) => {
  const { id: estateID } = req.params

  await Estate.findByIdAndDelete(estateID)

  res.status(204).json()
})