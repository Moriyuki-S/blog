import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ja';
dayjs.extend(relativeTime);
dayjs.locale('ja');

export const calculateTimeDifference = (date: Date) => {
	return dayjs(date).fromNow();
};

export const formatTimetoJapanese = (date: Date) => {
	return dayjs(date).format('YYYY年MM月DD日');
};
