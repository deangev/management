import {
  catchAsync,
  getErrorResponse,
  restrictUpdate,
} from '@management/core/utils';
import { Request, Response } from 'express';
import {
  CreateSupplierRequestType,
  DeleteSupplierRequestType,
  GetSupplierRequestType,
  UpdateSupplierRequestType,
} from '@management/core/types';
import Supplier from '../models/SupplierModel';

export const searchSuppliers = catchAsync(
  async (req: Request, res: Response) => {
    const suppliers = await Supplier.find();

    if (!suppliers) throw getErrorResponse(400, 'Suppliers not found');

    res.status(200).json({ hits: suppliers.length, suppliers });
  }
);

export const createSupplier = catchAsync(
  async (req: CreateSupplierRequestType, res: Response) => {
    const { name, phoneNumber } = req.body;

    const newSupplier = await Supplier.create({ name, phoneNumber });

    return res.status(201).json({ supplier: newSupplier });
  }
);

export const getSupplier = catchAsync(
  async (req: GetSupplierRequestType, res: Response) => {
    const { id: supplierID } = req.params;

    const supplier = await Supplier.findById(supplierID);
    if (!supplier) throw getErrorResponse(400, 'supplier not found');

    res.status(200).json({ supplier });
  }
);

export const updateSupplier = catchAsync(
  async (req: UpdateSupplierRequestType, res: Response) => {
    const { id: supplierID } = req.params;

    if (!supplierID) return getErrorResponse(400, 'No supplier id provided');

    const restrictedBody = restrictUpdate({ ...req.body }, [
      'name',
      'phoneNumber',
    ]);

    const query: { $set: typeof restrictedBody } = { $set: {} };

    for (const key in restrictedBody) {
      query['$set'][key] = restrictedBody[key];
    }

    const updatedSupplier = await Supplier.findOneAndUpdate(
      { _id: supplierID },
      query,
      { new: true, runValidators: true }
    );
    return res.status(200).json({ updatedSupplier });
  }
);

export const deleteSupplier = catchAsync(
  async (req: DeleteSupplierRequestType, res: Response) => {
    const { id: supplierID } = req.params;

    if (!supplierID) throw getErrorResponse(400, 'No supplier id provided');
    await Supplier.findByIdAndDelete(supplierID);

    res.status(204).json();
  }
);
