import CountryLandingPage, { countryMetadata } from "@/components/CountryLandingPage";
import { UK } from "@/lib/content/countries";

export const metadata = countryMetadata(UK);

export default function Page() {
  return <CountryLandingPage page={UK} />;
}
