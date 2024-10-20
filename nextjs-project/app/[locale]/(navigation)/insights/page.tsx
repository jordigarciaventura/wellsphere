import InsightsClient from "../../../../components/InsightsClient";

interface Props {
  params: { locale: string };
}

export default function InsightsPage({ params: { locale } }: Props) {
  // Página principal chamando o InsightsClient
  return (
    <>
      <InsightsClient locale={locale} />
    </>
  );
}
