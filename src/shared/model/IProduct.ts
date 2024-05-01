import { IProductDTO } from '@core/dto/IProductDTO';

export interface IProduct {
	id: string;
	url: string;
	title: string;
	price: number;
	currency: string;
	sizes: string[];
	description: string;
}

export function mapProductDTOToProduct(dto: IProductDTO): IProduct {
	return {
		id: dto.id,
		url: dto.url,
		title: dto.title,
		price: dto.price,
		currency: dto.currency,
		sizes: dto.sizes,
		description: dto.description,
	};
}
