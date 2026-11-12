import CountryLandingPage, { countryMetadata } from "@/components/CountryLandingPage";
import { UAE } from "@/lib/content/countries";

export const metadata = countryMetadata(UAE);

export default function Page() {
  return <CountryLandingPage page={UAE} />;
}
