export const currentDate = (): string[] => {
  const date = new Date();

  const formattedDate = date.toLocaleDateString('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return formattedDate.split(' ');
}