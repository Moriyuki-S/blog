import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
dayjs().format();
dayjs().locale('ja');

export const calculateTimeDifference = (date: Date) => {
    return dayjs(date).fromNow();
};