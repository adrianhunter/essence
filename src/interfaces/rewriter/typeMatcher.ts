export type PrimitiveTypeName = 'String' | 'Number' | 'Boolean'

export type FunctionType = {
    type: 'Function'
    arguments: Type[]
    return: Type
}

export type PrimitiveType = {
    type: 'Primitive'
    name: PrimitiveTypeName
}

export type StructuralType = {
    type: 'Structural'
    members: {
        [key: string]: Type
    }
}

export type Type
    = PrimitiveType
    | StructuralType
    | FunctionType
