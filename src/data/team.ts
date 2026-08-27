export interface TeamMember {
  name?: string;
  role?: string;
  bio?: string;
  image?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  mnbRegistration?: string;
  businessName?: string;
  placeholder?: boolean;
}
export const team: TeamMember[] = [
  {
    name: 'Lőrincz Gergely',
    role: 'Alapító',
    bio: 'Gergő azért hozta létre a Viziot, mert hisz abban, hogy a pénzügyi döntések mögött mindig egy emberi történet, egy család és egy szebb jövő iránti vágy áll. Célja, hogy minden ügyfél valódi figyelmet, őszinte válaszokat és biztos kapaszkodót kapjon a saját útjához.',
    image: 'Lőrincz Gergely portréja',
    email: 'office@vizioconsulting.hu',
    mnbRegistration: '125122300062',
    businessName: 'Lőrincz Gergely e.v.',
  },
  {
    name: 'Szölke Richárd',
    role: 'Csapattag',
    bio: 'Ricsi friss energiával és nyitott, emberközpontú szemlélettel érkezett a Vizio csapatába. Fontos számára, hogy az ügyfelek ne csupán lehetőségeket lássanak maguk előtt, hanem azt is érezzék: van mellettük valaki, aki figyel rájuk és szívvel-lélekkel támogatja őket.',
    image: 'Szölke Richárd portréja',
  },
  { placeholder: true },
  { placeholder: true },
];
