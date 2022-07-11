import { Handler } from 'express';
import { StatusCodes } from 'http-status-codes';

const updateUser: Handler = async (req, res, next) => {
  try {
    return res.sendStatus(StatusCodes.OK).json();
  } catch (err) {
    next(err);
  }
};

export default updateUser;
