import { body } from "express-validator";

const userRegisterValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is Required")
      .isEmail()
      .withMessage("Email is Invalid"),
    body("username")
      .trim()
      .isEmpty()
      .withMessage("UserName is Required")
      .isLowercase()
      .withMessage("User name must be in lower case")
      .isLength({ min: 3 })
      .withMessage("USer name must be atleast three characters long"),
    body("password").trim().notEmpty().withMessage("Password is required "),
    body("fullName").optional().trim(),
  ];
};

const userLoginValidator = () => {
  return [
    body("email").optional().isEmail().withMessage("Email is Inavalid"),
    body("password").notEmpty().withMessage("Password is Required"),
  ];
};

export { userRegisterValidator, userLoginValidator };
