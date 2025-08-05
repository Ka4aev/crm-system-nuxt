export interface IBaseField {
	$createdAt: string
	$id: string
}

export interface ICustomer extends IBaseField {
	name: string
	email: string
	avatar_url: string
	from_source?: string
}

export interface IComment extends IBaseField {
	text: string
}


export interface IDeal extends IBaseField {
	comments: IComment[]
	customer: ICustomer
	name: string
	price: number
	status: EnumStatus
}
