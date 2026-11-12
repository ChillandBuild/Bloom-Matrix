import CountryLandingPage, { countryMetadata } from "@/components/CountryLandingPage";
import { SINGAPORE } from "@/lib/content/countries";

export const metadata = countryMetadata(SINGAPORE);

export default function Page() {
  return <CountryLandingPage page={SINGAPORE} />;
}
