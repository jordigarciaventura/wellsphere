interface Props {
  title: string;
  description: string;
}

export default function MoodWeekDay({ title, description }: Props) {
  return (
    <div className="flex flex-col gap-2 bg-red-200">
      <p className="text-2xl font-bold">{title}</p>
      <p>{description}</p>
    </div>
  );
}
