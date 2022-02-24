import validator, { check, param, validationResult } from "express-validator";

// query stugox validation
export const idValidation = (value) => 
    check(value)
        .isInt()
        .withMessage(`${value} is Not Defined`)
        .not()
        .isEmpty()
        .trim();

// middleware
export async function checkCountIdQueryValidator(req, res, next) {
    try {
        await Promise.all([
            idValidation('count')
        ].map(functionItem => functionItem(req, res, () => null)));
        validationResult(req).throw();
        return next();
    } catch (error) {
        return next(error);
    }
}

export async function checkBrandIdQueryValidator(req, res, next) {
    try {
        await Promise.all([
            idValidation('brandid')
        ].map(functionItem => functionItem(req, res, () => null)));
        validationResult(req).throw();
        return next();
    } catch (error) {
        console.log('Error: ', error)
        return next(error);
    }
}

export async function checkCategoryIdQueryValidator(req, res, next) {
    try {
        await Promise.all([
            idValidation('categoryid')
        ].map(functionItem => functionItem(req, res, () => null)));
        return next();
    } catch (error) {
        return next(error);
    }
}

export async function checkIdQueryValidator(req, res, next) {
    try {
        await Promise.all([
            idValidation('id')
        ].map(functionItem => functionItem = (req, res, () => null)));
        return next();
    } catch (error) {
        return next(error);
    }
}