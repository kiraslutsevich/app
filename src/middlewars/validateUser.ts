import * as yup from 'yup';

export const userSchema = yup.object().shape({
  id: yup.number().required().positive().integer(),
});

export const validateUser = (deleteUserSchema) => async (req, res, next) => {
  try {
    await deleteUserSchema.validate({
      id: req.params.id,
    });
    return next();
  } catch (err) {
    res.sendStatus(400);
  }
};