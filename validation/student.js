const joi = require("joi");
const Schema = require("../models/index");
const validateSchema = async (inputs, schema) => {
  try {
    const { error, value } = Schema.validate(inputs);
    if (error)
      throw error.details ? error.details[0].message.replace(/[""]+/g, "") : "";
    else return false;
  } catch (error) {
    throw error;
  }
};
exports.createStudent = async (req, property = "body") => {
  let schema = Joi.object().keys({
    userName: Joi.string().required(),
    Gender: Joi.number().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  return await validateSchema(req[property], schema);
};
