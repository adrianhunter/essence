export type AssignmentNode = {
  type: 'Assignment'
  name: LookupNode
  value: ExpressionNode
}

export type FunctionCallNode = {
  type: 'FunctionCall'
  name: ExpressionNode
  parameters: Array<ExpressionNode>
}

export type NativeFunctionCallNode = {
  type: 'NativeFunctionCall'
  name: ExpressionNode
  parameters: Array<ExpressionNode>
}

export type ReturnNode = {
  type: 'Return'
  value: ExpressionNode
}

export type LookupNode = {
  type: 'Lookup'
  base: string
  member: LookupNode | null
}

export type BranchNode = {
  type: 'Branch'
  condition: ExpressionNode
  trueBranch: Array<Node>
  falseBranch: Array<Node>
}

export type NumberValue = {
  type: "Number"
  value: number
}

export type StringValue = {
  type: "String"
  value: string
}

export type BooleanValue = {
  type: "Boolean"
  value: boolean
}

export type FunctionValue = {
  type: "Number"
  value: number
}

export type ValueNode = {
  type: 'Value'
  value: NumberValue | BooleanValue | StringValue | FunctionValue | null
	members: {
		[key: string]: ValueNode
	}
}

export type ExpressionNode
  = ValueNode
  | LookupNode
  | FunctionCallNode
  | NativeFunctionCallNode

export type Node
  = AssignmentNode
  | FunctionCallNode
  | NativeFunctionCallNode
  | ReturnNode
  | BranchNode
  | ExpressionNode
