import dotenv from 'dotenv';
import path from 'path';
import dotenvExpand from 'dotenv-expand';

dotenvExpand.expand(
  dotenv.config({ path: path.resolve(__dirname, '../../../config', '.env.common') })
);

// dotenvExpand.expand(
//     dotenv.config({ path: path.resolve(__dirname, '../../../config', '.env.194') })
//   );

// dotenvExpand.expand(
//     dotenv.config({ path: path.resolve(__dirname, '../../../config', '.env.jenkins') })
//   );

export class env
{
    static baseurl = process.env.BASEURL!;
    static functionalUsername =process.env.FUNCTIONALUSERNAME!;
    static functionalUserpassword =process.env.FUNCTIONALUSERPASSWORD!;
}