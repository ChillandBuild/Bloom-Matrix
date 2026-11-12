import CountryLandingPage, { countryMetadata } from "@/components/CountryLandingPage";
import { MALAYSIA } from "@/lib/content/countries";

export const metadata = countryMetadata(MALAYSIA);

export default function Page() {
  return <CountryLandingPage page={MALAYSIA} />;
}
