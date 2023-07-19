import {FullConfig} from "@playwright/test"
import dotenv from 'dotenv';
import path from 'path';
import dotenvExpand from 'dotenv-expand';

export default async function globalSetup(config:FullConfig)
{
    if (process.env.test_env) {
        dotenvExpand.expand(
            dotenv.config({ path: path.resolve(__dirname, '../../../config', `.env.${process.env.test_env}`) })
          );
    }
}
