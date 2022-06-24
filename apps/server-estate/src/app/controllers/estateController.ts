import { catchAsync, restrictUpdate } from '@sagi/core/utils';
import { Response, Request } from 'express';
import Estate from '../models/EstateModel'
import { Estate as EstateType } from '@sagi/core/types'

interface RDbyIDRequestType extends Request {
  params: { id: EstateType['_id'] }
}
interface CreateEstateRequestType extends Request {
  body: EstateType
}

interface EditEstateRequestType extends Request {
  params: { id: EstateType['_id'] }
  body: EstateType
}

const getEstate = catchAsync(async (req: RDbyIDRequestType, res: Response) => {
  const { id: estateID } = req.params
  const estate = await Estate.findById(estateID)
  if (!estate) return res.status(400).json({ message: 'estate not found' })
  res.status(200).json({ estate })
});

const createEstate = catchAsync(async (req: CreateEstateRequestType, res: Response): Promise<void> => {
  const { address, apartments, floors } = req.body
  if (!address) res.status(400).json({ message: 'please provide an address' })
  if (!apartments) res.status(400).json({ message: 'please provide an address' })
  if (!floors) res.status(400).json({ message: 'please provide an address' })

  const newEstate = await Estate.create({ address, apartments, floors })
  res.status(201).json({ estate: newEstate })
})

const deleteEstate = catchAsync(async (req: RDbyIDRequestType, res: Response): Promise<void> => {
  const { id: estateID } = req.params
  await Estate.findByIdAndDelete(estateID)
  res.status(204).json()
})

const updateEstate = catchAsync(async (req: EditEstateRequestType, res: Response): Promise<void> => {
  const { id: estateID } = req.params
  const updatedEstate = await Estate.findByIdAndUpdate(estateID, restrictUpdate({ ...req.body }, ['contacts', 'address']), { new: true, runValidators: true })
  res.status(200).json({ updatedEstate })
})

export { getEstate, createEstate, deleteEstate, updateEstate };
