import alTurki from "../assets/client-al-turki.webp";
import galfar from "../assets/client-galfar.webp";
import muscatEng from "../assets/client-muscat-engineering.webp";
import omanLng from "../assets/client-oman-lng.webp";
import petrofac from "../assets/client-petrofac.webp";
import seehAlSarya from "../assets/client-seeh-al-sarya.webp";
import sts from "../assets/client-sts.webp";
import tecnicas from "../assets/client-tecnicas-reunidas.webp";
import worley from "../assets/client-worley.webp";
import shell from "../assets/client-shell.webp"



// Client logos shown on the home page strip and the Our Clients page.
export const clients = [
  { name: "Shell", sector: "Integrated Energy", logo: shell },
  { name: "Oman LNG", sector: "Liquefied Natural Gas", logo: omanLng },
  { name: "Petrofac", sector: "Energy Services", logo: petrofac },
  { name: "Worley", sector: "Engineering & EPC", logo: worley },
  { name: "Técnicas Reunidas", sector: "Engineering & EPC", logo: tecnicas },
  { name: "Galfar", sector: "EPC Contractor", logo: galfar },
  { name: "Al Turki", sector: "Construction & EPC", logo: alTurki },
  { name: "Muscat Engineering Consultancy", sector: "Engineering Consultancy", logo: muscatEng },
  { name: "Seeh Al Sarya Engineering", sector: "Oilfield Engineering", logo: seehAlSarya },
  { name: "STS", sector: "Industrial Services", logo: sts },
] as const;
