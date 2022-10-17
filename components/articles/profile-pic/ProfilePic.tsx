import Image from 'next/image';

export interface IProfilePic {
  sampleTextProp?: string;
  author?: {
    name: string;
    picture: any;
  };
  name?: string;
  picture?: any;
  url?: any;
}

const ProfilePic: React.FC<IProfilePic> = ({ name, picture }) => {
  /*   console.log(typeof picture.data.attributes.url);
  console.log(picture.data.attributes.url); */
  /* const url = picture.data.attributes.url ?? picture.data.attributes[0].url; */
  /*   const imageUrl = `${
    url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
  }${url}`; */
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image
          src={
            /* `${
              url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
            }${url}` */ picture
          }
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
    </div>
  );
};

export default ProfilePic;
