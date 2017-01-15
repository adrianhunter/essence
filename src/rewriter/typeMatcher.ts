import { rewriter } from '../interfaces'

type FunctionType   = rewriter.FunctionType
type PrimitiveType  = rewriter.PrimitiveType
type StructuralType = rewriter.StructuralType
type Type           = rewriter.Type

const matchPrimitiveType = (leftHandType: PrimitiveType, rightHandType: PrimitiveType): boolean => {
    return leftHandType.name === rightHandType.name
}

const matchFunctionType = (leftHandType: FunctionType, rightHandType: FunctionType): boolean => {
    if (!matchType(leftHandType.return, rightHandType.return)) {
        return false
    }

    if (leftHandType.arguments.length !== rightHandType.arguments.length) {
        return false
    }

    for (let i = 0; i < leftHandType.arguments.length; i++) {
        let leftHandArgument  = leftHandType.arguments[i]
        let rightHandArgument = rightHandType.arguments[i]

        if (!matchType(leftHandArgument, rightHandArgument)) {
            return false
        }
    }

    return true
}

const matchStructuralType = (leftHandType: StructuralType, rightHandType: StructuralType): boolean => {
    if (Object.keys(leftHandType.members).length > Object.keys(rightHandType.members).length) {
        return false
    }

    for (let key in leftHandType.members) {
        if (!matchType(leftHandType.members[key], rightHandType.members[key])) {
            return false
        }
    }

    return true
}

export const matchType = (leftHandType: Type, rightHandType: Type): boolean => {
    switch (leftHandType.type) {
        case 'Primitive':
            if (rightHandType.type === 'Primitive') {
                return matchPrimitiveType(leftHandType, rightHandType)
            } else {
                return false
            }

        case 'Function':
            if (rightHandType.type === 'Function') {
                return matchFunctionType(leftHandType, rightHandType)
            } else {
                return false
            }

        case 'Structural':
            if (rightHandType.type === 'Structural') {
                return matchStructuralType(leftHandType, rightHandType)
            } else {
                return false
            }
    }
}
