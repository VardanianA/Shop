import check from "express-validator/check/index.js";

// query stugox validation
export const idValidation = (value) =>
    check.query(value)
        .isInt()
        .withMessage(`${value} is Not Defined`)
        .not()
        .isEmpty()
        .trim();

// middleware
export async function checkBrandIdQueryValidator(req, res, next) {
    try {
        await Promise.all([
            idValidation('brandid')
        ].map(functionItem => functionItem(req, res, () => null)));
        const result = check.validationResult(req);
        const hasErrors = !result.isEmpty();
        if (hasErrors) {
            res.status(400).send('Validation faild');
        }
        return next();
    } catch (error) {
        return next(error);
    }
}

export async function checkCategoryIdQueryValidator(req, res, next) {
    try {
        await Promise.all([
            idValidation('categoryid')
        ].map(functionItem => functionItem(req, res, () => null)));
        const result = check.validationResult(req);
        const hasErrors = !result.isEmpty();
        if (hasErrors) {
            res.status(400).send('Validation faild');
        }
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
        const result = check.validationResult(req);
        const hasErrors = !result.isEmpty();
        if (hasErrors) {
            res.status(400).send('Validation faild');
        }
        return next();
    } catch (error) {
        return next(error);
    }
}
