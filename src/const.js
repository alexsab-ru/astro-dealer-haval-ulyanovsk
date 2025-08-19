import { phoneFormat } from '@/js/utils/numbers.format';
import { LAST_DAY, MONTH, YEAR } from '@/js/utils/date';
// Конечное время для таймера
//string 2025-12-31T23:59:59+04:00
export const TIMER = { title: 'До конца акции осталось',subtitle: '', endtime: `${YEAR}-${MONTH}-${LAST_DAY}T23:59:59+04:00`, btnName: 'Зафиксировать цену', show: false };
// Объект для бегущей строки
export const MARQUEE = { title: `Тотальная распродажа до ${LAST_DAY}.${MONTH}.${YEAR}`, count: 8, speed: 20, show: false };
// Ссылка яндекс-виджета
export const LINK_WIDGET = 'https://yandex.ru/map-widget/v1/-/';

// Ссылки под хедером
import { groupArrayByKey } from '@/js/utils/groupArrayByKey';
import modelsData from '@/data/models.json';
const { models } = modelsData;
const groupModelsByBrand = groupArrayByKey(models.filter(model => model.show), 'mark_id');
const children = Object.keys(groupModelsByBrand).reduce((acc, key) => {
	acc[key] = groupModelsByBrand[key].map(model => ( { url: `/models/${model.id}/`, name: `${model.name.toUpperCase()}`, thumb: model.thumb } ) );
	return acc;
}, {});
export const LINKS_MENU = [
	{url: '#specials', name: 'Спецпредложения'},
	// {url: '#models', name: 'Модели'},
	{url: '#test-drive', name: 'Запись на тест-драйв'},
	{url: '#cars', name: 'Авто в наличии'},
	// {url: 'catalog/', name: 'Каталог'},
	// {url: 'used_cars/', name: 'Авто с пробегом'},
	// { 
	// 	url: 'models/', 
	// 	name: 'Модели',
	// 	children
	// },
	// {url: 'trade-in/', name: 'Оценка автомобиля'},
	// {url: 'news/', name: 'Новости'},
	// {url: 'service-request/', name: 'Запись на сервис'},
	// {url: '#services', name: 'Услуги'},
	{url: '#contacts', name: 'Контакты'},
];

// Коллекции
export const COLLECTIONS = [
	// {name: 'special-offers', title: 'Спецпредложения'},
	// {name: 'news', title: 'Новости'},
];

// Текст согласия в формах
export const AGREE_LABEL = '<span>Даю согласие на обработку своих персональных данных на условиях, указанных</span> <a href="/privacy-policy/" class="!m-0 underline transition-all hover:no-underline" target="_blank">здесь</a> и на использование cookie на условиях, указанных <a href="/cookie-policy/" class="!m-0 underline transition-all hover:no-underline" target="_blank">здесь</a>';

// Текст информации в футере
import salonsData from '@/data/salons.json';
import settings from '@/data/settings.json';
const { phone_common } = settings;
const salons = salonsData.filter(salon => !salon?.type || salon?.type.includes('footer_info'));
const phones = phone_common ? [`<a class="whitespace-nowrap" href="tel:${phoneFormat(phone_common)}">${phone_common}</a>`] : salons.map((salon) => { return `<span>${salon.name}</span> <a class="whitespace-nowrap" href="tel:${phoneFormat(salon.phone)}">${salon.phone}</a>` });

export const FOOTER_INFO = '<sup>*</sup> Вся представленная на сайте информация, касающаяся автомобилей и сервисного обслуживания, носит информационный характер и не является публичной офертой, определяемой положениями ст. 437 ГК РФ. Все цены, указанные на данном сайте, носят информационный характер. Для получения подробной информации просьба обращаться к менеджерам отдела продаж по номеру телефона '+phones.join(', ')+'. Опубликованная на данном сайте информация может быть изменена в любое время без предварительного уведомления.<br>Ежемесячный платеж по кредиту по акционной программе кредитования «Haval Direct» (Хавал Директ) для новых автомобилей иностранных марок 2024 и 2025 года выпуска составляет 20 022 рублей. Расчет произведен исходя из следующих параметров: цена автомобиля HAVAL 2 400 000,00 рублей , первоначальный взнос 1 920 000,00 рублей (80% от стоимости автомобиля); срок кредита – 24 месяца; полная стоимость кредита на момент заключения Договора –0,01%, процентная ставка – 0,01% годовых, сумма кредита – 480 000,00 рублей. Расчет платежа произведен на 07.08.2025 года, является предварительным и может отличаться от фактического при изменении параметров/даты предоставления кредита.  Срок акции – с 07.08.2025 г. по 31.08.2025 г.  Кредит предоставляется ПАО «ВТБ» (Генеральная лицензия Банка России № 1000 от 22.01.1998 г.). Не является публичной офертой.';
export const REVIEWS_LIMIT = Infinity;
