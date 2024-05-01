import { IProductShortDTO } from '@core/dto/IProductShortDTO';

export interface IProductShort {
	id: string;
	url: string;
	title: string;
	price: number;
	currency: string;
}

export function mapProductShortDTOToProductShort(
	dto: IProductShortDTO,
): IProductShort {
	return {
		id: dto.id,
		url: dto.url,
		title: dto.title,
		price: dto.price,
		currency: dto.currency,
	};
}
